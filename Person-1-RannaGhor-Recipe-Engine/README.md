# 🍲 RannaGhor (রান্নাঘর) — Person 1 Repository

> **Bengali Cuisine Recipe Manager, Weekly Meal Planner & Digital Kitchen Companion**  
> *Dedicated Project Repository for Team Member 1*

---

## 👤 Team Member Information
- **Team Member**: Person 1
- **Assigned Module**: Recipe Discovery, Regional Bengali Localization & Interactive Cooking Engine
- **বাংলা ভূমিকা**: রেসিপি সম্ভার, আঞ্চলিক রসুই ও ইন্টারঅ্যাক্টিভ কুকিং ইঞ্জিন
- **Core Responsibilities & Highlights**:
  Core Recipe Architecture, Heirloom Bengali Dishes, Dynamic Serving Scaler, Bilingual (English/Bengali) Step-by-Step Cooking Mode, and Regional Bengali Taxonomy (Ghoti, Bangal, Niramish, Machh, Mangsho, Mishti).

---

## 📂 Primary Key Files & Architecture for this Module
- `src/data/recipes.ts - Authentic heirloom Bengali recipes with ingredients and cooking instructions`
- `src/data/translations.ts - Complete English and Bengali vocabulary and UI localization`
- `src/types/recipe.ts - TypeScript interfaces for dishes, ingredients, dietary flags, and steps`
- `src/components/RecipeDetailModal.tsx - Full recipe modal with serving scaler and Bengali step toggle`
- `src/components/CookingModeModal.tsx - Distraction-free cooking mode with audio chime timer`
- `src/components/RecipeDiscoveryView.tsx - Multi-criteria filter engine (region, season, cooking time)`
- `src/components/RecipeCard.tsx - Cultural dish presentation card with badges`
- `src/components/SeasonalSection.tsx - Bengali seasonal recipe carousel`

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
3. Choose this folder: `C:\Users\acer\OneDrive\Desktop\Person-1-RannaGhor-Recipe-Engine`.
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
