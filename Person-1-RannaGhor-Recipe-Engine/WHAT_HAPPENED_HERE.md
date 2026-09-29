# 👨‍🍳 Person 1: RannaGhor Recipe Engine & Cooking Guide

## 📌 Module Overview
- **Team Member Role**: Lead Recipe Engine & Cooking Experience Developer
- **Designated Local Port**: `http://localhost:5171`
- **Main Responsibility**: Core Recipe Catalog, Interactive Step-by-Step Cooking Guide, Bilingual Translation Engine (English ⇄ Bengali), Dynamic Serving Size Scaling, and Nutrition Analytics.

---

## 🛠️ Key Files & Architecture
| File | Description |
| :--- | :--- |
| `src/components/RecipeCard.tsx` | Interactive recipe cards showing prep time, difficulty, spice level, and dietary tag |
| `src/components/RecipeDetailModal.tsx` | Modal view for deep recipe examination and initiating cooking mode |
| `src/components/StepByStepCooking.tsx` | Step-by-step interactive cooking assistant with embedded timer and step progress |
| `src/components/HeroSection.tsx` | Hero banner with search bar, dietary filters, and curated recipes |
| `src/data/recipes.ts` | Bengali culinary catalog (Kosha Mangsho, Shorshe Ilish, Chingri Malai Curry, etc.) |
| `src/context/LanguageContext.tsx` | Real-time bilingual translation switch (English ⇄ Bengali script) |

---

## 🚀 What Happened Here (Development Log & Accomplishments)
1. **Interactive Step-by-Step Cooking Mode**:
   - Designed a guided cooking workflow where users can track step completion, start countdown timers for frying/boiling, and view Bengali culinary instructions.
2. **Full Bilingual Translation Engine (English ⇄ বাংলা)**:
   - Implemented real-time translation across all recipe titles, ingredient names (e.g., Panch Phoron / পাঁচফোড়ন, Mustard Oil / সরিষার তেল), and step-by-step instructions.
   - Solved translation sync issues to ensure seamless language transitions without broken characters or dropped steps.
3. **Dynamic Serving Size Scaler**:
   - Built a dynamic multiplier calculating exact ingredient quantities (grams, teaspoons, tablespoons) when scaling from 2 to 10 persons.
4. **Mobile Responsiveness & Layout Fixes**:
   - Eliminated right-side mobile horizontal gaps and padding overflows on smartphones.
   - Removed legacy header banner pill for a sleek, clean modern UI.

---

## 💻 How to Run in Visual Studio / VS Code
1. Open this folder in Visual Studio or VS Code:
   ```bash
   code "C:\Users\acer\OneDrive\Desktop\Person-1-RannaGhor-Recipe-Engine"
   ```
2. **Method A (1-Click Run)**:
   - Double-click `run.bat` in this folder. It opens `http://localhost:5171` in your browser and starts the Vite dev server.
3. **Method B (VS Code / Visual Studio Task)**:
   - Press `Ctrl + Shift + B` (or `Terminal` ➔ `Run Build Task...`).
   - Select `npm: dev (Person 1 Recipe Engine)`.
4. **Method C (Debug / Launch F5)**:
   - Press `F5` in VS Code to launch Edge or Chrome directly at `http://localhost:5171`.

---

## 🧪 Demo Test Checklist
- [ ] Open `http://localhost:5171`.
- [ ] Click on **Shorshe Ilish (শর্ষে ইলিশ)** or **Kosha Mangsho (কষা মাংস)**.
- [ ] Toggle language button to **বাংলা** and verify that all recipe steps and ingredients translate immediately.
- [ ] Adjust serving size from 4 to 8 and verify ingredient measurements update proportionately.
- [ ] Click **"Start Cooking"** to test the step timer and progress bar.
