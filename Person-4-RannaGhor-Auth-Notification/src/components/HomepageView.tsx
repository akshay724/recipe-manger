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
  const { recipes, setActiveTab, setSelectedRecipe } = useApp();

  const featuredRecipes = recipes.filter(r => r.featured).slice(0, 6);

  return (
    <div className="space-y-16 animate-fadeIn pb-12">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Iconic Bengali Recipes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-sindoor-700 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4 text-mustard-500" />
              <span>Timeless Classics • বাংলার সেরা রান্না</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-sindoor-950">
              Heirloom Bengali Recipes
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
              Cooked with pure cold-pressed mustard oil, panch phoron, and centuries of tradition
            </p>
          </div>

          <button
            onClick={() => setActiveTab('recipes')}
            className="flex items-center space-x-1.5 text-xs font-bold text-sindoor-800 hover:text-sindoor-950 hover:underline shrink-0"
          >
            <span>View All Recipes ({recipes.length})</span>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-terracotta-800 via-sindoor-900 to-charcoal rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-mustard-500/20 border border-mustard-400/40 text-mustard-300 text-xs font-bold">
              <Flame className="w-4 h-4 text-mustard-400" />
              <span>Zero Grocery Waste Innovation</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Got Potatoes, Eggs & Mustard Oil?
            </h3>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              Enter the ingredients sitting in your fridge, and RannaGhor calculates exact match percentages to reveal what authentic Bengali meals you can cook right now without stepping outside.
            </p>

            <button
              onClick={() => setActiveTab('what-can-i-cook')}
              className="flex items-center space-x-2 bg-gradient-to-r from-mustard-500 to-mustard-600 hover:from-mustard-600 hover:to-mustard-700 text-sindoor-950 font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Try "What Can I Cook?" (কী রাঁধব?)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Mock Tags Preview */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full lg:w-96 space-y-3">
            <div className="text-xs font-bold text-mustard-300">Pantry Snapshot:</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">✓ Potato</span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">✓ Onion</span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">✓ Egg</span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">✓ Tomato</span>
            </div>
            <div className="pt-2 border-t border-white/10 text-xs text-white/80">
              <span className="font-bold text-white">Suggested: </span>
              Aloor Dom, Dim-er Jhol, Begun Bhaja
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why RannaGhor - 4 Value Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sindoor-950">
            A Digital Kitchen Companion for Every Bengali Home
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
            Designed specifically for home cooks, students away from Bengal, and families who love authentic food
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: CalendarDays,
              title: 'Harmonious Meal Plans',
              bengali: 'সাপ্তাহিক খাবারের রুটিন',
              desc: 'Balanced 7-day schedules observing traditional order: bittersweet starters, light broths, rich curries & mishti.'
            },
            {
              icon: ShoppingBag,
              title: 'Auto Bazaar Lists',
              bengali: 'বাজারের ফর্দ',
              desc: 'Synchronized directly from your weekly meal plan, sorted into Shobji, Maach-Mangsho, and Moshla sections.'
            },
            {
              icon: Archive,
              title: 'Pantry Freshness Alerts',
              bengali: 'ভাঁড়ার ঘর ট্র্যাকার',
              desc: 'Proactive "Use Soon" warnings for fresh fish, greens, and chillies to save grocery costs and prevent food waste.'
            },
            {
              icon: ChefHat,
              title: 'Distraction-Free Cooking',
              bengali: 'রান্না করার মোড',
              desc: 'Large typography, one-step-at-a-time focus mode with built-in digital timers and scaled ingredient quantities.'
            }
          ].map((pillar, i) => {
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100/80 rounded-3xl p-6 sm:p-10 border border-terracotta-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-terracotta-700 uppercase tracking-wider">
              Utsav & Porbon • বারো মাসে তেরো পার্বণ
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sindoor-950">
              Planning for Durga Puja or Poila Boishakh?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/75 max-w-xl">
              Discover authentic banquet menus from Ashtami Khichuri Bhog to Jamai Shashti feasts with 1-click shopping list generators.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('festivals')}
            className="px-6 py-3 rounded-2xl bg-sindoor-700 hover:bg-sindoor-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            Explore Festival Menus →
          </button>
        </div>
      </section>

    </div>
  );
};
