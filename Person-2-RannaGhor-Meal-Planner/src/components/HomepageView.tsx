import React from 'react';
import { useApp } from '../context/AppContext';
import { HeroSection } from './HeroSection';
import { RecipeCard } from './RecipeCard';
import { AlpanaDivider } from './AlpanaDivider';
import { 
  Sparkles, 
  ArrowRight, 
  CalendarDays, 
  Archive, 
  ShoppingBag, 
  ChefHat, 
  Flame, 
  Sun,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';

export const HomepageView: React.FC = () => {
  const { recipes, setActiveTab, setSelectedRecipe, t, language } = useApp();

  const featuredRecipes = recipes.filter(r => r.featured).slice(0, 6);

  const pillars = [
    {
      icon: CalendarDays,
      title: t('pillar1Title'),
      bengali: t('pillar1Bengali'),
      desc: t('pillar1Desc')
    },
    {
      icon: ShoppingBag,
      title: t('pillar2Title'),
      bengali: t('pillar2Bengali'),
      desc: t('pillar2Desc')
    },
    {
      icon: Archive,
      title: t('pillar3Title'),
      bengali: t('pillar3Bengali'),
      desc: t('pillar3Desc')
    },
    {
      icon: ChefHat,
      title: t('pillar4Title'),
      bengali: t('pillar4Bengali'),
      desc: t('pillar4Desc')
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn pb-12 w-full max-w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Iconic Bengali Recipes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-sindoor-700 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4 text-mustard-500" />
              <span>{language === 'bn' ? 'সাবেকি বাংলার রান্না • সাবেকিয়ানা' : 'Timeless Classics • বাংলার সেরা রান্না'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-sindoor-950">
              {t('heirloomTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
              {t('heirloomSub')}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('recipes')}
            className="flex items-center space-x-1.5 text-xs font-bold text-sindoor-800 hover:text-sindoor-950 hover:underline shrink-0"
          >
            <span>{language === 'bn' ? `সব রেসিপি দেখুন (${recipes.length})` : `View All Recipes (${recipes.length})`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <AlpanaDivider variant="elaborate" />

      {/* 3. Interactive Feature Callout Banner: "What Can I Cook?" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        <div className="bg-gradient-to-r from-terracotta-800 via-sindoor-900 to-charcoal rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-mustard-500/20 border border-mustard-400/40 text-mustard-300 text-xs font-bold">
              <Flame className="w-4 h-4 text-mustard-400" />
              <span>{language === 'bn' ? 'রান্নাঘরের জিরো অপচয় প্রযুক্তি' : 'Zero Grocery Waste Innovation'}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {t('gotPantryTitle')}
            </h3>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              {t('gotPantrySub')}
            </p>

            <button
              onClick={() => setActiveTab('what-can-i-cook')}
              className="flex items-center space-x-2 bg-gradient-to-r from-mustard-500 to-mustard-600 hover:from-mustard-600 hover:to-mustard-700 text-sindoor-950 font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>{t('tryWhatCanICook')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Mock Tags Preview */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full lg:w-96 space-y-3">
            <div className="text-xs font-bold text-mustard-300">{t('pantrySnapshot')}</div>
            <div className="flex flex-wrap gap-2 text-xs">
              {(language === 'bn' ? ['✓ আলু', '✓ পেঁয়াজ', '✓ ডিম', '✓ টমেটো'] : ['✓ Potato', '✓ Onion', '✓ Egg', '✓ Tomato']).map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">{tag}</span>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 text-xs text-white/80">
              {t('suggestedDishes')}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why RannaGhor - 4 Value Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sindoor-950">
            {t('valuePillarsTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
            {t('valuePillarsSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i}
                className="bg-white rounded-3xl p-6 border border-terracotta-100 shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cream-100 text-sindoor-800 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-charcoal mb-0.5">
                    {pillar.title}
                  </h3>
                  <div className="font-bengali text-xs text-terracotta-700 font-semibold mb-2">
                    {pillar.bengali}
                  </div>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Bengali Festival Meal Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        <div className="bg-cream-100/80 rounded-3xl p-6 sm:p-10 border border-terracotta-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-terracotta-700 uppercase tracking-wider">
              {t('festivalShowcaseTag')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sindoor-950">
              {t('festivalShowcaseTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/75 max-w-xl">
              {t('festivalShowcaseSub')}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('festivals')}
            className="px-6 py-3 rounded-2xl bg-sindoor-700 hover:bg-sindoor-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            {t('exploreFestivalMenus')}
          </button>
        </div>
      </section>

    </div>
  );
};
