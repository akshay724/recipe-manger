export type MealType = 'breakfast' | 'lunch' | 'snack' | 'dinner' | 'dessert';

export type CuisineRegion = 
  | 'Kolkata' 
  | 'North Bengal' 
  | 'South Bengal' 
  | 'East Bengal-inspired' 
  | 'Rural Bengal' 
  | 'Bengali Festival';

export type DishType = 
  | 'Bhaja' 
  | 'Dal' 
  | 'Torkari' 
  | 'Mach' 
  | 'Mangsho' 
  | 'Chingri' 
  | 'Vegetarian' 
  | 'Rice' 
  | 'Mishti' 
  | 'Pitha' 
  | 'Chutney' 
  | 'Pickle';

export type DietaryPreference = 'Vegetarian' | 'Non-vegetarian' | 'Vegan' | 'Gluten-free' | 'Low-spice';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Advanced';

export type SpiceLevel = 'Mild' | 'Medium' | 'Spicy';

export interface Ingredient {
  name: string;
  bengaliName?: string;
  quantity: number;
  unit: string;
  category: 'Vegetables' | 'Fish & Meat' | 'Spices' | 'Pantry' | 'Dairy & Sweets' | 'Others';
  notes?: string;
}

export interface Recipe {
  id: string;
  name: string;
  bengaliName: string;
  tagline: string;
  story: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  baseServings: number;
  difficulty: DifficultyLevel;
  spiceLevel: SpiceLevel;
  mealTypes: MealType[];
  cuisineRegion: CuisineRegion;
  dishType: DishType;
  dietaryPreferences: DietaryPreference[];
  isTraditional: boolean;
  featured?: boolean;
  season?: 'Summer' | 'Monsoon' | 'Autumn' | 'Winter' | 'Spring' | 'All-year';
  festivalTags?: string[];
  ingredients: Ingredient[];
  instructions: string[];
  bengaliInstructions?: string[];
  tips: string[];
  bengaliTips?: string[];
  bengaliStory?: string;
  substitutions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  storageInstructions: string;
  commonIngredients: string[]; // Normalized lower case strings for "What Can I Cook" matching
}

export interface PantryItem {
  id: string;
  name: string;
  bengaliName?: string;
  quantity: number;
  unit: string;
  category: 'Vegetables' | 'Fish & Meat' | 'Spices' | 'Pantry' | 'Dairy & Sweets' | 'Others';
  purchaseDate: string; // YYYY-MM-DD
  expiryDate: string; // YYYY-MM-DD
}

export interface ShoppingItem {
  id: string;
  name: string;
  bengaliName?: string;
  quantity: number;
  unit: string;
  category: 'Vegetables' | 'Fish & Meat' | 'Spices' | 'Pantry' | 'Dairy & Sweets' | 'Others';
  checked: boolean;
  fromMealPlan?: boolean;
}

export interface MealSlotItem {
  recipeId: string;
  servings?: number;
  customNote?: string;
}

export interface DayPlan {
  breakfast: MealSlotItem[];
  lunch: MealSlotItem[];
  snack: MealSlotItem[];
  dinner: MealSlotItem[];
}

export type WeekDays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export type WeeklyPlan = Record<WeekDays, DayPlan>;

export interface FestivalMenu {
  id: string;
  festivalName: string;
  bengaliFestivalName: string;
  description: string;
  season: string;
  bannerImage: string;
  significance: string;
  menu: {
    breakfast: string[]; // recipe IDs or titles
    lunch: string[];
    snack: string[];
    dinner: string[];
    dessert: string[];
  };
  mustHaveItems: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  givenName?: string;
  familyName?: string;
  email: string;
  avatarUrl: string;
  emailVerified?: boolean;
  authProvider: 'google';
  joinedAt: string;
  preferences?: {
    dietary?: DietaryPreference[];
    preferredRegion?: CuisineRegion;
    familyServings?: number;
  };
}

export interface EmailNotification {
  id: string;
  from: string;
  fromName: string;
  to: string;
  subject: string;
  bengaliSubject?: string;
  bodyText: string;
  bodyHtml: string;
  timestamp: string;
  read: boolean;
  type: 'security' | 'welcome' | 'meal_plan' | 'bazaar_list' | 'pantry_alert';
  actionUrl?: string;
}
