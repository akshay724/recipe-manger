# RannaGhor (রান্নাঘর) — Authentic Bengali Recipe Manager & Meal Planner

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://recipe-manager-dusky.vercel.app)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **A digital kitchen companion celebrating the food culture of West Bengal, India.**  
> Discover heirloom recipes, curate balanced 7-day meal routines, prevent kitchen waste with pantry tracking, and generate categorized bazaar shopping lists.

**Live Application**: [https://recipe-manager-dusky.vercel.app](https://recipe-manager-dusky.vercel.app)

---

## Key Features

1. **Authentic Bengali Recipe Engine**
   - 25+ traditional recipes covering Kolkata, East Bengal-inspired, North Bengal, and rural heirloom cuisine.
   - Dynamic bilingual display (Bengali script & English names, step-by-step methods, Granny's secrets *ঠাকুরমার রান্নার টিপস*).
   - Real-time ingredient scaler (2, 4, 6, 8+ servings).

2. **Weekly Meal Planner (সাপ্তাহিক রুটিন)**
   - 7-day multi-course meal schedule respecting traditional Bengali courses: *Teeto* (bitter start) → *Dal & Bhaja* → *Torkari/Jhol* → *Chutney* → *Mishti*.
   - One-click duplication between days and instant synchronization with the shopping list.

3. **Smart Bazaar List (বাজারের স্বয়ংক্রিয় ফর্দ)**
   - Automatically aggregated from the weekly meal plan.
   - Categorized by traditional bazaar sections: *Shobji*, *Maach-Mangsho*, *Moshla*, *Pantry*, and *Mishti*.
   - WhatsApp shareable summary and simulated email dispatch to Google accounts.

4. **Pantry Freshness & Waste Reduction Tracker (ভাঁড়ার ঘর)**
   - Track mustard oils, whole spices, lentils, and fresh produce.
   - Proactive "Use Soon" warnings for ingredients approaching expiration.

5. **"What Can I Cook Right Now?" (কী রাঁধব আজ?)**
   - Instant ingredient matcher calculates match percentages from what is in your fridge.

6. **Google Identity Authentication & Notifications**
   - Official Google Account sign-in (Google Identity Services GIS).
   - Simulated cloud sync and email notifications sent directly to verified Google accounts.

---

## Project Structure & Architecture

```
recipe-manger/
├── src/
│   ├── components/         # Modular UI components (Navbar, Hero, Cards, Modals, Views)
│   ├── context/            # Centralized AppContext for state, auth, and translations
│   ├── data/               # Authentic Bengali recipe database, pantry data, translations
│   ├── services/           # Email notification simulation service
│   ├── types/              # Full TypeScript type definitions
│   └── utils/              # Google Auth integration utilities
├── Person-1-RannaGhor-Recipe-Engine/      # Module: Recipe discovery & details
├── Person-2-RannaGhor-Meal-Planner/       # Module: 7-day meal planner & smart wizard
├── Person-3-RannaGhor-Pantry-Bazaar/      # Module: Pantry tracker & bazaar generator
├── Person-4-RannaGhor-Auth-Notification/  # Module: Google auth & email dispatch
├── index.html              # HTML entry point with Noto Serif Bengali fonts
├── package.json            # Project dependencies & build scripts
├── vite.config.ts          # Vite build configuration
├── tailwind.config.js      # Bengali terracotta & sindoor theme tokens
└── vercel.json             # Vercel SPA routing configuration
```

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/akshay724/recipe-manger.git

# Navigate to project root
cd recipe-manger

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## Authors & Contributors

- **Akshay Dey** ([@akshay724](https://github.com/akshay724)) — Project Lead & Full-Stack Architect
- **RannaGhor Development Team** (Collaborators: Person-1, Person-2, Person-3, Person-4)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
