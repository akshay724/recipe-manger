import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe, Ingredient, CuisineRegion, DishType, DietaryPreference, DifficultyLevel, SpiceLevel } from '../types';
import { X, Plus, Trash2, Image, Sparkles, ChefHat } from 'lucide-react';

interface RecipeCreateModalProps {
  onClose: () => void;
}

export const RecipeCreateModal: React.FC<RecipeCreateModalProps> = ({ onClose }) => {
  const { addCustomRecipe, addRecipeToMealPlan, showToast } = useApp();

  const [name, setName] = useState('');
  const [bengaliName, setBengaliName] = useState('');
  const [tagline, setTagline] = useState('');
  const [story, setStory] = useState('');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80');
  const [prepTimeMinutes, setPrepTimeMinutes] = useState(20);
  const [cookTimeMinutes, setCookTimeMinutes] = useState(30);
  const [baseServings, setBaseServings] = useState(4);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Medium');
  const [spiceLevel, setSpiceLevel] = useState<SpiceLevel>('Medium');
  const [cuisineRegion, setCuisineRegion] = useState<CuisineRegion>('Kolkata');
  const [dishType, setDishType] = useState<DishType>('Torkari');
  const [dietaryPreference, setDietaryPreference] = useState<DietaryPreference>('Vegetarian');
  const [tips, setTips] = useState('');

  // Dynamic Ingredients List
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: 'Potatoes (Aloo)', bengaliName: 'আলু', quantity: 400, unit: 'g', category: 'Vegetables' },
    { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 2, unit: 'tbsp', category: 'Pantry' }
  ]);

  // Instructions
  const [instructionsText, setInstructionsText] = useState(
    '1. Heat mustard oil until smoking, temper with panch phoron.\n2. Add vegetables and sauté with turmeric and salt.\n3. Add warm water, simmer until tender.'
  );

  const handleAddIngredientRow = () => {
    setIngredients(prev => [
      ...prev,
      { name: '', quantity: 1, unit: 'tsp', category: 'Spices' }
    ]);
  };

  const handleUpdateIngredient = (index: number, field: keyof Ingredient, value: any) => {
    setIngredients(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const handleRemoveIngredientRow = (index: number) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = (e: React.FormEvent, andAddToPlan: boolean = false) => {
    e.preventDefault();
    if (!name.trim()) return;

    const instructionsArray = instructionsText
      .split('\n')
      .map(line => line.replace(/^\d+[\.\)]\s*/, '').trim())
      .filter(line => line.length > 0);

    const newRecipe: Recipe = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      bengaliName: bengaliName.trim() || name.trim(),
      tagline: tagline.trim() || 'A homemade Bengali family recipe.',
      story: story.trim() || 'Passed down through generations of home cooking in Bengal.',
      image: image.trim(),
      prepTimeMinutes,
      cookTimeMinutes,
      totalTimeMinutes: prepTimeMinutes + cookTimeMinutes,
      baseServings,
      difficulty,
      spiceLevel,
      mealTypes: ['lunch', 'dinner'],
      cuisineRegion,
      dishType,
      dietaryPreferences: [dietaryPreference],
      isTraditional: true,
      ingredients,
      instructions: instructionsArray.length > 0 ? instructionsArray : ['Cook with love and patience.'],
      tips: tips.trim() ? [tips.trim()] : [],
      substitutions: [],
      nutrition: {
        calories: 300,
        protein: '10g',
        carbs: '25g',
        fat: '15g'
      },
      storageInstructions: 'Keep refrigerated in a sealed container up to 2 days.',
      commonIngredients: ingredients.map(i => i.name.toLowerCase().split(' ')[0])
    };

    addCustomRecipe(newRecipe);

    if (andAddToPlan) {
      addRecipeToMealPlan('Sunday', 'lunch', newRecipe.id);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center items-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-terracotta-200 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-terracotta-100 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-sindoor-700 text-white flex items-center justify-center shadow-md">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-sindoor-900">
                Create New Bengali Recipe (আমার রান্না)
              </h2>
              <p className="text-xs text-charcoal/60">
                Preserve your family's authentic heirloom recipes and culinary secrets
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-cream-100 text-charcoal/50">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={(e) => handleSave(e, false)} className="space-y-6">
          
          {/* Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">
                Recipe English Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Grandma's Posto Murgi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 focus:outline-none focus:border-sindoor-600 font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">
                Bengali Script Name (বাংলা হরফে)
              </label>
              <input
                type="text"
                placeholder="e.g. ঠাকুরমার পোস্ত মুরগি"
                value={bengaliName}
                onChange={(e) => setBengaliName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 focus:outline-none focus:border-sindoor-600 font-bengali"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-charcoal/80 block mb-1">
              Short Description / Tagline
            </label>
            <input
              type="text"
              placeholder="e.g. Tender chicken simmered with stone-ground poppy seed paste and green chillies."
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 focus:outline-none focus:border-sindoor-600"
            />
          </div>

          {/* Quick Select Preset Images */}
          <div>
            <label className="text-xs font-bold text-charcoal/80 block mb-2 flex items-center space-x-1.5">
              <Image className="w-3.5 h-3.5 text-terracotta-600" />
              <span>Cover Photo URL (or pick preset)</span>
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50 mb-2 font-mono text-[11px]"
            />
            <div className="flex items-center space-x-2">
              {[
                { label: 'Curry / Mangsho', url: 'https://images.unsplash.com/photo-1545247181-516773ca83e3?auto=format&fit=crop&w=1000&q=80' },
                { label: 'Fish / Maach', url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80' },
                { label: 'Rice / Bhaat', url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80' },
                { label: 'Dal / Veg', url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80' },
              ].map(img => (
                <button
                  type="button"
                  key={img.label}
                  onClick={() => setImage(img.url)}
                  className="px-2.5 py-1 rounded-lg bg-cream-100 hover:bg-cream-200 text-charcoal/70 text-[10px] font-medium"
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timing & Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">Prep Time (min)</label>
              <input
                type="number"
                value={prepTimeMinutes}
                onChange={(e) => setPrepTimeMinutes(parseInt(e.target.value) || 10)}
                className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50 font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">Cook Time (min)</label>
              <input
                type="number"
                value={cookTimeMinutes}
                onChange={(e) => setCookTimeMinutes(parseInt(e.target.value) || 20)}
                className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50 font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">Servings</label>
              <input
                type="number"
                value={baseServings}
                onChange={(e) => setBaseServings(parseInt(e.target.value) || 4)}
                className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50 font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Categorization */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">Cuisine / Region</label>
              <select
                value={cuisineRegion}
                onChange={(e) => setCuisineRegion(e.target.value as any)}
                className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
              >
                <option value="Kolkata">Kolkata</option>
                <option value="Rural Bengal">Rural Bengal</option>
                <option value="East Bengal-inspired">East Bengal-inspired</option>
                <option value="North Bengal">North Bengal</option>
                <option value="South Bengal">South Bengal</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">Dish Type</label>
              <select
                value={dishType}
                onChange={(e) => setDishType(e.target.value as any)}
                className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
              >
                <option value="Torkari">Torkari (তরকারি)</option>
                <option value="Mach">Mach (মাছ)</option>
                <option value="Mangsho">Mangsho (মাংস)</option>
                <option value="Dal">Dal (ডাল)</option>
                <option value="Bhaja">Bhaja (ভাজা)</option>
                <option value="Rice">Rice & Pulao (ভাত ও পোলাও)</option>
                <option value="Mishti">Mishti (মিষ্টি)</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-1">Dietary Preference</label>
              <select
                value={dietaryPreference}
                onChange={(e) => setDietaryPreference(e.target.value as any)}
                className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
              >
                <option value="Vegetarian">Vegetarian (নিরামিষ)</option>
                <option value="Non-vegetarian">Non-vegetarian (আমিষ)</option>
                <option value="Vegan">Vegan</option>
                <option value="Low-spice">Low-spice</option>
              </select>
            </div>
          </div>

          {/* Dynamic Ingredients Builder */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-charcoal/80">
                Ingredients List (উপকরণ তালিকা)
              </label>
              <button
                type="button"
                onClick={handleAddIngredientRow}
                className="text-xs font-bold text-sindoor-700 hover:text-sindoor-900 flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Row</span>
              </button>
            </div>

            <div className="space-y-2 bg-cream-50 p-3 rounded-2xl border border-terracotta-100">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Ingredient name"
                    value={ing.name}
                    onChange={(e) => handleUpdateIngredient(idx, 'name', e.target.value)}
                    required
                    className="flex-1 p-2 rounded-lg border border-terracotta-200 text-xs bg-white"
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Qty"
                    value={ing.quantity}
                    onChange={(e) => handleUpdateIngredient(idx, 'quantity', parseFloat(e.target.value) || 1)}
                    className="w-16 p-2 rounded-lg border border-terracotta-200 text-xs bg-white font-bold"
                  />
                  <input
                    type="text"
                    placeholder="Unit"
                    value={ing.unit}
                    onChange={(e) => handleUpdateIngredient(idx, 'unit', e.target.value)}
                    className="w-16 p-2 rounded-lg border border-terracotta-200 text-xs bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredientRow(idx)}
                    disabled={ingredients.length <= 1}
                    className="text-charcoal/30 hover:text-sindoor-700 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <label className="text-xs font-bold text-charcoal/80 block mb-1">
              Instructions (Method) — One step per line
            </label>
            <textarea
              rows={4}
              value={instructionsText}
              onChange={(e) => setInstructionsText(e.target.value)}
              required
              className="w-full p-3 rounded-xl border border-terracotta-200 text-xs bg-cream-50 focus:outline-none focus:border-sindoor-600 font-mono text-[11px]"
            />
          </div>

          {/* Secret Grandmother's Tip */}
          <div>
            <label className="text-xs font-bold text-charcoal/80 block mb-1">
              Rannar Tip / Secret Trick (ঐচ্ছিক গোপন টিপস)
            </label>
            <input
              type="text"
              placeholder="e.g. Always grind the mustard with a green chilli to remove bitterness."
              value={tips}
              onChange={(e) => setTips(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
            />
          </div>

          {/* Buttons: Save and Add to Meal Plan */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-terracotta-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-charcoal/70 hover:text-charcoal"
            >
              Cancel
            </button>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={(e) => handleSave(e, true)}
                className="px-4 py-2.5 rounded-xl border border-sindoor-700 text-sindoor-800 text-xs font-bold hover:bg-sindoor-50 transition-colors"
              >
                Save & Add to Meal Plan
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                Save Recipe
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
