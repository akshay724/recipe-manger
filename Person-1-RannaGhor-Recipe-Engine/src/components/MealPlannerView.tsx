import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WeekDays, Recipe } from '../types';
import { getRecipeById } from '../data/allRecipes';
import { 
  CalendarDays, 
  Sparkles, 
  Plus, 
  Trash2, 
  Copy, 
  ShoppingBag, 
  Printer, 
  ChevronRight, 
  ChefHat, 
  Clock, 
  Flame,
  CheckCircle,
  Eye,
  ArrowRightLeft,
  Mail
} from 'lucide-react';
import { SmartPlanWizardModal } from './SmartPlanWizardModal';
import { AlpanaDivider } from './AlpanaDivider';

const DAYS: WeekDays[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const SLOTS = [
  { key: 'breakfast', label: 'Breakfast', bengali: 'জলখাবার', time: '8:00 AM' },
  { key: 'lunch', label: 'Lunch', bengali: 'দুপুরের খাবার', time: '1:30 PM' },
  { key: 'snack', label: 'Evening Snack', bengali: 'বিকেলের চা ও টিফিন', time: '5:30 PM' },
  { key: 'dinner', label: 'Dinner', bengali: 'রাতের খাবার', time: '9:00 PM' }
] as const;

export const MealPlannerView: React.FC = () => {
  const { 
    mealPlan, 
    addRecipeToMealPlan, 
    removeRecipeFromMealPlan, 
    duplicateDayMeals, 
    clearMealPlan,
    recipes, 
    setSelectedRecipe, 
    regenerateShoppingListFromPlan, 
    isSmartPlanOpen, 
    setIsSmartPlanOpen,
    setActiveTab,
    sendMealPlanEmailToUser,
    user,
    language,
    t
  } = useApp();

  const [activeDay, setActiveDay] = useState<WeekDays>('Monday');
  const [addingToSlot, setAddingToSlot] = useState<{ day: WeekDays; slot: 'breakfast' | 'lunch' | 'snack' | 'dinner' } | null>(null);
  const [duplicateTargetDay, setDuplicateTargetDay] = useState<WeekDays>('Tuesday');
  const [recipeSearch, setRecipeSearch] = useState('');

  const currentDayPlan = mealPlan[activeDay];

  const filteredDrawerRecipes = recipes.filter(r => 
    r.name.toLowerCase().includes(recipeSearch.toLowerCase()) || 
    r.bengaliName.includes(recipeSearch)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Top Banner & Header */}
      <div className="bg-gradient-to-r from-sindoor-900 via-terracotta-900 to-charcoal rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-mustard-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-mustard-400 text-xs font-bold uppercase tracking-wider mb-2">
              <CalendarDays className="w-4 h-4" />
              <span>Weekly Kitchen Routine • সাপ্তাহিক খাবারের পরিকল্পনা</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              {t('plannerTitle')}
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
              {t('plannerSub')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsSmartPlanOpen(true)}
              className="flex items-center space-x-2 bg-gradient-to-r from-mustard-500 to-mustard-600 hover:from-mustard-600 hover:to-mustard-700 text-sindoor-950 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-sindoor-900" />
              <span>{t('generatePlanBtn')}</span>
            </button>

            <button
              onClick={() => {
                regenerateShoppingListFromPlan();
                setActiveTab('shopping');
              }}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-2xl text-xs backdrop-blur-sm transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t('syncShoppingBtn')}</span>
            </button>

            <button
              onClick={sendMealPlanEmailToUser}
              className="flex items-center space-x-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-4 py-2.5 rounded-2xl text-xs backdrop-blur-sm transition-all"
              title={user ? `Email 7-day routine to ${user.email}` : "Email routine to your Google account"}
            >
              <Mail className="w-4 h-4 text-mustard-300" />
              <span>{language === 'bn' ? 'রুটিন জিমেইলে পাঠান ✉️' : 'Email Plan ✉️'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs transition-colors"
              title="Print Weekly Schedule"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Days Tab Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {DAYS.map((day) => {
          const isActive = activeDay === day;
          const totalMeals = 
            mealPlan[day].breakfast.length +
            mealPlan[day].lunch.length +
            mealPlan[day].snack.length +
            mealPlan[day].dinner.length;

          return (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-1 min-w-[110px] p-3.5 rounded-2xl text-center transition-all border ${
                isActive 
                  ? 'bg-sindoor-700 text-white border-sindoor-700 shadow-warm font-bold scale-[1.02]' 
                  : 'bg-white border-terracotta-100 text-charcoal/80 hover:bg-cream-100 font-medium'
              }`}
            >
              <div className="text-xs uppercase tracking-wider">{day.slice(0, 3)}</div>
              <div className="text-[11px] opacity-80 mt-0.5 font-normal">
                {totalMeals} items
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Day Board Grid */}
      <div className="bg-cream-50/60 rounded-3xl p-6 border border-terracotta-200">
        
        {/* Day Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-terracotta-200 mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-sindoor-900">
              {activeDay}'s Menu (দিনের আহার)
            </h2>
            <p className="text-xs text-charcoal/60 mt-0.5">
              Curate breakfast, lunch, tiffin, and dinner for this day
            </p>
          </div>

          {/* Day Toolbar: Duplicate to another day & Clear */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl border border-terracotta-200 text-xs text-charcoal/80">
              <Copy className="w-3.5 h-3.5 text-terracotta-600" />
              <span>Copy to:</span>
              <select
                value={duplicateTargetDay}
                onChange={(e) => setDuplicateTargetDay(e.target.value as WeekDays)}
                className="text-xs font-semibold text-sindoor-900 bg-transparent focus:outline-none"
              >
                {DAYS.filter(d => d !== activeDay).map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <button
                onClick={() => duplicateDayMeals(activeDay, duplicateTargetDay)}
                className="px-2 py-0.5 rounded bg-sindoor-100 text-sindoor-800 text-[11px] font-bold hover:bg-sindoor-200"
              >
                Duplicate
              </button>
            </div>
          </div>
        </div>

        {/* 4 Meal Slots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SLOTS.map((slot) => {
            const items = currentDayPlan[slot.key];

            return (
              <div 
                key={slot.key}
                className="bg-white rounded-2xl p-4 border border-terracotta-100 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Slot Title */}
                  <div className="flex items-center justify-between pb-3 border-b border-cream-200 mb-3">
                    <div>
                      <div className="text-xs font-bold text-sindoor-900">
                        {slot.label}
                      </div>
                      <div className="font-bengali text-[11px] text-terracotta-700">
                        {slot.bengali}
                      </div>
                    </div>
                    <span className="text-[10px] text-charcoal/50 bg-cream-100 px-2 py-0.5 rounded-full font-medium">
                      {slot.time}
                    </span>
                  </div>

                  {/* Planned Dishes in Slot */}
                  <div className="space-y-2.5 min-h-[140px]">
                    {items.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center py-6 text-center text-charcoal/40 text-xs">
                        <ChefHat className="w-6 h-6 mb-1 text-terracotta-300 stroke-[1.5]" />
                        <span>No meals added</span>
                      </div>
                    ) : (
                      items.map((mealItem, idx) => {
                        const recipe = getRecipeById(mealItem.recipeId);
                        if (!recipe) return null;

                        return (
                          <div
                            key={idx}
                            className="group flex items-center justify-between p-2 rounded-xl bg-cream-50/80 border border-terracotta-100 hover:border-terracotta-300 transition-all cursor-pointer"
                            onClick={() => setSelectedRecipe(recipe)}
                          >
                            <div className="flex items-center space-x-2.5 overflow-hidden">
                              <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="w-10 h-10 rounded-lg object-cover shrink-0"
                              />
                              <div className="truncate">
                                <div className="text-xs font-bold text-charcoal group-hover:text-sindoor-800 transition-colors truncate">
                                  {recipe.name}
                                </div>
                                <div className="font-bengali text-[10px] text-terracotta-600 truncate">
                                  {recipe.bengaliName}
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeRecipeFromMealPlan(activeDay, slot.key, idx);
                              }}
                              className="text-charcoal/30 hover:text-sindoor-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Add Recipe to this Slot Button */}
                <button
                  onClick={() => setAddingToSlot({ day: activeDay, slot: slot.key })}
                  className="mt-4 w-full py-2 rounded-xl border border-dashed border-terracotta-300 hover:border-sindoor-600 hover:bg-sindoor-50/50 text-sindoor-800 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Dish</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Weekly Cultural Tip */}
        <div className="mt-8 bg-cream-100/80 rounded-2xl p-4 border border-terracotta-200 flex items-center justify-between text-xs text-charcoal/80">
          <div className="flex items-center space-x-3">
            <span className="font-bengali text-lg text-terracotta-800">মাছে-ভাতে বাঙালি</span>
            <span className="text-charcoal/70">
              Bengali meal etiquette begins with the bittersweet (Teto like Shukto), followed by Shak, Dal & Bhaja, progressing to Fish/Meat, and concluding with Sweet Chutney and Mishti.
            </span>
          </div>
        </div>

      </div>

      {/* Add Recipe Modal Drawer */}
      {addingToSlot && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div 
            className="w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-terracotta-100 mb-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-sindoor-900">
                    Add to {addingToSlot.day}'s {addingToSlot.slot}
                  </h3>
                  <p className="text-xs text-charcoal/60">
                    Pick an authentic dish from your collection
                  </p>
                </div>
                <button 
                  onClick={() => setAddingToSlot(null)}
                  className="p-2 rounded-full hover:bg-cream-100 text-charcoal/50"
                >
                  ✕
                </button>
              </div>

              {/* Search input in drawer */}
              <input
                type="text"
                placeholder="Search by dish name or ingredient..."
                value={recipeSearch}
                onChange={(e) => setRecipeSearch(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-terracotta-200 bg-cream-50 text-xs mb-4 focus:outline-none focus:border-sindoor-600"
              />

              {/* Recipe List */}
              <div className="space-y-2 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {filteredDrawerRecipes.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => {
                      addRecipeToMealPlan(addingToSlot.day, addingToSlot.slot, r.id);
                      setAddingToSlot(null);
                    }}
                    className="p-2.5 rounded-xl border border-terracotta-100 hover:border-sindoor-600 hover:bg-cream-50 transition-all flex items-center space-x-3 cursor-pointer group"
                  >
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 truncate">
                      <div className="text-xs font-bold text-charcoal group-hover:text-sindoor-900 truncate">
                        {r.name}
                      </div>
                      <div className="font-bengali text-[11px] text-terracotta-600">
                        {r.bengaliName}
                      </div>
                      <div className="text-[10px] text-charcoal/50 flex items-center space-x-2 mt-0.5">
                        <span>⏱ {r.totalTimeMinutes}m</span>
                        <span>•</span>
                        <span>{r.dishType}</span>
                      </div>
                    </div>
                    <button className="px-3 py-1 rounded-lg bg-sindoor-700 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Smart Plan Wizard Modal */}
      {isSmartPlanOpen && (
        <SmartPlanWizardModal onClose={() => setIsSmartPlanOpen(false)} />
      )}

    </div>
  );
};
