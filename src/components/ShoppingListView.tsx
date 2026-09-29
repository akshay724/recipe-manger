import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingItem } from '../types';
import { 
  ShoppingBag, 
  Plus, 
  Trash2, 
  Check, 
  Share2, 
  Printer, 
  RefreshCw, 
  CheckCircle2, 
  Circle,
  Copy,
  ChefHat,
  Mail
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

export const ShoppingListView: React.FC = () => {
  const { 
    shoppingList, 
    toggleShoppingItem, 
    addCustomShoppingItem, 
    removeShoppingItem, 
    clearCheckedShoppingItems, 
    regenerateShoppingListFromPlan,
    sendBazaarEmailToUser,
    user,
    language,
    showToast 
  } = useApp();

  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState<number>(1);
  const [newItemUnit, setNewItemUnit] = useState('kg');
  const [newItemCategory, setNewItemCategory] = useState<ShoppingItem['category']>('Vegetables');
  const [showAddForm, setShowAddForm] = useState(false);

  const categories: ShoppingItem['category'][] = [
    'Vegetables',
    'Fish & Meat',
    'Spices',
    'Pantry',
    'Dairy & Sweets',
    'Others'
  ];

  const categoryBengaliMap: Record<ShoppingItem['category'], string> = {
    'Vegetables': 'সবজি ও কাঁচাবাজার',
    'Fish & Meat': 'মাছ ও মাংসের বাজার',
    'Spices': 'মশলাপাতি',
    'Pantry': 'মুদিখানার চাল-ডাল ও তেল',
    'Dairy & Sweets': 'দুধ, দই ও মিষ্টি',
    'Others': 'অন্যান্য'
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    addCustomShoppingItem(newItemName.trim(), newItemQty, newItemUnit, newItemCategory);
    setNewItemName('');
    setShowAddForm(false);
  };

  const handleCopyFormattedList = () => {
    let text = `🛒 *RannaGhor Bengali Bazaar List (বাজারের ফর্দ)*\n\n`;
    categories.forEach(cat => {
      const itemsInCat = shoppingList.filter(i => i.category === cat);
      if (itemsInCat.length > 0) {
        text += `*${cat} (${categoryBengaliMap[cat]}):*\n`;
        itemsInCat.forEach(item => {
          text += `${item.checked ? '✓ ' : '• '} ${item.name} — ${item.quantity} ${item.unit}\n`;
        });
        text += `\n`;
      }
    });

    navigator.clipboard.writeText(text);
    showToast('Bazaar list copied to clipboard for WhatsApp/SMS!');
  };

  const totalItems = shoppingList.length;
  const checkedItemsCount = shoppingList.filter(i => i.checked).length;
  const percentDone = totalItems > 0 ? Math.round((checkedItemsCount / totalItems) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-leaf-800 via-leaf-700 to-terracotta-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-leaf-200 text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Smart Bazaar List • বাজারের ফর্দ</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              Automatic Bengali Shopping List
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Aggregated directly from your 7-day meal plan. Categorized by traditional Bengali bazaar sections.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={regenerateShoppingListFromPlan}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-2xl text-xs backdrop-blur-sm transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Sync with Planner</span>
            </button>

            <button
              onClick={handleCopyFormattedList}
              className="flex items-center space-x-2 bg-mustard-500 hover:bg-mustard-600 text-sindoor-950 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-md transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>Share / WhatsApp</span>
            </button>

            <button
              onClick={sendBazaarEmailToUser}
              className="flex items-center space-x-2 bg-white text-leaf-950 hover:bg-cream-100 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-md transition-all"
              title={user ? `Send email to ${user.email}` : "Email bazaar list to your Google account"}
            >
              <Mail className="w-4 h-4 text-leaf-700" />
              <span>{language === 'bn' ? 'জিমেইলে পাঠান ✉️' : 'Email to Gmail ✉️'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs transition-colors"
              title="Print List"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Quick Actions Bar */}
      <div className="bg-white rounded-3xl p-5 border border-terracotta-100 shadow-warm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-1/2">
          <div className="flex items-center justify-between text-xs font-bold text-charcoal/80 mb-1.5">
            <span>Bazaar Progress ({checkedItemsCount} of {totalItems} items purchased)</span>
            <span className="text-leaf-700">{percentDone}%</span>
          </div>
          <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-leaf-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${percentDone}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          {checkedItemsCount > 0 && (
            <button
              onClick={clearCheckedShoppingItems}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-sindoor-700 hover:bg-sindoor-50 border border-sindoor-200 transition-colors"
            >
              Clear Completed ({checkedItemsCount})
            </button>
          )}

          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-1.5 bg-sindoor-700 hover:bg-sindoor-800 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Item</span>
          </button>
        </div>
      </div>

      {/* Add Custom Item Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-terracotta-200">
            <div className="flex items-center justify-between pb-3 border-b border-terracotta-100 mb-4">
              <h3 className="font-serif font-bold text-lg text-sindoor-900">
                Add Bazaar Item
              </h3>
              <button onClick={() => setShowAddForm(false)} className="text-charcoal/40 hover:text-charcoal">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-charcoal/80 block mb-1">Item Name</label>
                <input
                  type="text"
                  placeholder="e.g. Kasundi, Jharna Ghee, Shorshe..."
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 focus:outline-none focus:border-sindoor-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-charcoal/80 block mb-1">Quantity</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={newItemQty}
                    onChange={(e) => setNewItemQty(parseFloat(e.target.value) || 1)}
                    className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal/80 block mb-1">Unit</label>
                  <select
                    value={newItemUnit}
                    onChange={(e) => setNewItemUnit(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
                  >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="L">L</option>
                    <option value="ml">ml</option>
                    <option value="pcs">pcs</option>
                    <option value="packet">packet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal/80 block mb-1">Market Category</label>
                <select
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c} ({categoryBengaliMap[c]})</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded-xl text-xs text-charcoal/70 hover:bg-cream-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-bold shadow-md"
                >
                  Add to List
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Categorized Grocery Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => {
          const itemsInCat = shoppingList.filter(i => i.category === cat);
          if (itemsInCat.length === 0) return null;

          return (
            <div
              key={cat}
              className="bg-white rounded-3xl p-5 border border-terracotta-100 shadow-warm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-cream-200 mb-3">
                  <div>
                    <h3 className="font-serif font-bold text-base text-sindoor-900">
                      {cat}
                    </h3>
                    <span className="font-bengali text-xs text-terracotta-600">
                      {categoryBengaliMap[cat]}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream-100 text-charcoal/70">
                    {itemsInCat.length} items
                  </span>
                </div>

                {/* Items List */}
                <div className="divide-y divide-cream-100">
                  {itemsInCat.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleShoppingItem(item.id)}
                      className={`py-2.5 px-2 flex items-center justify-between cursor-pointer rounded-xl hover:bg-cream-50 transition-colors select-none ${
                        item.checked ? 'opacity-50' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleShoppingItem(item.id);
                          }}
                          className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                            item.checked 
                              ? 'bg-leaf-600 text-white' 
                              : 'border-2 border-terracotta-300 hover:border-leaf-600'
                          }`}
                        >
                          {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                        
                        <div className="truncate">
                          <span className={`text-xs font-medium ${item.checked ? 'line-through text-charcoal/50' : 'text-charcoal'}`}>
                            {item.name}
                          </span>
                          {item.bengaliName && (
                            <span className="font-bengali text-[10px] text-terracotta-700 block">
                              {item.bengaliName}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 shrink-0">
                        <span className="text-xs font-bold text-sindoor-800 bg-cream-100 px-2 py-0.5 rounded-md">
                          {item.quantity} {item.unit}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeShoppingItem(item.id);
                          }}
                          className="text-charcoal/30 hover:text-sindoor-700 p-1 transition-colors"
                          title="Delete item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
