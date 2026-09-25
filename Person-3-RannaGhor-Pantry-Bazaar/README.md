# 🍲 RannaGhor (রান্নাঘর) — Person 3 Repository

> **Bengali Cuisine Recipe Manager, Weekly Meal Planner & Digital Kitchen Companion**  
> *Dedicated Project Repository for Team Member 3*

---

## 👤 Team Member Information
- **Team Member**: Person 3
- **Assigned Module**: Smart Home Pantry Manager & Kolkata Bazaar Shopping List
- **বাংলা ভূমিকা**: স্মার্ট ভাঁড়ার ঘর ব্যবস্থাপনা ও কলকাতার বাজারের ফর্দ
- **Core Responsibilities & Highlights**:
  Pantry Inventory Tracking with expiration alerts, "What Can I Cook Right Now?" recipe match scoring, and Automated Kolkata Bazaar Grocery Lists categorized into authentic market sections (সবজি বাজার, মাছ ও মাংস, মশলা ও মুদিখানা, ডেয়ারি ও মিষ্টি) with 1-click WhatsApp copy and Gmail integration.

---

## 📂 Primary Key Files & Architecture for this Module
- `src/components/PantryManagerView.tsx - Real-time kitchen ingredient tracker with shelf-life badges`
- `src/components/ShoppingListView.tsx - Categorized market shopping list with budget calculation`
- `src/components/WhatCanICookView.tsx - Smart pantry-to-recipe matching algorithm with match %`
- `src/types/pantry.ts - Pantry item models, categories, units, and shelf-life tracking`
- `src/types/shopping.ts - Shopping list item aggregation and bazaar categories`
- `src/components/FestivalPlannerView.tsx - Festival banquet and shopping requirements`

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
3. Choose this folder: `C:\Users\acer\OneDrive\Desktop\Person-3-RannaGhor-Pantry-Bazaar`.
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
