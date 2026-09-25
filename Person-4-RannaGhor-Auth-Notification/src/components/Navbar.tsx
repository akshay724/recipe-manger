import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  CalendarDays, 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  PlusCircle, 
  Sparkles, 
  ChefHat, 
  Archive,
  Menu,
  X,
  Compass,
  Flame,
  Sun,
  LogOut,
  Cloud,
  ShieldCheck,
  Mail
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    favorites, 
    shoppingList, 
    expiringSoonPantryItems, 
    setIsCreateRecipeOpen,
    filters,
    setFilters,
    language,
    setLanguage,
    t,
    user,
    isAuthenticated,
    setIsAuthModalOpen,
    logout,
    emails,
    setIsEmailInboxOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  const unreadEmailCount = emails.filter(e => !e.read).length;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const uncheckedShoppingCount = shoppingList.filter(i => !i.checked).length;

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: language === 'bn' ? 'মূলপাতা' : 'Home', bengali: 'মূলপাতা', icon: ChefHat },
    { id: 'recipes', label: language === 'bn' ? 'রেসিপি সম্ভার' : 'Recipes', bengali: 'রেসিপি সম্ভার', icon: BookOpen },
    { id: 'planner', label: language === 'bn' ? 'সাপ্তাহিক রুটিন' : 'Meal Planner', bengali: 'সাপ্তাহিক রুটিন', icon: CalendarDays },
    { id: 'my-recipes', label: language === 'bn' ? 'আমার রান্না' : 'My Recipes', bengali: 'আমার রান্না', icon: PlusCircle },
    { id: 'pantry', label: language === 'bn' ? 'ভাঁড়ার ঘর' : 'Pantry', bengali: 'রান্নাঘরের রসদ', icon: Archive, badge: expiringSoonPantryItems.length },
    { id: 'shopping', label: language === 'bn' ? 'বাজারের ফর্দ' : 'Shopping List', bengali: 'বাজারের ফর্দ', icon: ShoppingBag, badge: uncheckedShoppingCount },
    { id: 'what-can-i-cook', label: language === 'bn' ? 'কী রাঁধব আজ?' : 'What Can I Cook?', bengali: 'কী রাঁধব?', icon: Flame, highlight: true },
    { id: 'festivals', label: language === 'bn' ? 'উৎসবের ভোজ' : 'Festivals', bengali: 'উৎসবের ভোজ', icon: Sparkles },
    { id: 'seasonal', label: language === 'bn' ? 'ঋতুভেদে রান্না' : 'Seasonal', bengali: 'ঋতুভেদে রান্না', icon: Sun },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-terracotta-100 shadow-sm transition-all duration-300">
        {/* Cultural top accent line inspired by sindoor and mustard */}
        <div className="h-1 w-full bg-gradient-to-r from-sindoor-700 via-mustard-500 to-terracotta-600"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Tagline */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sindoor-700 via-terracotta-600 to-mustard-600 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform duration-200">
                <ChefHat className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-serif font-bold tracking-tight text-sindoor-900 group-hover:text-sindoor-700 transition-colors">
                    RannaGhor
                  </span>
                  <span className="font-bengali text-xs font-semibold text-terracotta-600 tracking-wide">
                    রান্নাঘর
                  </span>
                </div>
                <span className="text-[11px] font-medium text-charcoal/60 tracking-wider uppercase font-bengali">
                  {t('tagline')}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.slice(0, 6).map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                      isActive 
                        ? 'bg-sindoor-50 text-sindoor-800 font-semibold shadow-xs' 
                        : 'text-charcoal/80 hover:text-sindoor-800 hover:bg-cream-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold text-white ${item.id === 'pantry' ? 'bg-amber-600' : 'bg-sindoor-700'}`}>
                        {item.badge}
                      </span>
                    ) : null}
                  </button>
                );
              })}

              {/* Special Bengali Features Dropdown / Quick Links */}
              <div className="h-5 w-[1px] bg-terracotta-200 mx-1"></div>

              <button
                onClick={() => handleNavClick('what-can-i-cook')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center space-x-1.5 ${
                  activeTab === 'what-can-i-cook'
                    ? 'bg-mustard-500 text-sindoor-950 shadow-xs'
                    : 'bg-mustard-100/80 text-mustard-900 hover:bg-mustard-200/90'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-sindoor-700 fill-sindoor-700" />
                <span>{language === 'bn' ? 'কী রাঁধব আজ?' : 'কী রাঁধব?'}</span>
              </button>

              <button
                onClick={() => handleNavClick('festivals')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === 'festivals' ? 'text-sindoor-800 font-bold bg-cream-200' : 'text-charcoal/70 hover:text-sindoor-800'
                }`}
              >
                {t('festivals')}
              </button>

              <button
                onClick={() => handleNavClick('seasonal')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === 'seasonal' ? 'text-sindoor-800 font-bold bg-cream-200' : 'text-charcoal/70 hover:text-sindoor-800'
                }`}
              >
                {t('seasonal')}
              </button>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              
              {/* Language Switcher Button (English / বাংলা) */}
              <div className="flex items-center bg-cream-100 rounded-2xl p-1 border border-terracotta-200 shadow-xs">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                    language === 'en'
                      ? 'bg-sindoor-700 text-white shadow-xs'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('bn')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold font-bengali transition-all ${
                    language === 'bn'
                      ? 'bg-sindoor-700 text-white shadow-xs'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                  title="বাংলা ভাষায় দেখুন"
                >
                  বাংলা
                </button>
              </div>

              {/* Search Toggle / Input */}
              <div className="relative">
                {showSearchInput ? (
                  <div className="flex items-center bg-white rounded-full border border-terracotta-200 px-3 py-1.5 shadow-sm">
                    <Search className="w-4 h-4 text-terracotta-500 mr-2 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search ilish, posto..."
                      value={filters.searchQuery}
                      onChange={(e) => {
                        setFilters(prev => ({ ...prev, searchQuery: e.target.value }));
                        if (activeTab !== 'recipes') setActiveTab('recipes');
                      }}
                      autoFocus
                      className="w-32 sm:w-44 text-xs focus:outline-none bg-transparent"
                    />
                    <button 
                      onClick={() => setShowSearchInput(false)}
                      className="text-charcoal/40 hover:text-charcoal ml-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowSearchInput(true);
                      if (activeTab !== 'recipes') setActiveTab('recipes');
                    }}
                    className="p-2.5 rounded-full hover:bg-cream-200 text-charcoal/75 hover:text-sindoor-800 transition-colors"
                    title="Search recipes"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Favorites Button */}
              <button
                onClick={() => handleNavClick('favorites')}
                className={`p-2.5 rounded-full relative transition-colors ${
                  activeTab === 'favorites' ? 'bg-sindoor-100 text-sindoor-800' : 'hover:bg-cream-200 text-charcoal/75 hover:text-sindoor-800'
                }`}
                title="Favorite Recipes"
              >
                <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-sindoor-600 text-sindoor-600' : ''}`} />
                {favorites.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-sindoor-700 text-white text-[10px] font-bold flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Email Notifications Button */}
              <button
                onClick={() => setIsEmailInboxOpen(true)}
                className="p-2.5 rounded-full relative transition-colors hover:bg-cream-200 text-charcoal/75 hover:text-sindoor-800"
                title={user ? `Google Account Emails (${user.email})` : "Email Notifications"}
              >
                <Mail className="w-5 h-5" />
                {unreadEmailCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-sindoor-700 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {unreadEmailCount}
                  </span>
                )}
              </button>

              {/* Add Recipe Action Button */}
              <button
                onClick={() => setIsCreateRecipeOpen(true)}
                className="hidden sm:flex items-center space-x-1.5 bg-sindoor-700 hover:bg-sindoor-800 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xs transition-all hover:shadow"
              >
                <PlusCircle className="w-4 h-4" />
                <span>{t('newRecipe')}</span>
              </button>

              {/* Google Authentication & Profile Dropdown */}
              {isAuthenticated && user ? (
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-2 p-1 rounded-full border border-terracotta-200 hover:border-sindoor-600 bg-white transition-all shadow-2xs hover:shadow-xs group"
                    title={user.name}
                  >
                    <div className="relative">
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover border border-terracotta-200 group-hover:border-sindoor-600 transition-colors"
                      />
                      {/* Google G Tiny Badge */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs border border-gray-100">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Profile Dropdown Menu */}
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-terracotta-200 shadow-2xl py-3 z-50 animate-fadeIn text-charcoal">
                      {/* User Header */}
                      <div className="px-4 pb-3 border-b border-terracotta-100 flex items-center space-x-3">
                        <img 
                          src={user.avatarUrl} 
                          alt={user.name} 
                          className="w-10 h-10 rounded-full object-cover border border-sindoor-600"
                        />
                        <div className="truncate">
                          <div className="text-xs font-bold text-sindoor-950 truncate">
                            {user.name}
                          </div>
                          <div className="text-[11px] text-charcoal/60 truncate font-mono">
                            {user.email}
                          </div>
                          <div className="inline-flex items-center text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded mt-0.5">
                            <ShieldCheck className="w-3 h-3 mr-0.5 text-emerald-600" />
                            <span>Google Verified</span>
                          </div>
                        </div>
                      </div>

                      {/* Navigation Links inside dropdown */}
                      <div className="py-2 text-xs divide-y divide-cream-100">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              handleNavClick('dashboard');
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-cream-100 flex items-center space-x-2.5 text-charcoal/85 transition-colors"
                          >
                            <ChefHat className="w-4 h-4 text-terracotta-600" />
                            <span>{language === 'bn' ? 'আমার হেঁশেল ড্যাশবোর্ড' : 'Kitchen Dashboard'}</span>
                          </button>

                          <button
                            onClick={() => {
                              handleNavClick('my-recipes');
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-cream-100 flex items-center space-x-2.5 text-charcoal/85 transition-colors"
                          >
                            <PlusCircle className="w-4 h-4 text-mustard-600" />
                            <span>{language === 'bn' ? 'আমার নিজস্ব রেসিপি' : 'My Custom Recipes'}</span>
                          </button>

                          <button
                            onClick={() => {
                              handleNavClick('favorites');
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-cream-100 flex items-center space-x-2.5 text-charcoal/85 transition-colors"
                          >
                            <Heart className="w-4 h-4 text-sindoor-600" />
                            <span>{language === 'bn' ? 'প্রিয় রেসিপি তালিকা' : 'Favorite Recipes'}</span>
                          </button>
                        </div>

                        {/* Cloud Sync & Manage */}
                        <div className="py-1">
                          <button
                            onClick={() => {
                              setIsEmailInboxOpen(true);
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-cream-100 flex items-center justify-between text-charcoal/85 transition-colors"
                          >
                            <div className="flex items-center space-x-2.5">
                              <Mail className="w-4 h-4 text-sindoor-700" />
                              <span>{language === 'bn' ? 'ইমেইল নোটিফিকেশন' : 'Email Notifications'}</span>
                            </div>
                            {unreadEmailCount > 0 && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sindoor-700 text-white">
                                {unreadEmailCount}
                              </span>
                            )}
                          </button>

                          <button
                            onClick={() => {
                              setIsAuthModalOpen(true);
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-cream-100 flex items-center space-x-2.5 text-terracotta-700 font-medium transition-colors"
                          >
                            <Cloud className="w-4 h-4 text-terracotta-600" />
                            <span>{language === 'bn' ? 'Google ক্লাউড সিঙ্ক সেটিংস' : 'Google Cloud Settings'}</span>
                          </button>
                        </div>

                        {/* Sign Out */}
                        <div className="pt-1">
                          <button
                            onClick={() => {
                              logout();
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-red-50 text-red-700 flex items-center space-x-2.5 font-semibold transition-colors"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>{t('signOutBtn')}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Google Sign In CTA Button */
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 bg-white hover:bg-cream-50 text-charcoal border border-terracotta-200 hover:border-sindoor-600 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-2xs transition-all hover:shadow-xs group"
                  title="Sign in with Google"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span className="font-semibold text-xs text-sindoor-950 group-hover:text-sindoor-700">
                    {language === 'bn' ? 'Google সাইন-ইন' : 'Sign In'}
                  </span>
                </button>
              )}

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-charcoal hover:bg-cream-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-50 border-b border-terracotta-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {/* Mobile Google Auth Section */}
            {isAuthenticated && user ? (
              <div className="bg-white p-3 rounded-2xl border border-terracotta-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="relative">
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover border border-sindoor-600"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold text-sindoor-950 truncate">{user.name}</div>
                    <div className="text-[10px] text-charcoal/60 truncate font-mono">{user.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 shrink-0">
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="p-2 text-terracotta-700 hover:bg-cream-100 rounded-xl"
                    title="Account Settings"
                  >
                    <Cloud className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-xl"
                    title="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2.5 bg-white border border-terracotta-200 py-2.5 px-4 rounded-xl text-xs font-bold text-charcoal shadow-2xs hover:bg-cream-100 transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>{language === 'bn' ? 'Google দিয়ে লগইন করুন' : 'Sign in with Google Account'}</span>
              </button>
            )}

            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2.5 p-3 rounded-xl text-left text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-sindoor-700 text-white font-semibold' 
                        : 'bg-white border border-terracotta-100 text-charcoal/80'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <div className="truncate">
                      <div className="truncate">{item.label}</div>
                      <div className={`text-[10px] font-bengali ${isActive ? 'text-white/80' : 'text-terracotta-600'}`}>
                        {item.bengali}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                setIsCreateRecipeOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-sindoor-700 text-white py-2.5 rounded-xl font-medium text-xs shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create New Bengali Recipe</span>
            </button>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar (Fixed for responsive convenience) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-terracotta-200 py-2 px-3 flex items-center justify-around shadow-lg">
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors ${
            activeTab === 'home' ? 'text-sindoor-700 font-bold' : 'text-charcoal/60'
          }`}
        >
          <ChefHat className="w-5 h-5 mb-0.5" />
          <span>{t('home')}</span>
        </button>

        <button
          onClick={() => handleNavClick('recipes')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors ${
            activeTab === 'recipes' ? 'text-sindoor-700 font-bold' : 'text-charcoal/60'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span>{t('recipes')}</span>
        </button>

        <button
          onClick={() => handleNavClick('planner')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors relative ${
            activeTab === 'planner' ? 'text-sindoor-700 font-bold' : 'text-charcoal/60'
          }`}
        >
          <div className="w-9 h-9 rounded-full bg-sindoor-700 text-white flex items-center justify-center -mt-4 shadow-md">
            <CalendarDays className="w-5 h-5" />
          </div>
          <span className="mt-1">{language === 'bn' ? 'রুটিন' : 'Plan'}</span>
        </button>

        <button
          onClick={() => handleNavClick('shopping')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors relative ${
            activeTab === 'shopping' ? 'text-sindoor-700 font-bold' : 'text-charcoal/60'
          }`}
        >
          <ShoppingBag className="w-5 h-5 mb-0.5" />
          <span>{language === 'bn' ? 'ফর্দ' : 'Shopping'}</span>
          {uncheckedShoppingCount > 0 && (
            <span className="absolute top-0 right-2 w-3.5 h-3.5 rounded-full bg-sindoor-700 text-white text-[9px] flex items-center justify-center font-bold">
              {uncheckedShoppingCount}
            </span>
          )}
        </button>

        <button
          onClick={() => handleNavClick('dashboard')}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors ${
            activeTab === 'dashboard' ? 'text-sindoor-700 font-bold' : 'text-charcoal/60'
          }`}
        >
          <User className="w-5 h-5 mb-0.5" />
          <span>{t('dashboard')}</span>
        </button>
      </nav>
    </>
  );
};
