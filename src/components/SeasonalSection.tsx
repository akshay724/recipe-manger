import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe } from '../types';
import { 
  Sun, 
  CloudRain, 
  Snowflake, 
  Flower2, 
  ChefHat, 
  ArrowRight, 
  Sparkles,
  ThermometerSun
} from 'lucide-react';
import { RecipeCard } from './RecipeCard';

export const SeasonalSection: React.FC = () => {
  const { recipes } = useApp();
  const [activeSeason, setActiveSeason] = useState<'Summer' | 'Monsoon' | 'Winter' | 'Spring'>('Summer');

  const seasons = [
    {
      id: 'Summer' as const,
      name: 'Summer (গ্রীষ্মকাল)',
      tagline: 'Cooling, digestive & tart remedies for the tropical heat',
      icon: Sun,
      color: 'from-amber-500 to-orange-600',
      culturalLore: 'In scorching Boishakh and Joishtho months, the Bengali kitchen shifts towards cooling, gut-friendly dishes: palate-cleansing sour Tok Dal cooked with green mangoes, smoky Aam Pora Sharbat, soothing plain curd, and feather-light freshwater fish broths scented with kalo jeere (nigella seeds).',
      dishes: ['aam-dal', 'aam-pora-sharbat', 'doi-maach', 'machher-jhol', 'mishti-doi']
    },
    {
      id: 'Monsoon' as const,
      name: 'Monsoon (বর্ষাকাল)',
      tagline: 'When the rains arrive with roasted Khichuri & prized Hilsa',
      icon: CloudRain,
      color: 'from-sky-600 to-indigo-700',
      culturalLore: 'When rain lashes against green paddy fields during Asharh and Srabon, every Bengali home rejoices with Bhuni Khichuri cooked with dry-roasted moong dal, crispy thick slices of Begun Bhaja, Telebhaja fritters, and the indisputable silver queen of the rivers—Shorshe Ilish.',
      dishes: ['khichuri', 'begun-bhaja', 'shorshe-ilish', 'singara']
    },
    {
      id: 'Winter' as const,
      name: 'Winter (শীতকাল)',
      tagline: 'The sweet season of Nolen Gur, Pithe Puli & tender vegetables',
      icon: Snowflake,
      color: 'from-emerald-700 to-teal-800',
      culturalLore: 'Winter in Bengal is synonymous with the liquid gold called Nolen Gur (date palm sap tapped in rural Bengal). The air fills with the aroma of Patishapta crepes, Gokul Pithe, Gobindobhog chaler Nolen Gurer Payesh, sweet green peas, and fragrant cauliflower curries.',
      dishes: ['nolen-gur-payesh', 'patishapta', 'aloor-dom', 'singara', 'mutton-rezala']
    },
    {
      id: 'Spring' as const,
      name: 'Spring & Festive (বসন্তকাল)',
      tagline: 'Basanti yellow celebrations, new harvests & tender greens',
      icon: Flower2,
      color: 'from-amber-600 to-rose-600',
      culturalLore: 'Spring announces itself with yellow mustard flower blooms across the Bengal countryside. The season ushers in Basanti Pulao, fragrant Chhanar Dalna, sweet Chholar Dal with coconut chips, and tender spring drumsticks in Shukto.',
      dishes: ['basanti-pulao', 'cholar-dal', 'chhanar-dalna', 'shukto', 'rasgulla']
    }
  ];

  const currentSeasonData = seasons.find(s => s.id === activeSeason)!;
  const seasonalRecipes = recipes.filter(r => currentSeasonData.dishes.includes(r.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className={`bg-gradient-to-r ${currentSeasonData.color} rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8 transition-colors duration-500`}>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 text-white/90 text-xs font-bold uppercase tracking-wider mb-2">
            <ThermometerSun className="w-4 h-4" />
            <span>Ritu-bhebe Ranna • ঋতুভেদে বাঙালি রান্না</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            Bengali Seasonal Food & Heritage
          </h1>
          <p className="text-white/90 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Eating in sync with the six seasons (Shod-Ritu) is the foundation of traditional Bengali gastronomy.
          </p>
        </div>
      </div>

      {/* Season Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {seasons.map((s) => {
          const Icon = s.icon;
          const isActive = activeSeason === s.id;

          return (
            <button
              key={s.id}
              onClick={() => setActiveSeason(s.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex items-center space-x-3 ${
                isActive
                  ? 'bg-white border-sindoor-700 shadow-warm ring-2 ring-sindoor-600'
                  : 'bg-cream-50 border-terracotta-100 hover:bg-cream-100 text-charcoal/70'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isActive ? 'bg-sindoor-700 text-white' : 'bg-cream-200 text-charcoal/70'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className={`text-xs font-bold ${isActive ? 'text-sindoor-900' : 'text-charcoal'}`}>
                  {s.id}
                </div>
                <div className="font-bengali text-[10px] text-terracotta-700 truncate">
                  {s.name.split(' ')[1]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Cultural Lore Card for Selected Season */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-terracotta-100 shadow-warm mb-10">
        <div className="flex items-center space-x-2 text-sindoor-800 font-bold text-sm mb-2">
          <Sparkles className="w-4 h-4 text-mustard-600" />
          <span>Seasonal Culinary Wisdom ({currentSeasonData.name})</span>
        </div>
        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed max-w-4xl">
          {currentSeasonData.culturalLore}
        </p>
      </div>

      {/* Curated Seasonal Recipes Grid */}
      <div>
        <h2 className="text-xl font-serif font-bold text-sindoor-900 mb-6">
          Seasonal Delicacies for {currentSeasonData.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasonalRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

    </div>
  );
};
