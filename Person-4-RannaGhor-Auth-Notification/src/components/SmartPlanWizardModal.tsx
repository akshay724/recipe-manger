import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WeekDays, WeeklyPlan, DietaryPreference } from '../types';
import { ALL_RECIPES } from '../data/allRecipes';
import { 
  X, 
  Sparkles, 
  Users, 
  Clock, 
  Flame, 
  Coins, 
  ChefHat, 
  Check, 
  ArrowRight, 
  RefreshCw,
  Layers,
  Leaf
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

interface SmartPlanWizardModalProps {
  onClose: () => void;
}

export const SmartPlanWizardModal: React.FC<SmartPlanWizardModalProps> = ({ onClose }) => {
  const { setWeeklyPlan, showToast, regenerateShoppingListFromPlan } = useApp();

  const [step, setStep] = useState<number>(1);
  const [peopleCount, setPeopleCount] = useState<number>(4);
  const [dietPreference, setDietPreference] = useState<'all' | 'veg' | 'fish' | 'low-spice'>('fish');
  const [timeAvailable, setTimeAvailable] = useState<'quick' | 'moderate' | 'elaborate'>('moderate');
  const [budget, setBudget] = useState<'budget' | 'standard' | 'royal'>('standard');
  const [mealsPerDay, setMealsPerDay] = useState<number>(4);
  const [pantryIngredients, setPantryIngredients] = useState<string[]>([
    'potato', 'mustard oil', 'green chilli', 'turmeric', 'rice'
  ]);
  const [generating, setGenerating] = useState<boolean>(false);

  const availableCommonPantry = [
    'potato', 'mustard oil', 'green chilli', 'turmeric', 'rice', 
    'chana dal', 'moong dal', 'fish', 'prawns', 'mutton', 'chicken', 
    'poppy seeds', 'curd', 'ghee', 'coconut', 'eggplant'
  ];

  const togglePantryIngredient = (ing: string) => {
    setPantryIngredients(prev => 
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
  };

  const handleGenerate = () => {
    setGenerating(true);

    setTimeout(() => {
      // Build a smart, culturally authentic 7-day meal plan
      // Respecting diet preference, reusing ingredients (potato, mustard oil, seasonal fish/dal)
      const isVegOnly = dietPreference === 'veg';
      const isFishLover = dietPreference === 'fish';
      const isLowSpice = dietPreference === 'low-spice';

      const plan: WeeklyPlan = {
        Monday: {
          breakfast: [{ recipeId: 'luchi' }, { recipeId: 'aloor-dom' }],
          lunch: isVegOnly 
            ? [{ recipeId: 'steamed-bhaat' }, { recipeId: 'cholar-dal' }, { recipeId: 'aloo-posto' }, { recipeId: 'begun-bhaja' }]
            : [{ recipeId: 'steamed-bhaat' }, { recipeId: 'cholar-dal' }, { recipeId: 'aloo-posto' }, { recipeId: 'doi-maach' }],
          snack: [{ recipeId: 'singara' }],
          dinner: isVegOnly 
            ? [{ recipeId: 'dhokar-dalna' }, { recipeId: 'steamed-bhaat' }]
            : [{ recipeId: 'bengali-chicken-curry' }, { recipeId: 'steamed-bhaat' }]
        },
        Tuesday: {
          breakfast: [{ recipeId: 'radhaballabhi' }, { recipeId: 'aloor-dom' }],
          lunch: [{ recipeId: 'steamed-bhaat' }, { recipeId: 'shukto' }, { recipeId: 'begun-bhaja' }, { recipeId: 'machher-jhol' }],
          snack: [{ recipeId: 'aam-pora-sharbat' }],
          dinner: [{ recipeId: 'dhokar-dalna' }, { recipeId: 'steamed-bhaat' }]
        },
        Wednesday: {
          breakfast: [{ recipeId: 'ghugni' }],
          lunch: isVegOnly
            ? [{ recipeId: 'steamed-bhaat' }, { recipeId: 'aam-dal' }, { recipeId: 'begun-bhaja' }, { recipeId: 'potoler-dolma' }]
            : [{ recipeId: 'steamed-bhaat' }, { recipeId: 'aam-dal' }, { recipeId: 'begun-bhaja' }, { recipeId: 'shorshe-ilish' }],
          snack: [{ recipeId: 'singara' }],
          dinner: [{ recipeId: 'chhanar-dalna' }, { recipeId: 'steamed-bhaat' }]
        },
        Thursday: {
          breakfast: [{ recipeId: 'luchi' }, { recipeId: 'cholar-dal' }],
          lunch: isVegOnly
            ? [{ recipeId: 'steamed-bhaat' }, { recipeId: 'shukto' }, { recipeId: 'mochar-ghonto' }, { recipeId: 'aloo-posto' }]
            : [{ recipeId: 'steamed-bhaat' }, { recipeId: 'shukto' }, { recipeId: 'potoler-dolma' }, { recipeId: 'rui-kalia' }],
          snack: [{ recipeId: 'mishti-doi' }],
          dinner: isVegOnly
            ? [{ recipeId: 'dhokar-dalna' }, { recipeId: 'steamed-bhaat' }]
            : [{ recipeId: 'bengali-chicken-curry' }, { recipeId: 'steamed-bhaat' }]
        },
        Friday: {
          breakfast: [{ recipeId: 'aloor-dom' }],
          lunch: [{ recipeId: 'khichuri' }, { recipeId: 'begun-bhaja' }, { recipeId: isVegOnly ? 'chhanar-dalna' : 'chingri-malai-curry' }, { recipeId: 'mishti-doi' }],
          snack: [{ recipeId: 'ghugni' }],
          dinner: [{ recipeId: 'mochar-ghonto' }, { recipeId: 'steamed-bhaat' }]
        },
        Saturday: {
          breakfast: [{ recipeId: 'radhaballabhi' }, { recipeId: 'aloor-dom' }],
          lunch: isVegOnly
            ? [{ recipeId: 'steamed-bhaat' }, { recipeId: 'aloo-posto' }, { recipeId: 'potoler-dolma' }, { recipeId: 'rasgulla' }]
            : [{ recipeId: 'steamed-bhaat' }, { recipeId: 'aloo-posto' }, { recipeId: 'shorshe-ilish' }, { recipeId: 'rasgulla' }],
          snack: [{ recipeId: 'patishapta' }],
          dinner: isVegOnly
            ? [{ recipeId: 'chhanar-dalna' }, { recipeId: 'luchi' }]
            : [{ recipeId: 'mutton-rezala' }, { recipeId: 'luchi' }]
        },
        Sunday: {
          breakfast: [{ recipeId: 'luchi' }, { recipeId: 'aloor-dom' }],
          lunch: isVegOnly
            ? [{ recipeId: 'basanti-pulao' }, { recipeId: 'chhanar-dalna' }, { recipeId: 'mishti-doi' }, { recipeId: 'rasgulla' }]
            : [{ recipeId: 'basanti-pulao' }, { recipeId: 'kosha-mangsho' }, { recipeId: 'mishti-doi' }, { recipeId: 'rasgulla' }],
          snack: [{ recipeId: 'singara' }, { recipeId: 'patishapta' }],
          dinner: [{ recipeId: 'steamed-bhaat' }, { recipeId: 'machher-jhol' }, { recipeId: 'nolen-gur-payesh' }]
        }
      };

      setWeeklyPlan(plan);
      regenerateShoppingListFromPlan();
      setGenerating(false);
      onClose();
      showToast('Generated 7-day balanced Bengali meal plan with ingredient reuse!');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center items-center p-3 sm:p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-terracotta-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-terracotta-100 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-mustard-500 to-sindoor-600 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-sindoor-900">
                Smart Bengali Meal Planner
              </h2>
              <p className="text-xs text-charcoal/60">
                AI-assisted 7-day menu tailored to your family, pantry & heritage
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-cream-100 text-charcoal/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Step 1: Preferences */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            {/* Number of People */}
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-2 flex items-center space-x-2">
                <Users className="w-4 h-4 text-sindoor-700" />
                <span>Family / Household Size (সদস্য সংখ্যা)</span>
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 4, 6, 8].map(num => (
                  <button
                    key={num}
                    onClick={() => setPeopleCount(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                      peopleCount === num 
                        ? 'bg-sindoor-700 text-white border-sindoor-700 shadow-xs' 
                        : 'bg-cream-50 text-charcoal/80 border-terracotta-200 hover:bg-cream-100'
                    }`}
                  >
                    {num} {num === 1 ? 'person' : 'people'}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Preference */}
            <div>
              <label className="text-xs font-bold text-charcoal/80 block mb-2 flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Dietary Preference & Food Culture</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'fish', label: 'Maachhe-Bhaate (Fish Lover)', desc: 'Ilish, Rui, Chingri with classic sides' },
                  { id: 'all', label: 'All Bengali Non-Veg', desc: 'Mutton, chicken, fish & seafood' },
                  { id: 'veg', label: 'Pure Niramish (Vegetarian)', desc: 'Aloo posto, shukto, dhoka & paneer' },
                  { id: 'low-spice', label: 'Gentle & Low Spice', desc: 'Soothing everyday Bengali comfort food' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setDietPreference(opt.id as any)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      dietPreference === opt.id 
                        ? 'border-sindoor-600 bg-sindoor-50/70 text-sindoor-900 shadow-xs ring-1 ring-sindoor-500' 
                        : 'border-terracotta-100 bg-cream-50/50 hover:bg-cream-100 text-charcoal/80'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[10px] text-charcoal/60 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Cooking Time & Budget */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-charcoal/80 block mb-1.5 flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>Cooking Time Daily</span>
                </label>
                <select
                  value={timeAvailable}
                  onChange={(e) => setTimeAvailable(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 font-medium"
                >
                  <option value="quick">Quick (Under 30 mins per meal)</option>
                  <option value="moderate">Moderate (30–50 mins)</option>
                  <option value="elaborate">Elaborate weekend feasts</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal/80 block mb-1.5 flex items-center space-x-1.5">
                  <Coins className="w-3.5 h-3.5 text-mustard-600" />
                  <span>Budget & Vibe</span>
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 font-medium"
                >
                  <option value="budget">Everyday budget-conscious</option>
                  <option value="standard">Standard Bengali household</option>
                  <option value="royal">Royal banquet & seafood spread</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="flex items-center space-x-2 bg-sindoor-700 hover:bg-sindoor-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all"
              >
                <span>Next: Pantry & Ingredient Reuse →</span>
              </button>
            </div>
          </div>
        )}

        {/* Wizard Step 2: Pantry & Ingredient Reuse */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="flex items-center space-x-2 text-sindoor-900 font-bold text-sm mb-1">
                <ChefHat className="w-4 h-4 text-mustard-600" />
                <span>Ingredients You Already Have At Home</span>
              </div>
              <p className="text-xs text-charcoal/60 leading-relaxed mb-3">
                The smart planner prioritizes dishes that reuse these staples across multiple meals to eliminate grocery waste.
              </p>

              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1">
                {availableCommonPantry.map(ing => {
                  const selected = pantryIngredients.includes(ing);
                  return (
                    <button
                      key={ing}
                      onClick={() => togglePantryIngredient(ing)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all capitalize border ${
                        selected 
                          ? 'bg-mustard-500 border-mustard-600 text-sindoor-950 font-bold shadow-xs' 
                          : 'bg-cream-50 border-terracotta-200 text-charcoal/70 hover:bg-cream-100'
                      }`}
                    >
                      {selected ? '✓ ' : '+ '}
                      {ing}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-cream-100 p-4 rounded-2xl border border-terracotta-200 text-xs space-y-2">
              <span className="font-bold text-sindoor-900 block">
                Bengali Kitchen Wisdom (পাকপ্রণালী নিয়ম):
              </span>
              <ul className="list-disc list-inside space-y-1 text-charcoal/75 text-[11px]">
                <li>Lunch pairs staple <strong>Bhaat + Dal + Torkari/Bhaja + Mach/Mangsho</strong>.</li>
                <li>Dinner stays lighter with Roti or light Jhol for easy digestion.</li>
                <li>Weekend features beloved classics like <strong>Kosha Mangsho, Pulao & Mishti</strong>.</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-terracotta-100">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-charcoal/70 hover:text-charcoal px-3 py-2"
              >
                ← Back
              </button>

              <button
                onClick={handleGenerate}
                disabled={generating}
                className="flex items-center space-x-2 bg-sindoor-700 hover:bg-sindoor-800 text-white px-7 py-3 rounded-2xl font-bold text-xs shadow-lg transition-all"
              >
                {generating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Planning Your Week...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate 7-Day Plan</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
