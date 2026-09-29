import React from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from './RecipeCard';
import { PlusCircle, ChefHat, Sparkles, Heart } from 'lucide-react';

export const MyRecipesView: React.FC = () => {
  const { recipes, setIsCreateRecipeOpen } = useApp();

  const customRecipes = recipes.filter(r => r.id.startsWith('custom-'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-terracotta-900 via-sindoor-900 to-charcoal rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-mustard-300 text-xs font-bold uppercase tracking-wider mb-2">
              <ChefHat className="w-4 h-4" />
              <span>Personal Kitchen Vault • আমার রান্না</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              My Created Bengali Recipes ({customRecipes.length})
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Add your family's handwritten notebook recipes, secret spice blends, and modern adaptations.
            </p>
          </div>

          <button
            onClick={() => setIsCreateRecipeOpen(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-mustard-500 to-mustard-600 hover:from-mustard-600 hover:to-mustard-700 text-sindoor-950 font-bold px-5 py-3 rounded-2xl text-xs shadow-md transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create New Recipe</span>
          </button>
        </div>
      </div>

      {/* Grid or Empty State */}
      {customRecipes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-terracotta-100 p-8">
          <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center mx-auto mb-4 text-terracotta-600">
            <ChefHat className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-serif font-bold text-sindoor-950 mb-1">
            No custom recipes created yet
          </h3>
          <p className="text-xs text-charcoal/60 max-w-sm mx-auto mb-5 leading-relaxed">
            Preserve your grandmother's secret fish curry, unique spice blends, or favorite quick weekday dishes here.
          </p>
          <button
            onClick={() => setIsCreateRecipeOpen(true)}
            className="px-6 py-2.5 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-bold shadow-md transition-all"
          >
            Add Your First Recipe
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

    </div>
  );
};
