# 🛒 Person 3: RannaGhor Smart Pantry & Bazaar List

## 📌 Module Overview
- **Team Member Role**: Lead Pantry Inventory & Bazaar (Shopping) List Developer
- **Designated Local Port**: `http://localhost:5173`
- **Main Responsibility**: Kitchen Inventory Management, Ingredient Expiry Tracking, Bengali Bazaar (Grocery) List Generator, Price Estimator in INR (₹), and "What Can I Cook With What I Have" Pantry Matcher.

---

## 🛠️ Key Files & Architecture
| File | Description |
| :--- | :--- |
| `src/components/PantryManager.tsx` | Pantry stock management with category filters (Spices, Vegetables, Fish/Meat, Staples) |
| `src/components/BazaarList.tsx` | Interactive shopping checklist with check-off states and estimated cost calculator |
| `src/context/PantryContext.tsx` | React state context for pantry stock levels, units (kg, gm, ltr, piece), and expiry dates |
| `src/data/categories.ts` | Bengali culinary ingredient database classified by market zones (Masala, Sobji, Machh-Mangsho) |

---

## 🚀 What Happened Here (Development Log & Accomplishments)
1. **Bengali Kitchen Pantry Inventory**:
   - Built a specialized inventory system categorized for traditional Bengali homes:
     - **মশলা ও তেল (Spices & Oils)**: Shorsher Tel, Panch Phoron, Radhuni, Holud, Kashmiri Morich
     - **শাক-সবজি (Vegetables)**: Potol, Jhinge, Begun, Aloor, Uchhe
     - **মাছ ও মাংস (Fish & Meat)**: Ilish, Rui, Chingri, Khasir Mangsho
     - **মুদি ও ডাল (Pantry Staples)**: Gobindobhog Chal, Biulir Dal, Musur Dal, Bori
2. **"What Can I Cook Now?" Recipe Matcher**:
   - Analyzes currently stocked ingredients in the user's pantry and matches them against recipes from Person-1's catalog, showing a percentage compatibility match (e.g., "You have 85% of ingredients for Shorshe Ilish!").
3. **Smart Bazaar List & Cost Estimation**:
   - Generates categorized shopping lists with instant INR (₹) price estimation.
   - Built one-click item addition from missing recipe ingredients.
4. **Mobile Layout Fixes**:
   - Cleaned up grid overflows and horizontal scrolling glitches on mobile screens.

---

## 💻 How to Run in Visual Studio / VS Code
1. Open this folder in Visual Studio or VS Code:
   ```bash
   code "C:\Users\acer\OneDrive\Desktop\Person-3-RannaGhor-Pantry-Bazaar"
   ```
2. **Method A (1-Click Run)**:
   - Double-click `run.bat` in this folder. It opens `http://localhost:5173` in your browser and starts the Vite dev server.
3. **Method B (VS Code / Visual Studio Task)**:
   - Press `Ctrl + Shift + B` (or `Terminal` ➔ `Run Build Task...`).
   - Select `npm: dev (Person 3 Pantry & Bazaar)`.
4. **Method C (Debug / Launch F5)**:
   - Press `F5` in VS Code to launch Edge or Chrome directly at `http://localhost:5173`.

---

## 🧪 Demo Test Checklist
- [ ] Open `http://localhost:5173`.
- [ ] Go to the **Pantry** tab. Add `500 gm Mustard Oil` and `1 kg Hilsa Fish`.
- [ ] Check the recipe matcher to see recommended dishes based on stocked ingredients.
- [ ] Go to the **Bazaar List** tab. Add items, check off bought ingredients, and verify total estimated cost updates in ₹ INR.
