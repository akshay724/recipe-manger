import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe, MealType, CuisineRegion, DishType, DietaryPreference, DifficultyLevel } from '../types';
import { RecipeCard } from './RecipeCard';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  ChefHat, 
  Sparkles,
  Flame,
  Check
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

export const RecipeDiscoveryView: React.FC = () => {
  const { recipes, filters, setFilters, resetFilters } = useApp();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter options definitions
  const mealTypes: (MealType | 'All')[] = ['All', 'breakfast', 'lunch', 'dinner', 'snack', 'dessert'];
  const mealTypeLabels: Record<string, string> = {
    'All': 'All Meals (সব)',
    'breakfast': 'Breakfast (জলখাবার)',
    'lunch': 'Lunch (দুপুর)',
    'dinner': 'Dinner (রাত)',
    'snack': 'Snack (টিফিন)',
    'dessert': 'Dessert (মিষ্টি)'
  };

  const regions: (CuisineRegion | 'All')[] = [
    'All',
    'Kolkata',
    'North Bengal',
    'South Bengal',
    'East Bengal-inspired',
    'Rural Bengal',
    'Bengali Festival'
  ];

  const dishTypes: (DishType | 'All')[] = [
    'All',
    'Bhaja',
    'Dal',
    'Torkari',
    'Mach',
    'Mangsho',
    'Chingri',
    'Vegetarian',
    'Rice',
    'Mishti',
    'Pitha',
    'Chutney',
    'Pickle'
  ];

  const dietaryPreferences: (DietaryPreference | 'All')[] = [
    'All',
    'Vegetarian',
    'Non-vegetarian',
    'Vegan',
    'Gluten-free',
    'Low-spice'
  ];

  const cookingTimes = [
    { id: 'All', label: 'Any Duration' },
    { id: 'under-20', label: 'Under 20 min' },
    { id: '20-40', label: '20–40 min' },
    { id: '40-60', label: '40–60 min' },
    { id: '60-plus', label: '60+ min' }
  ];

  const difficulties: (DifficultyLevel | 'All')[] = ['All', 'Easy', 'Medium', 'Advanced'];

  // Apply filters
  const filteredRecipes = recipes.filter(r => {
    // Search query (matches English title, Bengali script, ingredients, or story)
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      const matchName = r.name.toLowerCase().includes(q);
      const matchBengali = r.bengaliName.includes(q);
      const matchTagline = r.tagline.toLowerCase().includes(q);
      const matchStory = r.story.toLowerCase().includes(q);
      const matchIng = r.ingredients.some(i => i.name.toLowerCase().includes(q) || (i.bengaliName && i.bengaliName.includes(q)));
      if (!matchName && !matchBengali && !matchTagline && !matchStory && !matchIng) return false;
    }

    // Meal type
    if (filters.mealType !== 'All' && !r.mealTypes.includes(filters.mealType)) {
      return false;
    }

    // Cuisine Region
    if (filters.cuisineRegion !== 'All' && r.cuisineRegion !== filters.cuisineRegion) {
      return false;
    }

    // Dish Type
    if (filters.dishType !== 'All' && r.dishType !== filters.dishType) {
      return false;
    }

    // Dietary
    if (filters.dietaryPreference !== 'All' && !r.dietaryPreferences.includes(filters.dietaryPreference)) {
      return false;
    }

    // Cooking time
    if (filters.cookingTime !== 'All') {
      if (filters.cookingTime === 'under-20' && r.totalTimeMinutes >= 20) return false;
      if (filters.cookingTime === '20-40' && (r.totalTimeMinutes < 20 || r.totalTimeMinutes > 40)) return false;
      if (filters.cookingTime === '40-60' && (r.totalTimeMinutes < 40 || r.totalTimeMinutes > 60)) return false;
      if (filters.cookingTime === '60-plus' && r.totalTimeMinutes <= 60) return false;
    }

    // Difficulty
    if (filters.difficulty !== 'All' && r.difficulty !== filters.difficulty) {
      return false;
    }

    return true;
  });

  const hasActiveFilters = 
    filters.searchQuery !== '' ||
    filters.mealType !== 'All' ||
    filters.cuisineRegion !== 'All' ||
    filters.dishType !== 'All' ||
    filters.dietaryPreference !== 'All' ||
    filters.cookingTime !== 'All' ||
    filters.difficulty !== 'All';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Search Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-sindoor-950">
          Bengali Recipe Discovery
        </h1>
        <p className="text-xs sm:text-sm text-charcoal/70">
          Explore heirloom classics, royal wedding curries, and comforting everyday meals across Bengal
        </p>

        {/* Global Search Bar */}
        <div className="relative max-w-xl mx-auto pt-2">
          <div className="flex items-center bg-white rounded-full border-2 border-terracotta-200 px-4 py-2.5 shadow-warm focus-within:border-sindoor-600 transition-colors">
            <Search className="w-5 h-5 text-terracotta-500 mr-2.5 shrink-0" />
            <input
              type="text"
              placeholder="Search for ilish, posto, chingri, mishti…"
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              className="w-full text-xs sm:text-sm bg-transparent focus:outline-none text-charcoal placeholder-charcoal/40"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                className="text-xs text-charcoal/40 hover:text-charcoal px-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Accordion / Bar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-terracotta-100 shadow-warm mb-8">
        
        {/* Filter Title & Mobile Toggle */}
        <div className="flex items-center justify-between pb-3 border-b border-cream-200">
          <div className="flex items-center space-x-2 text-sindoor-900 font-bold text-sm">
            <Filter className="w-4 h-4 text-terracotta-600" />
            <span>Refine Recipes by Traditional Categories</span>
          </div>

          <div className="flex items-center space-x-3">
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center space-x-1 text-xs font-semibold text-sindoor-700 hover:text-sindoor-900"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}

            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="sm:hidden p-1.5 rounded-lg bg-cream-100 text-charcoal text-xs font-bold"
            >
              {mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>

        {/* Filter Selectors Grid */}
        <div className={`pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 ${mobileFilterOpen ? 'block' : 'hidden sm:grid'}`}>
          
          {/* Meal Type */}
          <div>
            <label className="text-[11px] font-bold text-charcoal/70 block mb-1">Meal Type</label>
            <select
              value={filters.mealType}
              onChange={(e) => setFilters(prev => ({ ...prev, mealType: e.target.value as any }))}
              className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
            >
              {mealTypes.map(mt => (
                <option key={mt} value={mt}>{mealTypeLabels[mt]}</option>
              ))}
            </select>
          </div>

          {/* Cuisine / Region */}
          <div>
            <label className="text-[11px] font-bold text-charcoal/70 block mb-1">Cuisine / Region</label>
            <select
              value={filters.cuisineRegion}
              onChange={(e) => setFilters(prev => ({ ...prev, cuisineRegion: e.target.value as any }))}
              className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Dish Type */}
          <div>
            <label className="text-[11px] font-bold text-charcoal/70 block mb-1">Dish Type</label>
            <select
              value={filters.dishType}
              onChange={(e) => setFilters(prev => ({ ...prev, dishType: e.target.value as any }))}
              className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
            >
              {dishTypes.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Dietary Preference */}
          <div>
            <label className="text-[11px] font-bold text-charcoal/70 block mb-1">Dietary</label>
            <select
              value={filters.dietaryPreference}
              onChange={(e) => setFilters(prev => ({ ...prev, dietaryPreference: e.target.value as any }))}
              className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
            >
              {dietaryPreferences.map(dp => (
                <option key={dp} value={dp}>{dp}</option>
              ))}
            </select>
          </div>

          {/* Cooking Time */}
          <div>
            <label className="text-[11px] font-bold text-charcoal/70 block mb-1">Cooking Time</label>
            <select
              value={filters.cookingTime}
              onChange={(e) => setFilters(prev => ({ ...prev, cookingTime: e.target.value as any }))}
              className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
            >
              {cookingTimes.map(ct => (
                <option key={ct.id} value={ct.id}>{ct.label}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="text-[11px] font-bold text-charcoal/70 block mb-1">Difficulty</label>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters(prev => ({ ...prev, difficulty: e.target.value as any }))}
              className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
            >
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Quick Dish Type Pills */}
        <div className="pt-4 border-t border-cream-200 mt-4 flex items-center space-x-1.5 overflow-x-auto scrollbar-none">
          {['All', 'Mach', 'Mangsho', 'Torkari', 'Dal', 'Bhaja', 'Mishti', 'Rice'].map((dt) => {
            const isSelected = filters.dishType === dt;
            return (
              <button
                key={dt}
                onClick={() => setFilters(prev => ({ ...prev, dishType: dt as any }))}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all ${
                  isSelected 
                    ? 'bg-sindoor-700 text-white shadow-xs' 
                    : 'bg-cream-100/90 text-charcoal/70 hover:bg-cream-200'
                }`}
              >
                {dt === 'Mach' ? 'মাছ (Mach)' : dt === 'Mangsho' ? 'মাংস (Mangsho)' : dt === 'Torkari' ? 'তরকারি (Torkari)' : dt === 'Mishti' ? 'মিষ্টি (Mishti)' : dt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Recipe Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-charcoal/70 font-medium">
          <span>Showing {filteredRecipes.length} authentic dishes</span>
          {hasActiveFilters && (
            <span className="text-terracotta-700 font-bold">Filtered by selected criteria</span>
          )}
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-terracotta-100 p-8 space-y-3">
            <ChefHat className="w-14 h-14 mx-auto text-terracotta-300 stroke-[1.5]" />
            <h3 className="text-lg font-serif font-bold text-charcoal">
              No matching Bengali recipes found
            </h3>
            <p className="text-xs text-charcoal/60 max-w-sm mx-auto">
              We couldn't find any recipes matching your current search or filters. Try clearing some filters to explore more of Bengal's cuisine!
            </p>
            <button
              onClick={resetFilters}
              className="mt-2 px-5 py-2 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-bold shadow-xs transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
