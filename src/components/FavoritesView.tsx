import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe } from '../types';
import { RecipeCard } from './RecipeCard';
import { Heart, Sparkles, ChefHat, Fish, Utensils, Drumstick, Cake, Zap } from 'lucide-react';

export const FavoritesView: React.FC = () => {
  const { recipes, favorites, setActiveTab } = useApp();
  const [activeTabCategory, setActiveTabCategory] = useState<string>('all');

  const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

  const filterTabs = [
    { id: 'all', label: 'All Favorites', icon: Heart },
    { id: 'fish', label: 'Favorite Fish', icon: Fish, test: (r: Recipe) => r.dishType === 'Mach' || r.dishType === 'Chingri' },
    { id: 'veg', label: 'Favorite Vegetarian', icon: Utensils, test: (r: Recipe) => r.dietaryPreferences.includes('Vegetarian') || r.dietaryPreferences.includes('Vegan') },
    { id: 'meat', label: 'Favorite Meat', icon: Drumstick, test: (r: Recipe) => r.dishType === 'Mangsho' },
    { id: 'desserts', label: 'Favorite Desserts', icon: Cake, test: (r: Recipe) => r.dishType === 'Mishti' || r.dishType === 'Pitha' },
    { id: 'quick', label: 'Quick Recipes (<35m)', icon: Zap, test: (r: Recipe) => r.totalTimeMinutes <= 35 }
  ];

  const currentFilter = filterTabs.find(t => t.id === activeTabCategory);
  const displayedRecipes = activeTabCategory === 'all' 
    ? favoriteRecipes 
    : favoriteRecipes.filter(r => currentFilter?.test ? currentFilter.test(r) : true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-sindoor-900 via-rose-900 to-terracotta-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Heart className="w-4 h-4 fill-rose-300 text-rose-300" />
              <span>Personal Collection • পছন্দের পদ</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              My Saved Recipes ({favoriteRecipes.length})
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Your handpicked Bengali kitchen favorites, easily organized by fish, vegetarian, meat, and sweet treats.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('recipes')}
            className="flex items-center space-x-2 bg-white text-sindoor-900 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-md hover:bg-cream-100 transition-all"
          >
            <ChefHat className="w-4 h-4 text-sindoor-700" />
            <span>Discover More Recipes</span>
          </button>
        </div>
      </div>

      {/* Categorized Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
        {filterTabs.map(tab => {
          const Icon = tab.icon;
          const count = tab.id === 'all' 
            ? favoriteRecipes.length 
            : favoriteRecipes.filter(r => tab.test ? tab.test(r) : true).length;
          const isActive = activeTabCategory === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabCategory(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border shrink-0 ${
                isActive 
                  ? 'bg-sindoor-700 text-white border-sindoor-700 shadow-xs' 
                  : 'bg-white border-terracotta-100 text-charcoal/80 hover:bg-cream-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-white/20' : 'bg-cream-200'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {displayedRecipes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-terracotta-100 p-8">
          <Heart className="w-12 h-12 mx-auto text-terracotta-200 mb-3" />
          <h3 className="text-base font-bold text-charcoal mb-1">
            No recipes in this collection yet
          </h3>
          <p className="text-xs text-charcoal/60 max-w-sm mx-auto mb-4">
            Click the heart icon on any recipe card to save it here for fast kitchen access!
          </p>
          <button
            onClick={() => setActiveTab('recipes')}
            className="px-5 py-2 rounded-xl bg-sindoor-700 text-white text-xs font-bold shadow-xs hover:bg-sindoor-800"
          >
            Explore Authentic Recipes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

    </div>
  );
};
