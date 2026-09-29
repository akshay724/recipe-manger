import React, { useState, useEffect } from 'react';
import { Recipe, WeekDays } from '../types';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Clock, 
  Users, 
  Flame, 
  ChefHat, 
  Heart, 
  Sparkles, 
  Plus, 
  Check, 
  BookOpen, 
  ShoppingBag, 
  Printer, 
  Share2, 
  AlertCircle,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose }) => {
  const { 
    isFavorite, 
    toggleFavorite, 
    setCookingModeRecipe, 
    addRecipeToMealPlan, 
    addCustomShoppingItem, 
    showToast,
    language
  } = useApp();

  const [currentServings, setCurrentServings] = useState<number>(recipe.baseServings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [showPlanDropdown, setShowPlanDropdown] = useState(false);
  const [planDay, setPlanDay] = useState<WeekDays>('Monday');
  const [planSlot, setPlanSlot] = useState<'breakfast' | 'lunch' | 'snack' | 'dinner'>('lunch');
  const [instructionLang, setInstructionLang] = useState<'bn' | 'en'>(language === 'bn' ? 'bn' : 'en');

  useEffect(() => {
    setInstructionLang(language === 'bn' ? 'bn' : 'en');
  }, [language]);

  const isFav = isFavorite(recipe.id);
  const isVeg = recipe.dietaryPreferences.includes('Vegetarian') || recipe.dietaryPreferences.includes('Vegan');

  // Scaling factor for ingredient recalculation
  const scale = currentServings / recipe.baseServings;

  const formatScaledQuantity = (qty: number, unit: string) => {
    const scaled = qty * scale;
    // Format nicely
    if (unit === 'g' || unit === 'ml') {
      if (scaled >= 1000) {
        return `${(scaled / 1000).toFixed(1).replace(/\.0$/, '')} ${unit === 'g' ? 'kg' : 'L'}`;
      }
      return `${Math.round(scaled)} ${unit}`;
    }
    if (scaled === Math.floor(scaled)) {
      return `${scaled} ${unit}`;
    }
    return `${scaled.toFixed(1).replace(/\.0$/, '')} ${unit}`;
  };

  const toggleIngredientCheck = (name: string) => {
    setCheckedIngredients(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleAddAllToShoppingList = () => {
    recipe.ingredients.forEach(ing => {
      addCustomShoppingItem(
        ing.name, 
        Math.round(ing.quantity * scale * 10) / 10, 
        ing.unit, 
        ing.category
      );
    });
    showToast(`Added ${recipe.ingredients.length} ingredients for ${currentServings} servings to your shopping list!`);
  };

  const handleStartCooking = () => {
    setCookingModeRecipe(recipe);
    onClose();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center items-start p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full my-6 overflow-hidden shadow-2xl border border-terracotta-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Hero */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-charcoal">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

          {/* Close & Action Buttons */}
          <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
            <button
              onClick={() => toggleFavorite(recipe.id)}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-xs hover:bg-white text-charcoal/80 hover:text-sindoor-600 transition-all shadow-md"
              title="Save to favorites"
            >
              <Heart className={`w-5 h-5 ${isFav ? 'fill-sindoor-600 text-sindoor-600' : ''}`} />
            </button>
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-xs hover:bg-white text-charcoal/80 transition-all shadow-md"
              title="Print recipe"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-xs hover:bg-white text-charcoal hover:text-sindoor-700 transition-all shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Header Badges */}
          <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${
              isVeg ? 'bg-emerald-600 text-white' : 'bg-sindoor-700 text-white'
            }`}>
              {isVeg ? 'নিরামিষ (Vegetarian)' : 'আমিষ (Non-Vegetarian)'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-md border border-white/20">
              {recipe.cuisineRegion}
            </span>
          </div>

          {/* Title and Cultural Identity */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="font-bengali text-lg sm:text-xl font-bold text-mustard-300 block mb-1">
              {recipe.bengaliName}
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight drop-shadow-md">
              {recipe.name}
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-2xl font-light italic">
              "{recipe.tagline}"
            </p>
          </div>
        </div>

        {/* Floating Quick Action Bar */}
        <div className="bg-cream-100 border-b border-terracotta-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          {/* Quick Metrics */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs text-charcoal/80 font-medium">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-terracotta-600" />
              <span>Prep: {recipe.prepTimeMinutes}m</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-sindoor-600" />
              <span>Cook: {recipe.cookTimeMinutes}m</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Scale className="w-4 h-4 text-mustard-600" />
              <span>Difficulty: {recipe.difficulty}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Flame className="w-4 h-4 text-sindoor-600" />
              <span>{recipe.spiceLevel}</span>
            </div>
          </div>

          {/* Primary CTA: Start Distraction-Free Cooking Mode */}
          <button
            onClick={handleStartCooking}
            className="flex items-center space-x-2 bg-sindoor-700 hover:bg-sindoor-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ChefHat className="w-4 h-4" />
            <span>Start Cooking Mode</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Recipe Heritage Story */}
          <div className="bg-cream-50 rounded-2xl p-5 border border-terracotta-100 relative">
            <div className="flex items-center space-x-2 text-sindoor-800 font-serif font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4 text-mustard-600" />
              <span>Heritage & Tradition (ঐতিহ্য ও ইতিহাস)</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-normal">
              {recipe.story}
            </p>
          </div>

          {/* Serving Size Adjuster Section */}
          <div className="bg-white rounded-2xl p-5 border border-terracotta-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-charcoal flex items-center space-x-2">
                <Users className="w-4 h-4 text-sindoor-700" />
                <span>Adjust Serving Size (পরিমাণ নির্ধারণ)</span>
              </div>
              <p className="text-xs text-charcoal/60 mt-0.5">
                Automatically recalculates ingredient weights and measurements in real-time.
              </p>
            </div>

            {/* Serving selector buttons */}
            <div className="flex items-center space-x-2 bg-cream-100 p-1.5 rounded-2xl border border-terracotta-200">
              {[2, 4, 6, 8].map((s) => (
                <button
                  key={s}
                  onClick={() => setCurrentServings(s)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    currentServings === s
                      ? 'bg-sindoor-700 text-white shadow-xs'
                      : 'text-charcoal/70 hover:text-sindoor-800 hover:bg-cream-200'
                  }`}
                >
                  {s} servings
                </button>
              ))}

              {/* Custom - and + */}
              <div className="flex items-center space-x-1 pl-2 border-l border-terracotta-200">
                <button
                  onClick={() => setCurrentServings(prev => Math.max(1, prev - 1))}
                  className="w-7 h-7 rounded-lg bg-white border border-terracotta-200 text-charcoal hover:bg-cream-200 flex items-center justify-center font-bold text-xs"
                >
                  -
                </button>
                <span className="text-xs font-bold px-1 text-sindoor-900">{currentServings}</span>
                <button
                  onClick={() => setCurrentServings(prev => prev + 1)}
                  className="w-7 h-7 rounded-lg bg-white border border-terracotta-200 text-charcoal hover:bg-cream-200 flex items-center justify-center font-bold text-xs"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Grid: Ingredients & Instructions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Ingredients Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-serif font-bold text-sindoor-900">
                    Ingredients (উপকরণ)
                  </h2>
                  <span className="text-xs text-charcoal/60">
                    For {currentServings} servings
                  </span>
                </div>
                <button
                  onClick={handleAddAllToShoppingList}
                  className="text-[11px] font-semibold text-sindoor-700 hover:text-sindoor-900 flex items-center space-x-1 hover:underline"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Grocery</span>
                </button>
              </div>

              {/* Ingredients Checklist */}
              <div className="bg-cream-50/70 rounded-2xl p-3 border border-terracotta-100 divide-y divide-terracotta-100">
                {recipe.ingredients.map((ing, i) => {
                  const isChecked = !!checkedIngredients[ing.name];
                  return (
                    <div 
                      key={i} 
                      onClick={() => toggleIngredientCheck(ing.name)}
                      className="py-2.5 px-2 flex items-start space-x-3 cursor-pointer hover:bg-cream-100/80 rounded-xl transition-colors select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-sindoor-700 focus:ring-sindoor-500 w-4 h-4 border-terracotta-300 pointer-events-none"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline">
                          <span className={`text-xs font-medium ${isChecked ? 'line-through text-charcoal/40' : 'text-charcoal'}`}>
                            {ing.name}
                          </span>
                          <span className="text-xs font-bold text-sindoor-800 ml-2">
                            {formatScaledQuantity(ing.quantity, ing.unit)}
                          </span>
                        </div>
                        {ing.bengaliName && (
                          <span className="text-[11px] font-bengali text-terracotta-600 block mt-0.5">
                            {ing.bengaliName}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Nutrition Quick Facts Card */}
              {recipe.nutrition && (
                <div className="bg-white rounded-2xl p-4 border border-terracotta-200">
                  <span className="text-xs font-bold text-charcoal/80 block mb-2">
                    Estimated Nutrition per Serving
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="bg-cream-100 p-2 rounded-xl">
                      <span className="font-bold text-sindoor-800 block">{recipe.nutrition.calories}</span>
                      <span className="text-[10px] text-charcoal/60">Calories</span>
                    </div>
                    <div className="bg-cream-100 p-2 rounded-xl">
                      <span className="font-bold text-sindoor-800 block">{recipe.nutrition.protein}</span>
                      <span className="text-[10px] text-charcoal/60">Protein</span>
                    </div>
                    <div className="bg-cream-100 p-2 rounded-xl">
                      <span className="font-bold text-sindoor-800 block">{recipe.nutrition.carbs}</span>
                      <span className="text-[10px] text-charcoal/60">Carbs</span>
                    </div>
                    <div className="bg-cream-100 p-2 rounded-xl">
                      <span className="font-bold text-sindoor-800 block">{recipe.nutrition.fat}</span>
                      <span className="text-[10px] text-charcoal/60">Fat</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h2 className="text-base font-serif font-bold text-sindoor-900">
                    {instructionLang === 'bn' ? 'রান্নার প্রণালী (Step-by-Step Method)' : 'Step-by-Step Method (রান্নার প্রণালী)'}
                  </h2>
                  <span className="text-xs text-charcoal/60">
                    {((instructionLang === 'bn' && recipe.bengaliInstructions && recipe.bengaliInstructions.length > 0) ? recipe.bengaliInstructions : recipe.instructions).length} {instructionLang === 'bn' ? 'টি সহজ ধাপ' : 'steps'}
                  </span>
                </div>

                {/* Instruction Language Toggle */}
                <div className="inline-flex items-center bg-cream-200/90 p-0.5 rounded-lg border border-terracotta-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setInstructionLang('bn')}
                    className={`px-3 py-1 rounded-md text-xs font-bengali font-bold transition-all ${
                      instructionLang === 'bn'
                        ? 'bg-sindoor-700 text-white shadow-xs'
                        : 'text-charcoal/70 hover:text-charcoal'
                    }`}
                  >
                    বাংলা প্রণালী
                  </button>
                  <button
                    type="button"
                    onClick={() => setInstructionLang('en')}
                    className={`px-3 py-1 rounded-md text-xs font-sans font-semibold transition-all ${
                      instructionLang === 'en'
                        ? 'bg-sindoor-700 text-white shadow-xs'
                        : 'text-charcoal/70 hover:text-charcoal'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Step list */}
              <div className="space-y-3.5">
                {((instructionLang === 'bn' && recipe.bengaliInstructions && recipe.bengaliInstructions.length > 0)
                  ? recipe.bengaliInstructions
                  : recipe.instructions
                ).map((step, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-3.5 p-4 rounded-2xl bg-white border border-terracotta-100 shadow-xs hover:border-terracotta-300 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-sindoor-100 text-sindoor-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-serif">
                      {idx + 1}
                    </span>
                    <p className={`text-xs sm:text-sm text-charcoal/85 leading-relaxed ${instructionLang === 'bn' ? 'font-bengali text-sm sm:text-[15px]' : ''}`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Rannar Tips (ঠাকুরমার রান্নার টিপস) */}
              {((instructionLang === 'bn' && recipe.bengaliTips && recipe.bengaliTips.length > 0) || (recipe.tips && recipe.tips.length > 0)) && (
                <div className="bg-mustard-50/70 border border-mustard-200 rounded-2xl p-4 mt-4">
                  <div className="flex items-center space-x-2 text-mustard-900 font-bold text-xs mb-2">
                    <Lightbulb className="w-4 h-4 text-mustard-600" />
                    <span>{instructionLang === 'bn' ? 'ঠাকুরমার রান্নার গোপন টিপস' : 'Rannar Tip / ঠাকুরমার রান্নার টিপস'}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-charcoal/80">
                    {((instructionLang === 'bn' && recipe.bengaliTips && recipe.bengaliTips.length > 0)
                      ? recipe.bengaliTips
                      : recipe.tips
                    ).map((tip, idx) => (
                      <li key={idx} className={`leading-relaxed ${instructionLang === 'bn' ? 'font-bengali text-xs sm:text-sm' : ''}`}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Substitutions & Storage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {recipe.substitutions && recipe.substitutions.length > 0 && (
                  <div className="bg-cream-50 p-3.5 rounded-2xl border border-terracotta-100 text-xs">
                    <span className="font-bold text-sindoor-800 block mb-1">Substitutions (বিকল্প উপাদান)</span>
                    <p className="text-charcoal/75 text-[11px] leading-relaxed">
                      {recipe.substitutions.join('. ')}
                    </p>
                  </div>
                )}
                {recipe.storageInstructions && (
                  <div className="bg-cream-50 p-3.5 rounded-2xl border border-terracotta-100 text-xs">
                    <span className="font-bold text-sindoor-800 block mb-1">Storage Instructions (সংরক্ষণ)</span>
                    <p className="text-charcoal/75 text-[11px] leading-relaxed">
                      {recipe.storageInstructions}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <AlpanaDivider variant="kantha" />

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowPlanDropdown(!showPlanDropdown)}
                className="py-2.5 px-4 rounded-xl bg-white border border-terracotta-300 hover:bg-cream-100 text-sindoor-900 font-semibold text-xs transition-colors flex items-center space-x-1.5 shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Weekly Plan</span>
              </button>

              {showPlanDropdown && (
                <div className="flex items-center space-x-2 bg-cream-100 p-1.5 rounded-xl border border-terracotta-200">
                  <select
                    value={planDay}
                    onChange={(e) => setPlanDay(e.target.value as WeekDays)}
                    className="text-xs p-1 rounded-lg border border-terracotta-200 bg-white"
                  >
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <select
                    value={planSlot}
                    onChange={(e) => setPlanSlot(e.target.value as any)}
                    className="text-xs p-1 rounded-lg border border-terracotta-200 bg-white"
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Snack</option>
                    <option value="dinner">Dinner</option>
                  </select>
                  <button
                    onClick={() => {
                      addRecipeToMealPlan(planDay, planSlot, recipe.id);
                      setShowPlanDropdown(false);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-sindoor-700 text-white text-xs font-bold"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleStartCooking}
              className="py-2.5 px-6 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <ChefHat className="w-4 h-4" />
              <span>Cook This Recipe Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
