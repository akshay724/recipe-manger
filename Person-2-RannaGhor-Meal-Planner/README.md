# 🍲 RannaGhor (রান্নাঘর) — Person 2 Repository

> **Bengali Cuisine Recipe Manager, Weekly Meal Planner & Digital Kitchen Companion**  
> *Dedicated Project Repository for Team Member 2*

---

## 👤 Team Member Information
- **Team Member**: Person 2
- **Assigned Module**: Weekly Meal Planner, Household Rhythms & Smart Routine Generator
- **বাংলা ভূমিকা**: সাপ্তাহিক মিল প্ল্যানার, পারিবারিক খাদ্যরীতি ও স্মার্ট রুটিন জেনারেটর
- **Core Responsibilities & Highlights**:
  7-Day Weekly Household Routine (Breakfast, Lunch, Evening Tiffin, Dinner), Traditional Bengali Meal Sequences (Shukto -> Dal -> Tarkari -> Machh/Mangsho -> Chutney -> Mishti), and AI Smart Plan Wizard balancing budget, family size, dietary preferences, and zero-waste ingredient reuse.

---

## 📂 Primary Key Files & Architecture for this Module
- `src/components/MealPlannerView.tsx - 7-Day interactive drag/slot planner with quick action drawer`
- `src/components/SmartPlanWizardModal.tsx - Automated routine generator algorithm`
- `src/types/mealPlan.ts - Meal plan data models, time slots, day routines`
- `src/context/AppContext.tsx - Weekly routine state, meal duplication, slot swapping`
- `src/components/DashboardView.tsx - Daily meal schedule overview and quick dish access`
- `src/components/HeroSection.tsx - Quick entry points to meal planning`

---

## 🚀 How to Run the Project Locally

This is a complete, self-contained, and fully runnable copy of the **RannaGhor** web application.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at **http://localhost:5173** to view the application live.

### 3. Production Build & Verification
```bash
npm run build
```

---

## 📤 How to Push this Repository to your GitHub

### Method A (Recommended — 1-Click Batch Helper):
1. Open this folder on your desktop.
2. Double-click **`push-to-github.bat`**.
3. Create a new empty repository on [GitHub](https://github.com/new) (without README, .gitignore, or license).
4. Paste your GitHub repository URL when prompted, and press Enter!

---

### Method B (Using Git Command Line):
Open your terminal inside this folder and run:
```bash
# 1. Add your personal GitHub repository URL
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# 2. Ensure main branch is selected
git branch -M main

# 3. Push all commits to GitHub
git push -u origin main
```

---

### Method C (Using GitHub Desktop):
1. Open **GitHub Desktop**.
2. Click **File** ➔ **Add Local Repository...** (or press `Ctrl + O`).
3. Choose this folder: `C:\Users\acer\OneDrive\Desktop\Person-2-RannaGhor-Meal-Planner`.
4. Click **Publish repository** to push it directly to your GitHub account!

---

## 🎨 Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (Authentic Bengali palette: Sindoor Red, Terracotta, Mustard, Banana Leaf)
- **Icons**: Lucide React
- **Authentication**: Google Identity Services (GSI SDK) + JWT Token Decoding
- **Notifications**: Automated Security Alert & Gmail Web Integration

---
*Created for Team Collaboration & Independent GitHub Submissions.*
