import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Recipe, 
  WeeklyPlan, 
  PantryItem, 
  ShoppingItem, 
  WeekDays, 
  MealType, 
  CuisineRegion, 
  DishType, 
  DietaryPreference, 
  DifficultyLevel,
  UserProfile,
  EmailNotification
} from '../types';
import { ALL_RECIPES, getRecipeById } from '../data/allRecipes';
import { INITIAL_PANTRY_ITEMS } from '../data/pantry';
import { INITIAL_MEAL_PLAN } from '../data/defaultMealPlan';
import { Language, TRANSLATIONS } from '../data/translations';
import { decodeGoogleJwt, googleTokenToUserProfile } from '../utils/googleAuth';
import { 
  createGoogleSecurityEmail, 
  createWelcomeEmail, 
  createMealPlanEmail, 
  createBazaarListEmail 
} from '../services/emailService';

interface FilterState {
  searchQuery: string;
  mealType: MealType | 'All';
  cuisineRegion: CuisineRegion | 'All';
  dishType: DishType | 'All';
  dietaryPreference: DietaryPreference | 'All';
  cookingTime: 'All' | 'under-20' | '20-40' | '40-60' | '60-plus';
  difficulty: DifficultyLevel | 'All';
}

interface AppContextType {
  // Navigation & Modals
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  cookingModeRecipe: Recipe | null;
  setCookingModeRecipe: (recipe: Recipe | null) => void;
  isSmartPlanOpen: boolean;
  setIsSmartPlanOpen: (open: boolean) => void;
  isCreateRecipeOpen: boolean;
  setIsCreateRecipeOpen: (open: boolean) => void;
  
  // Google Authentication
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  loginWithGoogle: (credential: string) => boolean;
  signInWithGoogleEmail: (email: string, name?: string, avatarUrl?: string) => void;
  logout: () => void;

  // Email Notifications
  emails: EmailNotification[];
  isEmailInboxOpen: boolean;
  setIsEmailInboxOpen: (open: boolean) => void;
  markEmailAsRead: (id: string) => void;
  sendBazaarEmailToUser: () => void;
  sendMealPlanEmailToUser: () => void;
  
  // Recipes
  recipes: Recipe[];
  addCustomRecipe: (newRecipe: Recipe) => void;
  
  // Favorites
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
  
  // Filters & Search
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  
  // Meal Plan
  mealPlan: WeeklyPlan;
  addRecipeToMealPlan: (day: WeekDays, slot: 'breakfast' | 'lunch' | 'snack' | 'dinner', recipeId: string) => void;
  removeRecipeFromMealPlan: (day: WeekDays, slot: 'breakfast' | 'lunch' | 'snack' | 'dinner', index: number) => void;
  clearMealPlan: () => void;
  setWeeklyPlan: (plan: WeeklyPlan) => void;
  duplicateDayMeals: (fromDay: WeekDays, toDay: WeekDays) => void;
  
  // Pantry
  pantry: PantryItem[];
  addPantryItem: (item: Omit<PantryItem, 'id'>) => void;
  removePantryItem: (id: string) => void;
  updatePantryItem: (id: string, updates: Partial<PantryItem>) => void;
  expiringSoonPantryItems: PantryItem[];
  
  // Shopping List
  shoppingList: ShoppingItem[];
  toggleShoppingItem: (id: string) => void;
  addCustomShoppingItem: (name: string, quantity: number, unit: string, category?: ShoppingItem['category']) => void;
  removeShoppingItem: (id: string) => void;
  clearCheckedShoppingItems: () => void;
  regenerateShoppingListFromPlan: () => void;
  
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof TRANSLATIONS['en'], params?: Record<string, string | number>) => string;

  // Toast notification
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  mealType: 'All',
  cuisineRegion: 'All',
  dishType: 'All',
  dietaryPreference: 'All',
  cookingTime: 'All',
  difficulty: 'All'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [cookingModeRecipe, setCookingModeRecipe] = useState<Recipe | null>(null);
  const [isSmartPlanOpen, setIsSmartPlanOpen] = useState<boolean>(false);
  const [isCreateRecipeOpen, setIsCreateRecipeOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // User Authentication State
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const savedUser = localStorage.getItem('rannaghor_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Email Notifications State
  const [emails, setEmails] = useState<EmailNotification[]>(() => {
    try {
      const saved = localStorage.getItem('rannaghor_emails');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    const savedUser = localStorage.getItem('rannaghor_user');
    if (savedUser) {
      try {
        const u: UserProfile = JSON.parse(savedUser);
        return [
          createGoogleSecurityEmail(u),
          createWelcomeEmail(u)
        ];
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });
  const [isEmailInboxOpen, setIsEmailInboxOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('rannaghor_emails', JSON.stringify(emails));
    } catch (e) {
      console.error(e);
    }
  }, [emails]);

  // Language State
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('rannaghor_lang');
      return (saved === 'bn' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('rannaghor_lang', lang);
    showToast(lang === 'bn' ? 'ভাষা পরিবর্তন করে বাংলা করা হলো 🇧🇩' : 'Language switched to English 🇬🇧');
  };

  const t = (key: keyof typeof TRANSLATIONS['en'], params?: Record<string, string | number>): string => {
    let str = TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || '';
    if (params) {
      Object.entries(params).forEach(([pKey, pVal]) => {
        str = str.replace(`{${pKey}}`, String(pVal));
      });
    }
    return str;
  };

  // Recipes (all built-in + local custom ones)
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    try {
      const saved = localStorage.getItem('rannaghor_custom_recipes');
      if (saved) {
        const custom = JSON.parse(saved);
        return [...ALL_RECIPES, ...custom];
      }
    } catch (e) {
      console.error(e);
    }
    return ALL_RECIPES;
  });

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rannaghor_favorites');
      return saved ? JSON.parse(saved) : ['shorshe-ilish', 'aloo-posto', 'basanti-pulao', 'mishti-doi'];
    } catch {
      return ['shorshe-ilish', 'aloo-posto', 'basanti-pulao', 'mishti-doi'];
    }
  });

  // Filters
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  // Meal Plan
  const [mealPlan, setMealPlan] = useState<WeeklyPlan>(() => {
    try {
      const saved = localStorage.getItem('rannaghor_mealplan');
      return saved ? JSON.parse(saved) : INITIAL_MEAL_PLAN;
    } catch {
      return INITIAL_MEAL_PLAN;
    }
  });

  // Pantry
  const [pantry, setPantry] = useState<PantryItem[]>(() => {
    try {
      const saved = localStorage.getItem('rannaghor_pantry');
      return saved ? JSON.parse(saved) : INITIAL_PANTRY_ITEMS;
    } catch {
      return INITIAL_PANTRY_ITEMS;
    }
  });

  // Helper to generate automatic shopping list from current meal plan & pantry
  const generateInitialShoppingList = (currentPlan: WeeklyPlan): ShoppingItem[] => {
    const ingredientMap = new Map<string, { quantity: number; unit: string; category: ShoppingItem['category']; bengaliName?: string }>();
    const days: WeekDays[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    days.forEach(day => {
      const dayPlan = currentPlan[day];
      if (!dayPlan) return;
      (['breakfast', 'lunch', 'snack', 'dinner'] as const).forEach(slot => {
        dayPlan[slot].forEach(item => {
          const rec = getRecipeById(item.recipeId);
          if (rec) {
            rec.ingredients.forEach(ing => {
              const key = ing.name.toLowerCase();
              if (ingredientMap.has(key)) {
                const prev = ingredientMap.get(key)!;
                prev.quantity += ing.quantity;
              } else {
                ingredientMap.set(key, {
                  quantity: ing.quantity,
                  unit: ing.unit,
                  category: ing.category,
                  bengaliName: ing.bengaliName
                });
              }
            });
          }
        });
      });
    });

    const items: ShoppingItem[] = [];
    let idx = 1;
    ingredientMap.forEach((val, key) => {
      // Pick formatted display name
      const name = key.charAt(0).toUpperCase() + key.slice(1);
      items.push({
        id: `shop-${idx++}`,
        name: name,
        bengaliName: val.bengaliName,
        quantity: Math.round(val.quantity * 10) / 10,
        unit: val.unit,
        category: val.category,
        checked: false,
        fromMealPlan: true
      });
    });

    return items;
  };

  // Shopping List
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(() => {
    try {
      const saved = localStorage.getItem('rannaghor_shopping');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return generateInitialShoppingList(INITIAL_MEAL_PLAN);
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('rannaghor_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('rannaghor_mealplan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  useEffect(() => {
    localStorage.setItem('rannaghor_pantry', JSON.stringify(pantry));
  }, [pantry]);

  useEffect(() => {
    localStorage.setItem('rannaghor_shopping', JSON.stringify(shoppingList));
  }, [shoppingList]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Google Authentication handlers
  const loginWithGoogle = (credential: string): boolean => {
    const decoded = decodeGoogleJwt(credential);
    if (!decoded) return false;
    const profile = googleTokenToUserProfile(decoded);
    setUser(profile);
    try {
      localStorage.setItem('rannaghor_user', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }

    // Automatically dispatch Google Security Alert & Welcome email notifications
    const secEmail = createGoogleSecurityEmail(profile);
    const welEmail = createWelcomeEmail(profile);
    setEmails(prev => [secEmail, welEmail, ...prev]);

    showToast(
      language === 'bn'
        ? `স্বাগতম ${profile.givenName || profile.name}! ${profile.email}-এ সিকিউরিটি ইমেইল পাঠানো হয়েছে ✉️`
        : `Welcome back, ${profile.givenName || profile.name}! Security notice sent to ${profile.email} ✉️`
    );
    return true;
  };

  const signInWithGoogleEmail = (email: string, name?: string, avatarUrl?: string) => {
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    // Derive a clean user display name from email or input
    let derivedName = name?.trim();
    if (!derivedName) {
      const emailPrefix = cleanEmail.split('@')[0];
      derivedName = emailPrefix
        .split(/[._-]/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
    }

    const givenName = derivedName.split(' ')[0] || 'User';
    const familyName = derivedName.split(' ').slice(1).join(' ');

    const profile: UserProfile = {
      id: `google-user-${Date.now()}`,
      name: derivedName,
      givenName,
      familyName,
      email: cleanEmail,
      avatarUrl: avatarUrl?.trim() || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(derivedName)}&backgroundColor=ab2222,c8830f,2d6a4f`,
      emailVerified: true,
      authProvider: 'google',
      joinedAt: new Date().toISOString()
    };

    setUser(profile);
    try {
      localStorage.setItem('rannaghor_user', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }

    // Automatically dispatch Google Security Alert & Welcome email notifications
    const secEmail = createGoogleSecurityEmail(profile);
    const welEmail = createWelcomeEmail(profile);
    setEmails(prev => [secEmail, welEmail, ...prev]);

    showToast(
      language === 'bn'
        ? `স্বাগতম ${givenName}! ${cleanEmail}-এ Google সিকিউরিটি ইমেইল পৌঁছেছে ✉️`
        : `Signed in as ${derivedName}! Security alert dispatched to ${cleanEmail} ✉️`
    );
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('rannaghor_user');
    } catch (e) {
      console.error(e);
    }
    showToast(
      language === 'bn'
        ? 'সফলভাবে লগআউট হয়েছে।'
        : 'Signed out of Google account.'
    );
  };

  // Email Notification helpers
  const markEmailAsRead = (id: string) => {
    setEmails(prev => prev.map(e => e.id === id ? { ...e, read: true } : e));
  };

  const sendBazaarEmailToUser = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    const bazaarEmail = createBazaarListEmail(user, shoppingList);
    setEmails(prev => [bazaarEmail, ...prev]);
    showToast(
      language === 'bn'
        ? `বাজারের ফর্দ ${user.email}-এ পাঠানো হয়েছে! 🛒`
        : `Bazaar list email delivered to ${user.email}! 🛒`
    );
  };

  const sendMealPlanEmailToUser = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    const planEmail = createMealPlanEmail(user, mealPlan);
    setEmails(prev => [planEmail, ...prev]);
    showToast(
      language === 'bn'
        ? `সাপ্তাহিক রুটিন ${user.email}-এ পাঠানো হয়েছে! 📅`
        : `Weekly meal plan email delivered to ${user.email}! 📅`
    );
  };

  const addCustomRecipe = (newRecipe: Recipe) => {
    setRecipes(prev => {
      const updated = [newRecipe, ...prev];
      const customOnly = updated.filter(r => !ALL_RECIPES.some(ar => ar.id === r.id));
      localStorage.setItem('rannaghor_custom_recipes', JSON.stringify(customOnly));
      return updated;
    });
    showToast(`"${newRecipe.name}" added to your recipe collection!`);
  };

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev => {
      const exists = prev.includes(recipeId);
      if (exists) {
        showToast('Removed from favorites');
        return prev.filter(id => id !== recipeId);
      } else {
        showToast('Added to favorites!');
        return [...prev, recipeId];
      }
    });
  };

  const isFavorite = (recipeId: string) => favorites.includes(recipeId);

  const resetFilters = () => setFilters(INITIAL_FILTERS);

  // Meal Plan actions
  const addRecipeToMealPlan = (day: WeekDays, slot: 'breakfast' | 'lunch' | 'snack' | 'dinner', recipeId: string) => {
    setMealPlan(prev => {
      const copy = { ...prev };
      copy[day] = {
        ...copy[day],
        [slot]: [...copy[day][slot], { recipeId }]
      };
      return copy;
    });
    const rec = recipes.find(r => r.id === recipeId);
    showToast(`Added ${rec?.name || 'dish'} to ${day}'s ${slot}`);
  };

  const removeRecipeFromMealPlan = (day: WeekDays, slot: 'breakfast' | 'lunch' | 'snack' | 'dinner', index: number) => {
    setMealPlan(prev => {
      const copy = { ...prev };
      const updatedSlot = [...copy[day][slot]];
      updatedSlot.splice(index, 1);
      copy[day] = {
        ...copy[day],
        [slot]: updatedSlot
      };
      return copy;
    });
    showToast(`Removed meal from ${day}`);
  };

  const clearMealPlan = () => {
    const empty: WeeklyPlan = {
      Monday: { breakfast: [], lunch: [], snack: [], dinner: [] },
      Tuesday: { breakfast: [], lunch: [], snack: [], dinner: [] },
      Wednesday: { breakfast: [], lunch: [], snack: [], dinner: [] },
      Thursday: { breakfast: [], lunch: [], snack: [], dinner: [] },
      Friday: { breakfast: [], lunch: [], snack: [], dinner: [] },
      Saturday: { breakfast: [], lunch: [], snack: [], dinner: [] },
      Sunday: { breakfast: [], lunch: [], snack: [], dinner: [] }
    };
    setMealPlan(empty);
    showToast('Weekly meal plan cleared');
  };

  const setWeeklyPlan = (plan: WeeklyPlan) => {
    setMealPlan(plan);
    showToast('New weekly plan applied!');
  };

  const duplicateDayMeals = (fromDay: WeekDays, toDay: WeekDays) => {
    setMealPlan(prev => ({
      ...prev,
      [toDay]: JSON.parse(JSON.stringify(prev[fromDay]))
    }));
    showToast(`Copied meals from ${fromDay} to ${toDay}`);
  };

  // Pantry actions
  const addPantryItem = (item: Omit<PantryItem, 'id'>) => {
    const newItem: PantryItem = {
      ...item,
      id: `pantry-${Date.now()}`
    };
    setPantry(prev => [newItem, ...prev]);
    showToast(`Added ${item.name} to pantry`);
  };

  const removePantryItem = (id: string) => {
    setPantry(prev => prev.filter(p => p.id !== id));
    showToast('Pantry item removed');
  };

  const updatePantryItem = (id: string, updates: Partial<PantryItem>) => {
    setPantry(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  // Expiring soon items (expiry <= 3 days from simulated today 2026-09-25)
  const expiringSoonPantryItems = pantry.filter(item => {
    if (!item.expiryDate) return false;
    const exp = new Date(item.expiryDate).getTime();
    const now = new Date('2026-09-25').getTime();
    const diffDays = (exp - now) / (1000 * 60 * 60 * 24);
    return diffDays <= 3 && diffDays >= -1;
  });

  // Shopping List actions
  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const addCustomShoppingItem = (name: string, quantity: number, unit: string, category: ShoppingItem['category'] = 'Pantry') => {
    const newItem: ShoppingItem = {
      id: `shop-custom-${Date.now()}`,
      name,
      quantity,
      unit,
      category,
      checked: false,
      fromMealPlan: false
    };
    setShoppingList(prev => [newItem, ...prev]);
    showToast(`Added ${name} to shopping list`);
  };

  const removeShoppingItem = (id: string) => {
    setShoppingList(prev => prev.filter(i => i.id !== id));
  };

  const clearCheckedShoppingItems = () => {
    setShoppingList(prev => prev.filter(i => !i.checked));
    showToast('Checked items cleared');
  };

  const regenerateShoppingListFromPlan = () => {
    const regenerated = generateInitialShoppingList(mealPlan);
    setShoppingList(regenerated);
    showToast('Shopping list updated from current meal plan!');
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedRecipe,
        setSelectedRecipe,
        cookingModeRecipe,
        setCookingModeRecipe,
        isSmartPlanOpen,
        setIsSmartPlanOpen,
        isCreateRecipeOpen,
        setIsCreateRecipeOpen,
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        setIsAuthModalOpen,
        loginWithGoogle,
        signInWithGoogleEmail,
        logout,
        emails,
        isEmailInboxOpen,
        setIsEmailInboxOpen,
        markEmailAsRead,
        sendBazaarEmailToUser,
        sendMealPlanEmailToUser,
        recipes,
        addCustomRecipe,
        favorites,
        toggleFavorite,
        isFavorite,
        filters,
        setFilters,
        resetFilters,
        mealPlan,
        addRecipeToMealPlan,
        removeRecipeFromMealPlan,
        clearMealPlan,
        setWeeklyPlan,
        duplicateDayMeals,
        pantry,
        addPantryItem,
        removePantryItem,
        updatePantryItem,
        expiringSoonPantryItems,
        shoppingList,
        toggleShoppingItem,
        addCustomShoppingItem,
        removeShoppingItem,
        clearCheckedShoppingItems,
        regenerateShoppingListFromPlan,
        language,
        setLanguage,
        t,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
