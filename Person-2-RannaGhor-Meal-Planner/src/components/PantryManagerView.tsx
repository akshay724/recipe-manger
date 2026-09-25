import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PantryItem } from '../types';
import { 
  Archive, 
  Plus, 
  Trash2, 
  AlertTriangle, 
  Clock, 
  Search, 
  Flame, 
  CheckCircle2, 
  ChefHat,
  Calendar,
  Sparkles
} from 'lucide-react';
import { AlpanaDivider } from './AlpanaDivider';

export const PantryManagerView: React.FC = () => {
  const { 
    pantry, 
    addPantryItem, 
    removePantryItem, 
    expiringSoonPantryItems, 
    setActiveTab, 
    setFilters 
  } = useApp();

  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [bengaliName, setBengaliName] = useState('');
  const [quantity, setQuantity] = useState<number>(1);
  const [unit, setUnit] = useState('kg');
  const [category, setCategory] = useState<PantryItem['category']>('Vegetables');
  const [purchaseDate, setPurchaseDate] = useState('2026-09-25');
  const [expiryDate, setExpiryDate] = useState('2026-10-15');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Vegetables', 'Fish & Meat', 'Spices', 'Pantry', 'Dairy & Sweets'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addPantryItem({
      name: name.trim(),
      bengaliName: bengaliName.trim() || undefined,
      quantity,
      unit,
      category,
      purchaseDate,
      expiryDate
    });

    setName('');
    setBengaliName('');
    setShowAddForm(false);
  };

  const filteredPantry = pantry.filter(item => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-terracotta-800 via-terracotta-700 to-mustard-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-mustard-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Archive className="w-4 h-4" />
              <span>Kitchen Inventory • ভাঁড়ার ঘর ও রসদ</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              Bengali Pantry & Freshness Tracker
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Keep track of traditional spices, mustard oils, dals, and seasonal fresh produce to minimize kitchen waste.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('what-can-i-cook')}
              className="flex items-center space-x-2 bg-white text-sindoor-900 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-md hover:bg-cream-100 transition-all"
            >
              <Flame className="w-4 h-4 text-sindoor-600 fill-sindoor-600" />
              <span>Find Recipes Using These Ingredients</span>
            </button>

            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center space-x-2 bg-mustard-500 hover:bg-mustard-600 text-sindoor-950 font-bold px-4 py-2.5 rounded-2xl text-xs shadow-md transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Ingredient</span>
            </button>
          </div>
        </div>
      </div>

      {/* "Use Soon" Warning Banner */}
      {expiringSoonPantryItems.length > 0 && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 mb-8 shadow-sm animate-pulse-slow">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Use Soon / দ্রুত ব্যবহার করুন ({expiringSoonPantryItems.length} items approaching expiry)</span>
            </div>

            <button
              onClick={() => setActiveTab('what-can-i-cook')}
              className="text-xs font-bold text-sindoor-800 hover:underline flex items-center space-x-1"
            >
              <span>Cook these right now →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {expiringSoonPantryItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-3 border border-amber-200 shadow-xs flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-charcoal">{item.name}</div>
                  {item.bengaliName && (
                    <div className="font-bengali text-[11px] text-terracotta-700">{item.bengaliName}</div>
                  )}
                  <div className="text-[10px] text-amber-700 font-medium mt-1">
                    Expires: {item.expiryDate} (within 2 days)
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-sindoor-800 block">
                    {item.quantity} {item.unit}
                  </span>
                  <button
                    onClick={() => {
                      setFilters(prev => ({ ...prev, searchQuery: item.name.split(' ')[0] }));
                      setActiveTab('recipes');
                    }}
                    className="text-[10px] font-bold text-sindoor-700 hover:underline mt-1 block"
                  >
                    View Recipes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-terracotta-200">
            <div className="flex items-center justify-between pb-3 border-b border-terracotta-100 mb-4">
              <h3 className="font-serif font-bold text-lg text-sindoor-900">
                Add to Kitchen Pantry
              </h3>
              <button onClick={() => setShowAddForm(false)} className="text-charcoal/40 hover:text-charcoal">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-charcoal/80 block mb-1">
                  Ingredient Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Poppy seeds, Potatoes, Rohu fish..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 focus:outline-none focus:border-sindoor-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal/80 block mb-1">
                  Bengali Name (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  placeholder="e.g. পোস্তদানা, আলু, রুই মাছ..."
                  value={bengaliName}
                  onChange={(e) => setBengaliName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 focus:outline-none focus:border-sindoor-600 font-bengali"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-charcoal/80 block mb-1">Quantity</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseFloat(e.target.value) || 1)}
                    className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50 font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal/80 block mb-1">Unit</label>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
                  >
                    <option value="kg">kg (কিলোগ্রাম)</option>
                    <option value="g">g (গ্রাম)</option>
                    <option value="L">L (লিটার)</option>
                    <option value="ml">ml (মিলি)</option>
                    <option value="pcs">pcs (টুকরো / আস্ত)</option>
                    <option value="tbsp">tbsp</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal/80 block mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
                >
                  <option value="Vegetables">Vegetables (সবজি)</option>
                  <option value="Fish & Meat">Fish & Meat (মাছ ও মাংস)</option>
                  <option value="Spices">Spices (মশলা)</option>
                  <option value="Pantry">Pantry & Staples (মুদিখানা)</option>
                  <option value="Dairy & Sweets">Dairy & Sweets (দুধ ও মিষ্টি)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-charcoal/80 block mb-1">Purchase Date</label>
                  <input
                    type="date"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal/80 block mb-1">Expiry / Best Before</label>
                  <input
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full p-2 rounded-xl border border-terracotta-200 text-xs bg-cream-50"
                  />
                </div>
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
                  Save to Pantry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-sindoor-700 text-white shadow-xs'
                : 'bg-white border border-terracotta-100 text-charcoal/80 hover:bg-cream-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Inventory Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPantry.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-5 border border-terracotta-100 shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-sm font-bold text-sindoor-950 font-serif">{item.name}</h3>
                  {item.bengaliName && (
                    <span className="font-bengali text-xs text-terracotta-600 block">{item.bengaliName}</span>
                  )}
                </div>
                <span className="px-2 py-0.5 rounded-md bg-cream-100 text-[10px] font-semibold text-charcoal/70">
                  {item.category}
                </span>
              </div>

              <div className="mt-4 flex items-baseline space-x-1.5">
                <span className="text-2xl font-bold font-serif text-sindoor-800">
                  {item.quantity}
                </span>
                <span className="text-xs font-medium text-charcoal/60">
                  {item.unit}
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-cream-200 flex items-center justify-between text-[11px] text-charcoal/60">
              <span>Expires: {item.expiryDate}</span>
              <button
                onClick={() => removePantryItem(item.id)}
                className="text-charcoal/40 hover:text-sindoor-700 p-1 transition-colors"
                title="Remove item"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
