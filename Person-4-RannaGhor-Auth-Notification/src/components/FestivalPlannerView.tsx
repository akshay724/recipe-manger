import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BENGALI_FESTIVALS } from '../data/festivals';
import { getRecipeById } from '../data/allRecipes';
import { 
  Sparkles, 
  Calendar, 
  ShoppingBag, 
  ChefHat, 
  ArrowRight, 
  Check, 
  Clock, 
  Heart,
  Flame
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

export const FestivalPlannerView: React.FC = () => {
  const { 
    setSelectedRecipe, 
    addRecipeToMealPlan, 
    addCustomShoppingItem, 
    showToast, 
    setActiveTab 
  } = useApp();

  const [selectedFestivalId, setSelectedFestivalId] = useState<string>('durga-puja');

  const currentFestival = BENGALI_FESTIVALS.find(f => f.id === selectedFestivalId)!;

  const handleLoadIntoMealPlan = () => {
    // Add breakfast, lunch, snack, dinner to Sunday or Monday
    currentFestival.menu.breakfast.forEach(id => addRecipeToMealPlan('Sunday', 'breakfast', id));
    currentFestival.menu.lunch.forEach(id => addRecipeToMealPlan('Sunday', 'lunch', id));
    currentFestival.menu.snack.forEach(id => addRecipeToMealPlan('Sunday', 'snack', id));
    currentFestival.menu.dinner.forEach(id => addRecipeToMealPlan('Sunday', 'dinner', id));
    showToast(`Loaded ${currentFestival.festivalName} full banquet into Sunday's meal planner!`);
  };

  const handleAddFestivalShopping = () => {
    currentFestival.mustHaveItems.forEach(item => {
      addCustomShoppingItem(item, 1, 'item', 'Pantry');
    });
    showToast(`Added ${currentFestival.mustHaveItems.length} festival specialty items to your shopping list!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-sindoor-950 via-sindoor-800 to-terracotta-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-mustard-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-mustard-400" />
              <span>Festive Banquets • বারো মাসে তেরো পার্বণ</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              Bengali Festival Meal Planner
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Authentic multi-course menus crafted for Bengal's greatest celebrations: from Ashtami Khichuri Bhog to Jamai Shashti banquets.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleLoadIntoMealPlan}
              className="flex items-center space-x-2 bg-gradient-to-r from-mustard-500 to-mustard-600 hover:from-mustard-600 hover:to-mustard-700 text-sindoor-950 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-md transition-all"
            >
              <Calendar className="w-4 h-4 text-sindoor-900" />
              <span>Load Menu into Meal Planner</span>
            </button>

            <button
              onClick={handleAddFestivalShopping}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-2xl text-xs backdrop-blur-sm transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Festival Items to Bazaar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Festival Selector Carousel/Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
        {BENGALI_FESTIVALS.map((fest) => {
          const isActive = fest.id === selectedFestivalId;
          return (
            <button
              key={fest.id}
              onClick={() => setSelectedFestivalId(fest.id)}
              className={`px-4 py-3 rounded-2xl text-left shrink-0 transition-all border ${
                isActive
                  ? 'bg-sindoor-700 text-white border-sindoor-700 shadow-warm font-bold scale-[1.02]'
                  : 'bg-white border-terracotta-100 text-charcoal/80 hover:bg-cream-100'
              }`}
            >
              <div className="text-xs font-serif">{fest.festivalName}</div>
              <div className={`font-bengali text-[10px] mt-0.5 ${isActive ? 'text-mustard-200' : 'text-terracotta-600'}`}>
                {fest.bengaliFestivalName}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Festival Spotlight View */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-terracotta-100 shadow-warm mb-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Festival Info */}
          <div className="lg:w-1/3 space-y-4">
            <div className="rounded-2xl overflow-hidden h-52 relative shadow-md">
              <img
                src={currentFestival.bannerImage}
                alt={currentFestival.festivalName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sindoor-700 font-bold uppercase tracking-wider">
                  {currentFestival.season}
                </span>
                <h3 className="font-serif font-bold text-lg text-white mt-1">
                  {currentFestival.festivalName}
                </h3>
              </div>
            </div>

            <p className="text-xs text-charcoal/80 leading-relaxed">
              {currentFestival.description}
            </p>

            {/* Must-have bazaar items */}
            <div className="bg-cream-50 p-4 rounded-2xl border border-terracotta-100">
              <span className="text-xs font-bold text-sindoor-900 block mb-2">
                Mandatory Bazaar Checklist (উৎসবের বাজার):
              </span>
              <ul className="space-y-1">
                {currentFestival.mustHaveItems.map((item, i) => (
                  <li key={i} className="text-xs text-charcoal/70 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-mustard-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Festival Menus Breakdown (Breakfast, Lunch, Snack, Dinner, Dessert) */}
          <div className="lg:w-2/3 space-y-6">
            <h3 className="font-serif font-bold text-xl text-sindoor-900 pb-2 border-b border-terracotta-100">
              Curated Festival Day Banquet (উৎসবের ভোজ)
            </h3>

            {(['breakfast', 'lunch', 'snack', 'dinner', 'dessert'] as const).map((mealType) => {
              const dishIds = currentFestival.menu[mealType];
              if (!dishIds || dishIds.length === 0) return null;

              const titleMap = {
                breakfast: 'Breakfast (সকালের জলখাবার)',
                lunch: 'Grand Lunch (দুপুরের রাজকীয় ভোজ)',
                snack: 'Evening Tiffin (বিকেলের সান্ধ্যকালীন খাবার)',
                dinner: 'Festive Dinner (রাতের মহাভোজ)',
                dessert: 'Traditional Mishti & Sweets (মিষ্টিমুখ)'
              };

              return (
                <div key={mealType} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-800">
                    {titleMap[mealType]}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dishIds.map((dishId) => {
                      const recipe = getRecipeById(dishId);
                      if (!recipe) return null;

                      return (
                        <div
                          key={dishId}
                          onClick={() => setSelectedRecipe(recipe)}
                          className="flex items-center space-x-3 p-3 rounded-2xl bg-cream-50/70 border border-terracotta-100 hover:border-terracotta-300 transition-all cursor-pointer group"
                        >
                          <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-12 h-12 rounded-xl object-cover shrink-0"
                          />
                          <div className="truncate">
                            <div className="text-xs font-bold text-charcoal group-hover:text-sindoor-800 transition-colors truncate">
                              {recipe.name}
                            </div>
                            <div className="font-bengali text-[11px] text-terracotta-600">
                              {recipe.bengaliName}
                            </div>
                            <div className="text-[10px] text-charcoal/50 mt-0.5">
                              ⏱ {recipe.totalTimeMinutes}m • {recipe.difficulty}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
};
