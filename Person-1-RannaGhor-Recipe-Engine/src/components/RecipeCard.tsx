import React, { useState } from 'react';
import { Recipe, WeekDays } from '../types';
import { useApp } from '../context/AppContext';
import { Clock, Users, Heart, Plus, Sparkles, ChefHat, Check, Flame } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  featuredLayout?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featuredLayout = false }) => {
  const { setSelectedRecipe, isFavorite, toggleFavorite, addRecipeToMealPlan } = useApp();
  const [showMealPlanPicker, setShowMealPlanPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState<WeekDays>('Monday');
  const [selectedSlot, setSelectedSlot] = useState<'breakfast' | 'lunch' | 'snack' | 'dinner'>('lunch');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const isFav = isFavorite(recipe.id);
  const isVeg = recipe.dietaryPreferences.includes('Vegetarian') || recipe.dietaryPreferences.includes('Vegan');

  const handleQuickAddMealPlan = (e: React.MouseEvent) => {
    e.stopPropagation();
    addRecipeToMealPlan(selectedDay, selectedSlot, recipe.id);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setShowMealPlanPicker(false);
    }, 1200);
  };

  return (
    <div 
      className={`group relative bg-white rounded-3xl overflow-hidden border border-terracotta-100 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col cursor-pointer ${
        featuredLayout ? 'md:flex-row' : ''
      }`}
      onClick={() => setSelectedRecipe(recipe)}
    >
      {/* Recipe Image Container */}
      <div className={`relative overflow-hidden ${featuredLayout ? 'md:w-1/2 h-64 md:h-auto' : 'h-52 w-full'}`}>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient Overlay for crisp contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

        {/* Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center space-x-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
          <span 
            className={`w-3.5 h-3.5 rounded-sm border-2 flex items-center justify-center p-[2px] ${
              isVeg ? 'border-emerald-600' : 'border-sindoor-700'
            }`}
            title={isVeg ? 'Vegetarian (Niramish)' : 'Non-Vegetarian (Amish)'}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-sindoor-700'}`}></span>
          </span>
          <span className="text-[11px] font-semibold text-charcoal/80">
            {isVeg ? 'নিরামিষ' : 'আমিষ'}
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/90 backdrop-blur-xs text-charcoal/70 hover:text-sindoor-600 shadow-sm transition-transform active:scale-90"
          title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-sindoor-600 text-sindoor-600' : ''}`} />
        </button>

        {/* Cuisine Region & Dish Type Pills */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[11px] font-medium border border-white/20">
            {recipe.cuisineRegion}
          </span>
          {recipe.season && recipe.season !== 'All-year' && (
            <span className="px-2 py-0.5 rounded-full bg-mustard-500/90 text-sindoor-950 font-bold text-[10px]">
              {recipe.season}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className={`p-5 flex-1 flex flex-col justify-between ${featuredLayout ? 'md:w-1/2 md:p-6' : ''}`}>
        <div>
          {/* Bengali Name and English Title */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <h3 className="text-lg font-serif font-bold text-sindoor-900 group-hover:text-sindoor-700 transition-colors leading-snug">
                {recipe.name}
              </h3>
              <p className="font-bengali text-sm font-semibold text-terracotta-700 tracking-wide">
                {recipe.bengaliName}
              </p>
            </div>
            {recipe.isTraditional && (
              <span className="shrink-0 px-2 py-0.5 rounded-md bg-cream-200 text-terracotta-800 text-[10px] font-medium">
                ঐতিহ্যবাহী
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs text-charcoal/75 line-clamp-2 mb-4 leading-relaxed">
            "{recipe.tagline}"
          </p>

          {/* Metadata badges: Cook Time, Servings, Spice */}
          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-cream-50 border border-terracotta-100 text-charcoal/80 text-[11px] font-medium mb-4">
            <div className="flex items-center space-x-1.5" title="Total cooking time">
              <Clock className="w-3.5 h-3.5 text-terracotta-600" />
              <span>{recipe.totalTimeMinutes}m</span>
            </div>
            <div className="flex items-center space-x-1.5" title="Base servings">
              <Users className="w-3.5 h-3.5 text-terracotta-600" />
              <span>{recipe.baseServings} serv</span>
            </div>
            <div className="flex items-center space-x-1" title={`Spice level: ${recipe.spiceLevel}`}>
              <Flame className={`w-3.5 h-3.5 ${recipe.spiceLevel === 'Spicy' ? 'text-sindoor-600 fill-sindoor-600' : 'text-amber-500'}`} />
              <span className="text-[10px]">{recipe.spiceLevel}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-cream-200 flex items-center gap-2">
          <button
            onClick={() => setSelectedRecipe(recipe)}
            className="flex-1 py-2 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 text-sindoor-900 text-xs font-semibold transition-colors text-center"
          >
            View Recipe
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowMealPlanPicker(!showMealPlanPicker);
            }}
            className="py-2 px-3 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-semibold transition-all flex items-center justify-center space-x-1 shadow-xs hover:shadow"
            title="Add to weekly meal plan"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add to Plan</span>
          </button>
        </div>

        {/* Quick Add to Meal Plan Popover */}
        {showMealPlanPicker && (
          <div 
            className="absolute inset-x-3 bottom-3 p-4 bg-white rounded-2xl shadow-xl border border-terracotta-200 z-20 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-bold text-sindoor-900 mb-2 flex items-center justify-between">
              <span>Add to Meal Planner</span>
              <button 
                onClick={() => setShowMealPlanPicker(false)}
                className="text-charcoal/40 hover:text-charcoal font-normal"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <label className="text-[10px] font-semibold text-charcoal/70 block mb-1">Day</label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value as WeekDays)}
                  className="w-full text-xs p-1.5 rounded-lg border border-terracotta-200 bg-cream-50"
                >
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-charcoal/70 block mb-1">Meal Slot</label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value as any)}
                  className="w-full text-xs p-1.5 rounded-lg border border-terracotta-200 bg-cream-50"
                >
                  <option value="breakfast">Breakfast (জলখাবার)</option>
                  <option value="lunch">Lunch (দুপুরের খাবার)</option>
                  <option value="snack">Snack (বিকেলের চা)</option>
                  <option value="dinner">Dinner (রাতের খাবার)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleQuickAddMealPlan}
              disabled={addedSuccess}
              className={`w-full py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
                addedSuccess 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-sindoor-700 hover:bg-sindoor-800 text-white shadow-xs'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added to {selectedDay}!</span>
                </>
              ) : (
                <span>Confirm Add</span>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
