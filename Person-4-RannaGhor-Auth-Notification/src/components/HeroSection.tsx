import React from 'react';
import { useApp } from '../context/AppContext';
import { getRecipeById } from '../data/allRecipes';
import { 
  Sparkles, 
  CalendarDays, 
  BookOpen, 
  ArrowRight, 
  Flame, 
  Clock, 
  ChefHat,
  Search
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

export const HeroSection: React.FC = () => {
  const { setActiveTab, setSelectedRecipe, setFilters, filters, language, t } = useApp();

  // The iconic Bengali thali spread featured dishes
  const mealSpread = [
    { id: 'steamed-bhaat', label: 'Bhaat', bengali: 'ভাত' },
    { id: 'cholar-dal', label: 'Dal', bengali: 'ডাল' },
    { id: 'aloo-posto', label: 'Aloo Posto', bengali: 'আলু পোস্ত' },
    { id: 'shorshe-ilish', label: 'Shorshe Ilish', bengali: 'শর্ষে ইলিশ' },
    { id: 'chingri-malai-curry', label: 'Chingri Malai', bengali: 'চিংড়ি মালাই' },
    { id: 'luchi', label: 'Phulko Luchi', bengali: 'ফুলকো লুচি' },
    { id: 'mishti-doi', label: 'Mishti Doi', bengali: 'মিষ্টি দই' }
  ];

  const handleHeroSearch = (keyword: string) => {
    setFilters(prev => ({ ...prev, searchQuery: keyword }));
    setActiveTab('recipes');
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#FAF7F2] w-full max-w-full">
      
      {/* Subtle Alpana and Terracotta Background Ornaments */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-mustard-400/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-sindoor-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mustard-100 border border-mustard-300 text-sindoor-900 text-xs font-bold tracking-wide shadow-xs animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-sindoor-600 animate-ping"></span>
            <span>Welcome to RannaGhor • রান্নাঘরের ডিজিটাল সহচর</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-sindoor-950 tracking-tight leading-[1.15]">
            {t('heroHeadline1')} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sindoor-700 via-terracotta-600 to-mustard-600">
              {t('heroHeadline2')}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-charcoal/75 max-w-2xl mx-auto leading-relaxed font-light">
            {t('heroSubhead')}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('recipes')}
              className="flex items-center space-x-2 bg-sindoor-700 hover:bg-sindoor-800 text-white font-bold px-7 py-3 rounded-2xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('exploreRecipes')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('planner')}
              className="flex items-center space-x-2 bg-white hover:bg-cream-100 text-sindoor-950 font-bold px-7 py-3 rounded-2xl text-xs sm:text-sm border border-terracotta-200 shadow-warm transition-all transform hover:-translate-y-0.5"
            >
              <CalendarDays className="w-4 h-4 text-terracotta-600" />
              <span>{t('planThisWeek')}</span>
            </button>
          </div>

          {/* Quick Search Chips */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-charcoal/50 font-medium">{t('quickSearch')}:</span>
            {['Ilish', 'Posto', 'Chingri', 'Kosha Mangsho', 'Luchi', 'Mishti'].map(term => (
              <button
                key={term}
                onClick={() => handleHeroSearch(term)}
                className="px-2.5 py-1 rounded-full bg-cream-100/90 hover:bg-cream-200 text-sindoor-900 font-semibold border border-terracotta-100 text-[11px] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <AlpanaDivider variant="kantha" className="my-8" />

        {/* Bengali Meal Spread Showcase Platter */}
        <div className="mt-4">
          <div className="text-center mb-6">
            <h2 className="text-base sm:text-lg font-serif font-bold text-sindoor-900">
              {t('grandThaliTitle')}
            </h2>
            <p className="text-xs text-charcoal/60 mt-0.5">
              {t('grandThaliSub')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 w-full">
            {mealSpread.map((item) => {
              const rec = getRecipeById(item.id);
              if (!rec) return null;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedRecipe(rec)}
                  className="group bg-white rounded-2xl p-2.5 sm:p-3 border border-terracotta-100 shadow-warm hover:shadow-warm-hover transition-all cursor-pointer flex flex-col items-center text-center transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-mustard-300 mb-2 shadow-xs group-hover:border-sindoor-600 transition-colors">
                    <img
                      src={rec.image}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold text-charcoal group-hover:text-sindoor-800 transition-colors">
                    {item.label}
                  </span>
                  <span className="font-bengali text-[10px] text-terracotta-600 font-medium mt-0.5">
                    {item.bengali}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
