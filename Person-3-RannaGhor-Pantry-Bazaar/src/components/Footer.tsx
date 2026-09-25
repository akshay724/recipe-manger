import React from 'react';
import { ChefHat, Heart, Sparkles, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AlpanaDivider } from './AlpanaDivider';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="bg-[#181615] text-[#ECE6DE] pt-12 pb-24 lg:pb-12 border-t border-terracotta-900/60 relative overflow-hidden">
      
      {/* Decorative Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-sindoor-800 via-mustard-600 to-terracotta-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-sindoor-700 text-white flex items-center justify-center font-bold">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white">RannaGhor</span>
                <span className="font-bengali text-xs text-mustard-400 block font-semibold">রান্নাঘর</span>
              </div>
            </div>
            <p className="text-xs text-[#ECE6DE]/70 leading-relaxed font-light">
              A modern digital kitchen companion celebrating the food culture, heirloom recipes, and weekly meal rhythms of West Bengal.
            </p>
            <div className="text-[11px] text-mustard-300 font-serif italic pt-1">
              “Plan. Cook. Enjoy Bengal.”
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-3">Kitchen Modules</h4>
            <ul className="space-y-2 text-xs text-[#ECE6DE]/75">
              <li>
                <button onClick={() => setActiveTab('recipes')} className="hover:text-mustard-400 transition-colors">
                  Explore Recipes (রেসিপি)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('planner')} className="hover:text-mustard-400 transition-colors">
                  Weekly Meal Planner (পরিকল্পনা)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pantry')} className="hover:text-mustard-400 transition-colors">
                  Pantry Freshness Tracker (ভাঁড়ার)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('shopping')} className="hover:text-mustard-400 transition-colors">
                  Automatic Bazaar List (ফর্দ)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('what-can-i-cook')} className="hover:text-mustard-400 transition-colors text-mustard-300 font-bold">
                  What Can I Cook? (কী রাঁধব?)
                </button>
              </li>
            </ul>
          </div>

          {/* Cultural Traditions */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-3">Heritage & Festivals</h4>
            <ul className="space-y-2 text-xs text-[#ECE6DE]/75">
              <li>
                <button onClick={() => setActiveTab('festivals')} className="hover:text-mustard-400 transition-colors">
                  Poila Boishakh (পয়লা বৈশাখ)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('festivals')} className="hover:text-mustard-400 transition-colors">
                  Durga Puja Bhog & Feasts (দুর্গাপূজা)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('festivals')} className="hover:text-mustard-400 transition-colors">
                  Jamai Shashti Banquet (জামাই ষষ্ঠী)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('seasonal')} className="hover:text-mustard-400 transition-colors">
                  Winter Nolen Gur & Pithe Puli (নলেন গুড়)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('seasonal')} className="hover:text-mustard-400 transition-colors">
                  Monsoon Khichuri & Ilish (বর্ষার খিচুড়ি)
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Roots */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-3">Culinary Regions</h4>
            <p className="text-xs text-[#ECE6DE]/70 leading-relaxed mb-3">
              Representing Kolkata Cabin Cuisine, Rural Rarh Bengal, North Bengal Hills & Terai, and East Bengal Bangal heritage.
            </p>
            <div className="flex items-center space-x-2 text-xs text-mustard-400 font-serif">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Kolkata • Siliguri • Bankura • Durgapur</span>
            </div>
          </div>

        </div>

        <AlpanaDivider variant="kantha" className="my-6 text-terracotta-600/60" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#ECE6DE]/50 gap-3">
          <div>
            © 2026 RannaGhor (রান্নাঘর). Dedicated to Bengali food lovers worldwide.
          </div>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-sindoor-600 fill-sindoor-600 mx-1" />
            <span>and pure Shorsher Tel (Mustard Oil).</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
