import React from 'react';
import { useApp } from '../context/AppContext';
import { getRecipeById } from '../data/allRecipes';
import { 
  ChefHat, 
  Flame, 
  Clock, 
  Sparkles, 
  CalendarDays, 
  Archive, 
  ShoppingBag, 
  Heart, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Trophy,
  Coffee
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

export const DashboardView: React.FC = () => {
  const { 
    mealPlan, 
    pantry, 
    expiringSoonPantryItems, 
    shoppingList, 
    favorites, 
    recipes, 
    setSelectedRecipe, 
    setCookingModeRecipe, 
    setActiveTab,
    user,
    isAuthenticated,
    setIsAuthModalOpen,
    language
  } = useApp();

  // Dynamic greeting based on current simulated hour (15:23 -> afternoon)
  const hour = new Date().getHours();
  let greetingTime = 'Good afternoon';
  let bengaliGreeting = 'শুভ দুপুর';
  if (hour < 12) {
    greetingTime = 'Good morning';
    bengaliGreeting = 'শুভ সকাল';
  } else if (hour >= 17) {
    greetingTime = 'Good evening';
    bengaliGreeting = 'শুভ সন্ধ্যা';
  }

  // Today is simulated as Friday
  const todayMeals = mealPlan.Friday;
  const todaysFeaturedLunchId = todayMeals.lunch[2]?.recipeId || 'shorshe-ilish';
  const todaysFeaturedLunch = getRecipeById(todaysFeaturedLunchId) || recipes[0];

  const uncheckedShopping = shoppingList.filter(i => !i.checked).slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sindoor-900 via-terracotta-900 to-charcoal rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-mustard-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-mustard-400" />
              <span>Amar Rannaghor Dashboard • আমার রান্নাঘর ড্যাশবোর্ড</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              {greetingTime}, {user ? (user.givenName || user.name) : 'what are we cooking today?'}
            </h1>
            
            <p className="font-bengali text-lg sm:text-xl text-mustard-300 mt-1 font-semibold">
              {bengaliGreeting} {user ? `${user.givenName || user.name}, ` : ''}আজ হেঁশেলে কী পদ উঠছে?
            </p>

            {/* Google Sync Status / Sign-In Chip */}
            <div className="mt-4 flex items-center space-x-2">
              {user ? (
                <button
                  type="button"
                  onClick={() => setIsAuthModalOpen(true)}
                  className="inline-flex items-center space-x-2 bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs transition-colors shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span className="text-white/90 font-mono text-[11px] truncate max-w-[180px] sm:max-w-none">
                    {user.email}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] text-emerald-300 font-bold hidden sm:inline">
                    {language === 'bn' ? 'Google ক্লাউড সিঙ্ক চালু' : 'Google Cloud Synced'}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsAuthModalOpen(true)}
                  className="inline-flex items-center space-x-2 bg-white text-sindoor-950 hover:bg-cream-100 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-md group"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>{language === 'bn' ? 'Google দিয়ে লগইন করে ক্লাউড সিঙ্ক চালু করুন' : 'Sign in with Google to enable Cloud Sync'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Cooking streak badge */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center space-x-3 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-mustard-500 text-sindoor-950 flex items-center justify-center font-bold shadow-md">
              <Flame className="w-6 h-6 fill-sindoor-950" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">5-Day Cooking Streak!</div>
              <div className="text-xs text-white/70">Authentic Bengali Home Cooking</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Today's Lunch Spotlight & Week Glance (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Today's Lunch Highlight Widget */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-terracotta-100 shadow-warm relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-cream-200 mb-6">
              <div className="flex items-center space-x-2">
                <ChefHat className="w-5 h-5 text-sindoor-700" />
                <h2 className="text-lg font-serif font-bold text-sindoor-900">
                  Today's Featured Meal (আজকের দুপুরের পদ)
                </h2>
              </div>
              <span className="text-xs font-bold text-terracotta-700 bg-cream-100 px-3 py-1 rounded-full">
                Friday Lunch
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={todaysFeaturedLunch.image}
                alt={todaysFeaturedLunch.name}
                className="w-full sm:w-48 h-48 rounded-2xl object-cover shadow-md shrink-0"
              />

              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div>
                  <span className="font-bengali text-sm font-bold text-terracotta-600 block">
                    {todaysFeaturedLunch.bengaliName}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    {todaysFeaturedLunch.name}
                  </h3>
                </div>

                <p className="text-xs text-charcoal/75 leading-relaxed line-clamp-2">
                  "{todaysFeaturedLunch.tagline}"
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-charcoal/70">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-terracotta-600" />
                    <span>Cooking time: {todaysFeaturedLunch.cookTimeMinutes} min</span>
                  </span>
                  <span>•</span>
                  <span>{todaysFeaturedLunch.baseServings} servings</span>
                  <span>•</span>
                  <span className="text-sindoor-700 font-bold">{todaysFeaturedLunch.spiceLevel} spice</span>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2 flex items-center justify-center sm:justify-start space-x-3">
                  <button
                    onClick={() => setCookingModeRecipe(todaysFeaturedLunch)}
                    className="flex items-center space-x-2 bg-sindoor-700 hover:bg-sindoor-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Start Cooking</span>
                  </button>

                  <button
                    onClick={() => setSelectedRecipe(todaysFeaturedLunch)}
                    className="px-4 py-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal text-xs font-bold transition-colors"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Full Schedule Preview */}
          <div className="bg-cream-50/70 rounded-3xl p-6 border border-terracotta-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif font-bold text-base text-sindoor-900 flex items-center space-x-2">
                <CalendarDays className="w-4 h-4 text-terracotta-600" />
                <span>Today's Meal Course (আজকের পূর্ণাঙ্গ আহার)</span>
              </h3>
              <button
                onClick={() => setActiveTab('planner')}
                className="text-xs font-bold text-sindoor-700 hover:underline flex items-center space-x-1"
              >
                <span>Full Planner →</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { slot: 'Breakfast (জলখাবার)', items: todayMeals.breakfast },
                { slot: 'Lunch (দুপুর)', items: todayMeals.lunch },
                { slot: 'Snack (টিফিন)', items: todayMeals.snack },
                { slot: 'Dinner (রাত)', items: todayMeals.dinner }
              ].map((course, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-3 border border-terracotta-100 shadow-xs">
                  <div className="text-[11px] font-bold text-terracotta-800 pb-1.5 border-b border-cream-200 mb-2">
                    {course.slot}
                  </div>
                  <div className="space-y-1">
                    {course.items.map((it, i) => {
                      const rec = getRecipeById(it.recipeId);
                      return (
                        <div 
                          key={i} 
                          onClick={() => rec && setSelectedRecipe(rec)}
                          className="text-xs font-medium text-charcoal hover:text-sindoor-700 truncate cursor-pointer"
                        >
                          • {rec?.name || 'Dish'}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bengali Kitchen Proverb Wisdom */}
          <div className="bg-gradient-to-r from-cream-100 to-amber-50 rounded-2xl p-5 border border-terracotta-200 flex items-center space-x-4">
            <span className="font-bengali text-2xl text-sindoor-800 shrink-0">❝</span>
            <div className="text-xs sm:text-sm text-charcoal/80 italic font-serif">
              "মাছে-ভাতে বাঙালি — A Bengali is never truly at home until the fragrance of bubbling mustard oil and steaming Gobindobhog rice fills the air."
            </div>
          </div>

        </div>

        {/* Right Column: Pantry Alerts & Bazaar Glance (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Expiring Soon Pantry Widget */}
          <div className="bg-white rounded-3xl p-5 border border-terracotta-100 shadow-warm">
            <div className="flex items-center justify-between pb-3 border-b border-cream-200 mb-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-900">
                <Archive className="w-4 h-4 text-amber-600" />
                <span>Pantry: Expiring Soon</span>
              </div>
              <button
                onClick={() => setActiveTab('pantry')}
                className="text-[11px] font-bold text-sindoor-700 hover:underline"
              >
                View All
              </button>
            </div>

            {expiringSoonPantryItems.length === 0 ? (
              <div className="py-4 text-center text-xs text-charcoal/50">
                All pantry items fresh!
              </div>
            ) : (
              <div className="space-y-2">
                {expiringSoonPantryItems.slice(0, 3).map(item => (
                  <div key={item.id} className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-charcoal">{item.name}</div>
                      <div className="text-[10px] text-amber-800">Use within 2 days</div>
                    </div>
                    <span className="text-xs font-bold text-sindoor-800">
                      {item.quantity} {item.unit}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Bazaar List Widget */}
          <div className="bg-white rounded-3xl p-5 border border-terracotta-100 shadow-warm">
            <div className="flex items-center justify-between pb-3 border-b border-cream-200 mb-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-sindoor-900">
                <ShoppingBag className="w-4 h-4 text-leaf-600" />
                <span>Next Bazaar Trip</span>
              </div>
              <button
                onClick={() => setActiveTab('shopping')}
                className="text-[11px] font-bold text-sindoor-700 hover:underline"
              >
                Full List
              </button>
            </div>

            <div className="space-y-2">
              {uncheckedShopping.map(item => (
                <div key={item.id} className="py-1.5 flex items-center justify-between text-xs text-charcoal/80">
                  <span className="truncate">• {item.name}</span>
                  <span className="text-[11px] font-bold text-sindoor-800 shrink-0 ml-2">
                    {item.quantity} {item.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Favorites Shortcut Widget */}
          <div className="bg-cream-50 rounded-3xl p-5 border border-terracotta-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-sindoor-900">
                <Heart className="w-4 h-4 text-sindoor-600 fill-sindoor-600" />
                <span>Saved Favorites</span>
              </div>
              <button
                onClick={() => setActiveTab('favorites')}
                className="text-[11px] font-bold text-sindoor-700 hover:underline"
              >
                {favorites.length} saved →
              </button>
            </div>

            <div className="space-y-2">
              {recipes.filter(r => favorites.includes(r.id)).slice(0, 3).map(rec => (
                <div 
                  key={rec.id}
                  onClick={() => setSelectedRecipe(rec)}
                  className="p-2 rounded-xl bg-white hover:bg-cream-100 cursor-pointer border border-terracotta-100 flex items-center space-x-2.5 transition-colors"
                >
                  <img src={rec.image} alt={rec.name} className="w-8 h-8 rounded-lg object-cover" />
                  <div className="truncate">
                    <div className="text-xs font-bold text-charcoal truncate">{rec.name}</div>
                    <div className="text-[10px] text-charcoal/50">⏱ {rec.totalTimeMinutes}m</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
