# 📅 Person 2: RannaGhor Meal Planner & Weekly Scheduler

## 📌 Module Overview
- **Team Member Role**: Lead Meal Planner & Weekly Nutrition Architect
- **Designated Local Port**: `http://localhost:5172`
- **Main Responsibility**: 7-Day Bengali Weekly Meal Schedule (Shonibar to Shukrobar / Saturday to Friday), Meal Slot Management (Breakfast, Lunch, Snacks, Dinner), Daily Calorie & Macro Aggregation, and Automated "Send to Bazaar List" synchronization.

---

## 🛠️ Key Files & Architecture
| File | Description |
| :--- | :--- |
| `src/components/MealPlanner.tsx` | Interactive 7-day schedule grid with slot selector and recipe quick-assign |
| `src/components/NutritionSummary.tsx` | Real-time calculation of daily calories, protein, carbs, and fats |
| `src/context/MealPlanContext.tsx` | React state context with localStorage persistence for saved weekly plans |
| `src/types/mealPlan.ts` | Data schema for days, meal slots (Shokal, Dupur, Bikeler Nasta, Raat), and recipe mappings |

---

## 🚀 What Happened Here (Development Log & Accomplishments)
1. **7-Day Authentic Bengali Meal Grid**:
   - Built a comprehensive weekly calendar tailored to Bengali dining habits:
     - **সকালের জলখাবার (Breakfast)**: Luchi-Alur Dom, Radhabhallabhi, Dalia
     - **দুপুরের ভোজ (Lunch)**: Bhaat, Dal, Shukto, Maachher Jhol, Kosha Mangsho
     - **বিকেলের জলখাবার (Snacks)**: Telebhaja, Singara, Tea & Biscuits
     - **রাতের আহার (Dinner)**: Roti, Torka, Chhanar Dalna
2. **One-Click Bazaar Integration**:
   - Connected planned recipes directly with Person-3's Bazaar (Grocery) List. Clicking "Generate Grocery List from Plan" collects and merges all required ingredients automatically.
3. **Smart Nutrition Tracker**:
   - Computes daily macro-nutrient targets with visual progress gauges.
4. **Responsive Mobile Calendar View**:
   - Fixed mobile layout issues so days can be scrolled cleanly on small screens without horizontal viewport breakage.

---

## 💻 How to Run in Visual Studio / VS Code
1. Open this folder in Visual Studio or VS Code:
   ```bash
   code "C:\Users\acer\OneDrive\Desktop\Person-2-RannaGhor-Meal-Planner"
   ```
2. **Method A (1-Click Run)**:
   - Double-click `run.bat` in this folder. It opens `http://localhost:5172` in your browser and starts the Vite dev server.
3. **Method B (VS Code / Visual Studio Task)**:
   - Press `Ctrl + Shift + B` (or `Terminal` ➔ `Run Build Task...`).
   - Select `npm: dev (Person 2 Meal Planner)`.
4. **Method C (Debug / Launch F5)**:
   - Press `F5` in VS Code to launch Edge or Chrome directly at `http://localhost:5172`.

---

## 🧪 Demo Test Checklist
- [ ] Open `http://localhost:5172`.
- [ ] Navigate to the **Meal Planner** section.
- [ ] Assign a recipe (e.g. *Chingri Malai Curry*) to Wednesday Lunch.
- [ ] Check that the daily nutrition counter recalculates calories and protein.
- [ ] Click **"Add Planned Items to Bazaar List"** and confirm items transfer smoothly.
