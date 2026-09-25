import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomepageView } from './components/HomepageView';
import { RecipeDiscoveryView } from './components/RecipeDiscoveryView';
import { MealPlannerView } from './components/MealPlannerView';
import { MyRecipesView } from './components/MyRecipesView';
import { PantryManagerView } from './components/PantryManagerView';
import { ShoppingListView } from './components/ShoppingListView';
import { WhatCanICookView } from './components/WhatCanICookView';
import { FestivalPlannerView } from './components/FestivalPlannerView';
import { SeasonalSection } from './components/SeasonalSection';
import { FavoritesView } from './components/FavoritesView';
import { DashboardView } from './components/DashboardView';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { CookingModeModal } from './components/CookingModeModal';
import { RecipeCreateModal } from './components/RecipeCreateModal';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import { EmailInboxModal } from './components/EmailInboxModal';
import { CheckCircle2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { 
    activeTab, 
    selectedRecipe, 
    setSelectedRecipe, 
    cookingModeRecipe, 
    setCookingModeRecipe,
    isCreateRecipeOpen,
    setIsCreateRecipeOpen,
    isAuthModalOpen,
    setIsAuthModalOpen,
    isEmailInboxOpen,
    setIsEmailInboxOpen,
    toastMessage
  } = useApp();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F2] text-charcoal">
      {/* Top Navbar */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && <HomepageView />}
        {activeTab === 'recipes' && <RecipeDiscoveryView />}
        {activeTab === 'planner' && <MealPlannerView />}
        {activeTab === 'my-recipes' && <MyRecipesView />}
        {activeTab === 'pantry' && <PantryManagerView />}
        {activeTab === 'shopping' && <ShoppingListView />}
        {activeTab === 'what-can-i-cook' && <WhatCanICookView />}
        {activeTab === 'festivals' && <FestivalPlannerView />}
        {activeTab === 'seasonal' && <SeasonalSection />}
        {activeTab === 'favorites' && <FavoritesView />}
        {activeTab === 'dashboard' && <DashboardView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedRecipe && (
        <RecipeDetailModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}

      {cookingModeRecipe && (
        <CookingModeModal 
          recipe={cookingModeRecipe} 
          onClose={() => setCookingModeRecipe(null)} 
        />
      )}

      {isCreateRecipeOpen && (
        <RecipeCreateModal 
          onClose={() => setIsCreateRecipeOpen(false)} 
        />
      )}

      {/* Google Authentication Modal */}
      <GoogleAuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Email Notifications & Dispatch Modal */}
      <EmailInboxModal 
        isOpen={isEmailInboxOpen}
        onClose={() => setIsEmailInboxOpen(false)}
      />

      {/* Toast Notification Notification Pill */}
      {toastMessage && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 bg-[#1A1817] text-white px-4 py-3 rounded-2xl shadow-2xl border border-terracotta-500/40 flex items-center space-x-2.5 text-xs font-semibold animate-scaleUp">
          <CheckCircle2 className="w-4 h-4 text-mustard-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
