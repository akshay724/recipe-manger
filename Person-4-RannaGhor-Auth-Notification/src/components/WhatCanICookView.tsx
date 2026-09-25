import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe } from '../types';
import { 
  Flame, 
  Sparkles, 
  Plus, 
  X, 
  Check, 
  Clock, 
  Users, 
  ChefHat, 
  ArrowRight,
  Lightbulb
} from 'lucide-react';
import { RecipeCard } from './RecipeCard';

export const WhatCanICookView: React.FC = () => {
  const { recipes, setSelectedRecipe, setCookingModeRecipe } = useApp();

  // Selected ingredients
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([
    'potato', 'onion', 'tomato', 'mustard oil'
  ]);
  const [customInput, setCustomInput] = useState('');

  // Popular quick tags for Bengali households
  const popularPantryTags = [
    'potato', 'onion', 'tomato', 'egg', 'fish', 'prawns', 'mustard oil', 
    'poppy seeds', 'green chilli', 'turmeric', 'ginger', 'garlic', 'curd', 
    'chana dal', 'moong dal', 'rice', 'gobindobhog rice', 'flour', 'eggplant', 
    'cauliflower', 'coconut', 'ghee'
  ];

  const handleToggleTag = (tag: string) => {
    setSelectedIngredients(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customInput.trim().toLowerCase();
    if (clean && !selectedIngredients.includes(clean)) {
      setSelectedIngredients(prev => [...prev, clean]);
      setCustomInput('');
    }
  };

  const handleRemove = (tag: string) => {
    setSelectedIngredients(prev => prev.filter(t => t !== tag));
  };

  // Calculate matches for all recipes
  const matchedRecipes = recipes.map(recipe => {
    const recipeKeys = recipe.commonIngredients.map(k => k.toLowerCase());
    
    // Count how many ingredients in recipe match user's selected list
    let matchedCount = 0;
    const missing: string[] = [];

    recipeKeys.forEach(ing => {
      const isPresent = selectedIngredients.some(sel => 
        ing.includes(sel) || sel.includes(ing)
      );
      if (isPresent) {
        matchedCount++;
      } else {
        missing.push(ing);
      }
    });

    const matchPercent = recipeKeys.length > 0 
      ? Math.round((matchedCount / recipeKeys.length) * 100) 
      : 0;

    return {
      recipe,
      matchedCount,
      totalCount: recipeKeys.length,
      matchPercent,
      missing
    };
  })
  .filter(item => item.matchedCount > 0)
  .sort((a, b) => b.matchPercent - a.matchPercent);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-sindoor-800 via-mustard-600 to-terracotta-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8">
        <div className="relative z-10">
          <div className="flex items-center space-x-2 text-mustard-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Flame className="w-4 h-4 fill-mustard-200" />
            <span>Instant Kitchen Matcher • কী রাঁধব আজ?</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            “What Can I Cook Right Now?”
          </h1>
          <p className="text-white/85 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Tell us what is inside your fridge or pantry, and we will reveal all the authentic Bengali dishes you can whip up today.
          </p>
        </div>
      </div>

      {/* Interactive Ingredient Selector Canvas */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-terracotta-100 shadow-warm mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-base font-serif font-bold text-sindoor-900">
              Ingredients You Have (আপনার হাতের কাছে যা আছে)
            </h2>
            <p className="text-xs text-charcoal/60 mt-0.5">
              Click tags or type custom ingredients (e.g. egg, potato, onion, tomato)
            </p>
          </div>

          {/* Custom text add form */}
          <form onSubmit={handleAddCustom} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Add another ingredient..."
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-terracotta-200 bg-cream-50 text-xs focus:outline-none focus:border-sindoor-600 w-48 sm:w-60"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-bold shadow-xs"
            >
              Add
            </button>
          </form>
        </div>

        {/* Currently Selected Active Ingredients */}
        <div className="flex flex-wrap gap-2 pb-5 border-b border-cream-200 mb-5">
          {selectedIngredients.length === 0 ? (
            <span className="text-xs text-charcoal/40 italic">
              No ingredients selected. Click common items below!
            </span>
          ) : (
            selectedIngredients.map(ing => (
              <span
                key={ing}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-sindoor-700 text-white text-xs font-bold shadow-xs capitalize animate-scaleUp"
              >
                <span>{ing}</span>
                <button
                  onClick={() => handleRemove(ing)}
                  className="hover:text-mustard-300 ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))
          )}
          {selectedIngredients.length > 0 && (
            <button
              onClick={() => setSelectedIngredients([])}
              className="text-xs text-charcoal/50 hover:text-sindoor-700 font-semibold px-2 py-1"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Quick Pantry Tags to Toggle */}
        <div>
          <span className="text-xs font-bold text-charcoal/70 block mb-2">
            Quick Add Bengali Pantry Staples:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {popularPantryTags.map(tag => {
              const active = selectedIngredients.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleToggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
                    active 
                      ? 'bg-mustard-500 text-sindoor-950 font-bold border border-mustard-600 shadow-xs' 
                      : 'bg-cream-100/80 hover:bg-cream-200 text-charcoal/80 border border-terracotta-100'
                  }`}
                >
                  {active ? '✓ ' : '+ '}
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Matched Recipes Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-serif font-bold text-sindoor-900">
              Matched Recipes ({matchedRecipes.length} dishes found)
            </h2>
            <p className="text-xs text-charcoal/60 mt-0.5">
              Ranked by ingredient availability match percentage
            </p>
          </div>
        </div>

        {matchedRecipes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-terracotta-100 p-8">
            <ChefHat className="w-12 h-12 mx-auto text-terracotta-300 mb-3" />
            <h3 className="text-base font-bold text-charcoal mb-1">
              No matching recipes found yet
            </h3>
            <p className="text-xs text-charcoal/60 max-w-sm mx-auto">
              Try selecting common staples like "potato", "mustard oil", "green chilli", or "onion".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedRecipes.map(({ recipe, matchedCount, totalCount, matchPercent, missing }) => (
              <div
                key={recipe.id}
                className="bg-white rounded-3xl overflow-hidden border border-terracotta-100 shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between cursor-pointer group"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div>
                  {/* Top Image with Match Badge */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Match Score Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-md text-xs font-bold flex items-center space-x-1.5">
                      <span className={matchPercent >= 70 ? 'text-leaf-700' : 'text-amber-600'}>
                        {matchedCount}/{totalCount} ingredients ({matchPercent}%)
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="font-bengali text-xs text-mustard-300 block">{recipe.bengaliName}</span>
                      <h3 className="font-serif font-bold text-base text-white">{recipe.name}</h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-charcoal/70 line-clamp-2">
                      {recipe.tagline}
                    </p>

                    {/* Missing Ingredients Warning Pill */}
                    {missing.length > 0 ? (
                      <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-[11px] text-amber-900">
                        <span className="font-bold">Missing: </span>
                        <span className="capitalize">{missing.slice(0, 3).join(', ')}{missing.length > 3 ? ` +${missing.length - 3} more` : ''}</span>
                      </div>
                    ) : (
                      <div className="bg-leaf-50 p-2 rounded-xl border border-leaf-200 text-[11px] text-leaf-800 font-bold flex items-center space-x-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>You have 100% of the core ingredients!</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="flex-1 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-sindoor-900 font-semibold text-xs transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCookingModeRecipe(recipe);
                    }}
                    className="py-2 px-3 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white font-bold text-xs shadow-xs transition-all flex items-center space-x-1"
                  >
                    <ChefHat className="w-3.5 h-3.5" />
                    <span>Cook</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
