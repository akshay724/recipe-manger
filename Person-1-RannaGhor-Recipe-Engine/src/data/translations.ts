export type Language = 'en' | 'bn';

export const TRANSLATIONS = {
  en: {
    // Navigation
    tagline: 'Plan. Cook. Enjoy Bengal.',
    home: 'Home',
    recipes: 'Recipes',
    planner: 'Meal Planner',
    myRecipes: 'My Recipes',
    pantry: 'Pantry',
    shopping: 'Shopping List',
    whatCanICook: 'What Can I Cook?',
    festivals: 'Festivals',
    seasonal: 'Seasonal',
    favorites: 'Favorites',
    dashboard: 'Dashboard',
    newRecipe: 'New Recipe',

    // Hero
    heroHeadline1: 'Bengali food,',
    heroHeadline2: 'planned your way.',
    heroSubhead: 'Discover authentic recipes, plan your weekly meals, and keep your Bengali kitchen organized with seasonal wisdom and smart grocery lists.',
    exploreRecipes: 'Explore Recipes',
    planThisWeek: 'Plan This Week',
    quickSearch: 'Quick search',
    grandThaliTitle: 'The Grand Bengali Thali (ঐতিহ্যবাহী পঞ্চব্যঞ্জন)',
    grandThaliSub: 'Click any authentic staple to explore its regional heritage, recipe & tips',

    // Discovery & Filters
    discoveryTitle: 'Bengali Recipe Discovery',
    discoverySub: 'Explore heirloom classics, royal wedding curries, and comforting everyday meals across Bengal',
    searchPlaceholder: 'Search for ilish, posto, chingri, chicken, mishti…',
    filterTitle: 'Refine Recipes by Traditional Categories',
    resetFilters: 'Reset Filters',
    mealType: 'Meal Type',
    region: 'Cuisine / Region',
    dishType: 'Dish Type',
    dietary: 'Dietary',
    cookTime: 'Cooking Time',
    difficulty: 'Difficulty',
    showingDishes: 'Showing {count} authentic dishes',
    allMeals: 'All Meals',
    viewRecipe: 'View Recipe',
    addToPlan: 'Add to Plan',

    // Meal Planner
    plannerTitle: 'Bengali Weekly Meal Planner',
    plannerSub: 'Harmonize traditional multi-course meals, reduce daily stress, and automatically build your weekly bazaar list.',
    generatePlanBtn: 'Generate My Weekly Plan',
    syncShoppingBtn: 'Sync with Shopping List',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    snack: 'Evening Snack',
    dinner: 'Dinner',
    addDish: 'Add Dish',
    noMealsAdded: 'No meals added',
    copyTo: 'Copy to:',
    duplicateBtn: 'Duplicate',

    // Pantry
    pantryTitle: 'Bengali Pantry & Freshness Tracker',
    pantrySub: 'Keep track of traditional spices, mustard oils, dals, and seasonal fresh produce to minimize kitchen waste.',
    useSoonAlert: 'Use Soon ({count} items approaching expiry)',
    findRecipesBtn: 'Find Recipes Using These Ingredients',
    addIngredientBtn: 'Add Ingredient',
    expiresIn: 'Expires: {date}',

    // Shopping List
    shoppingTitle: 'Automatic Bengali Shopping List',
    shoppingSub: 'Aggregated directly from your 7-day meal plan. Categorized by traditional Bengali bazaar sections.',
    bazaarProgress: 'Bazaar Progress',
    itemsPurchased: '{checked} of {total} items purchased',
    shareWhatsapp: 'Share / Copy for WhatsApp',
    addCustomItem: 'Add Custom Item',
    clearCompleted: 'Clear Completed',

    // What Can I Cook
    whatCanICookTitle: '“What Can I Cook Right Now?”',
    whatCanICookSub: 'Tell us what is inside your fridge or pantry, and we will reveal all the authentic Bengali dishes you can whip up today.',
    ingredientsYouHave: 'Ingredients You Have',
    matchedDishes: 'Matched Recipes ({count} dishes found)',
    missingLabel: 'Missing:',
    perfectMatch: 'You have 100% of the core ingredients!',
    cookNowBtn: 'Cook',

    // Cooking Mode
    cookingModeTitle: 'Distraction-Free Cooking Mode',
    stepOf: 'Step {current} of {total}',
    kitchenTimer: 'Kitchen Timer',
    scratchpad: 'Chef\'s Scratchpad',
    previousStep: '← Previous',
    nextStep: 'Next Step →',
    finishCooking: 'Finish Cooking!',
    rannaComplete: 'Ranna Complete! (রান্না শেষ!)',
    rannaCompleteSub: 'You\'ve prepared an authentic Bengali culinary treasure. Serve piping hot with fresh steamed rice and green chillies.',

    // Recipe Details
    adjustServings: 'Adjust Serving Size',
    ingredientsHeader: 'Ingredients',
    methodHeader: 'Step-by-Step Method',
    rannarTip: 'Rannar Tip / ঠাকুরমার রান্নার টিপস',
    startCookingBtn: 'Start Cooking Mode',

    // Auth & Google
    signInWithGoogle: 'Sign in with Google',
    signInBtn: 'Sign In',
    signOutBtn: 'Sign Out',
    kitchenProfile: 'My Kitchen Profile',
    verifiedGoogleAccount: 'Verified Google Account',
    cloudSyncActive: 'Google Cloud Sync Active',
    cloudSyncDesc: 'Your meal plan, custom recipes, and pantry are backed up to your Google account.',
    signInToSync: 'Sign in with your Google account to save recipes, sync weekly plans across devices, and keep your kitchen organized.',
    switchAccount: 'Switch Google Account',
    continueAs: 'Continue as {name}'
  },
  bn: {
    // Navigation
    tagline: 'পরিকল্পনা। রান্না। বাংলার স্বাদ।',
    home: 'মূলপাতা',
    recipes: 'রেসিপি সম্ভার',
    planner: 'সাপ্তাহিক রুটিন',
    myRecipes: 'আমার রান্না',
    pantry: 'ভাঁড়ার ঘর',
    shopping: 'বাজারের ফর্দ',
    whatCanICook: 'কী রাঁধব আজ?',
    festivals: 'উৎসবের ভোজ',
    seasonal: 'ঋতুভেদে রান্না',
    favorites: 'পছন্দের পদ',
    dashboard: 'ড্যাশবোর্ড',
    newRecipe: 'নতুন রেসিপি',

    // Hero
    heroHeadline1: 'বাঙালি রান্না,',
    heroHeadline2: 'আপনার মনের মতো।',
    heroSubhead: 'খুঁজে নিন খাঁটি বাঙালি রেসিপি, সাজিয়ে তুলুন ৭ দিনের আহারের তালিকা এবং ঋতুভিত্তিক বুদ্ধিমত্তা ও স্মার্ট বাজারের ফর্দ দিয়ে রান্নাঘর রাখুন গোছানো।',
    exploreRecipes: 'রেসিপি দেখুন',
    planThisWeek: 'সাপ্তাহিক পরিকল্পনা',
    quickSearch: 'ঝটপট সন্ধান',
    grandThaliTitle: 'ঐতিহ্যবাহী পঞ্চব্যঞ্জন থালি',
    grandThaliSub: 'যেকোনো পদে ক্লিক করে দেখুন তার ইতিহাস, প্রণালী ও গোপন টিপস',

    // Discovery & Filters
    discoveryTitle: 'বাঙালি রেসিপি সম্ভার',
    discoverySub: 'খুঁজে নিন সাবেকিয়ানা, বিয়েবাড়ির কালিয়া-পোলাও এবং ঘরোয়া পাতলা ঝোলের খাঁটি রেসিপি',
    searchPlaceholder: 'ইলিশ, পোস্ত, চিংড়ি, মুরগি, মিষ্টি দিয়ে খুঁজুন…',
    filterTitle: 'ঐতিহ্যবাহী পদ অনুযায়ী বাছাই করুন',
    resetFilters: 'ফিল্টার মুছুন',
    mealType: 'আহারের সময়',
    region: 'অঞ্চল ও ঐতিহ্য',
    dishType: 'পদের ধরন',
    dietary: 'খাদ্যাভ্যাস',
    cookTime: 'রান্নার সময়',
    difficulty: 'কঠিনতা',
    showingDishes: '{count}টি খাঁটি বাঙালি পদ প্রদর্শিত হচ্ছে',
    allMeals: 'সকল খাবার',
    viewRecipe: 'রেসিপি দেখুন',
    addToPlan: 'রুটিনে যোগ করুন',

    // Meal Planner
    plannerTitle: 'সাপ্তাহিক খাবারের রুটিন',
    plannerSub: 'তৈরি করুন সাত দিনের সুষম বাঙালি আহার—তিক্ত শুক্তো থেকে মাছের ঝোল ও পায়েস। সঙ্গে সঙ্গে তৈরি হবে বাজারের ফর্দ।',
    generatePlanBtn: 'স্মার্ট প্ল্যান তৈরি করুন',
    syncShoppingBtn: 'বাজারের ফর্দ আপডেট করুন',
    breakfast: 'জলখাবার',
    lunch: 'দুপুরের খাবার',
    snack: 'বিকেলের চা ও টিফিন',
    dinner: 'রাতের খাবার',
    addDish: 'পদ যোগ করুন',
    noMealsAdded: 'কোনো পদ নেই',
    copyTo: 'অনুলিপি করুন:',
    duplicateBtn: 'কপি করুন',

    // Pantry
    pantryTitle: 'রান্নাঘরের ভাঁড়ার ও সতেজতা ট্র্যাকার',
    pantrySub: 'শর্ষের তেল, পোস্ত, পাঁচফোড়ন ও তাজা আনাজের মেয়াদ ট্র্যাক করে খাবার ও খরচের অপচয় কমান।',
    useSoonAlert: 'দ্রুত ব্যবহার করুন ({count}টি উপাদানের মেয়াদ শেষ হতে চলেছে)',
    findRecipesBtn: 'এই উপাদানগুলো দিয়ে কী রাঁধা যায়?',
    addIngredientBtn: 'নতুন উপাদান যোগ করুন',
    expiresIn: 'মেয়াদ: {date}',

    // Shopping List
    shoppingTitle: 'বাজারের স্বয়ংক্রিয় ফর্দ',
    shoppingSub: 'সাপ্তাহিক খাবারের রুটিন থেকে সরাসরি তৈরি ফর্দ—সবজি, মাছ-মাংস ও মুদিখানার আলাদা ভাগে বিভক্ত।',
    bazaarProgress: 'বাজারের অগ্রগতি',
    itemsPurchased: '{total}টির মধ্যে {checked}টি কেনা সম্পন্ন',
    shareWhatsapp: 'হোয়াটসঅ্যাপে শেয়ার / কপি করুন',
    addCustomItem: 'নতুন জিনিস যোগ করুন',
    clearCompleted: 'কেনা জিনিস মুছুন',

    // What Can I Cook
    whatCanICookTitle: '“হাতে থাকা সামগ্রী দিয়ে কী রাঁধব আজ?”',
    whatCanICookSub: 'ফ্রিজ বা ভাঁড়ারে যা যা আছে নির্বাচন করুন, আমাদের অ্যালগরিদম আপনাকে জানাবে আজ কী কী পদ তৈরি করা সম্ভব।',
    ingredientsYouHave: 'আপনার কাছে যা আছে',
    matchedDishes: 'মিলে যাওয়া রেসিপি ({count}টি পাওয়া গেছে)',
    missingLabel: 'যা কিনতে হবে:',
    perfectMatch: 'আপনার কাছে সব মূল উপাদান মজুত আছে!',
    cookNowBtn: 'রাঁধুন',

    // Cooking Mode
    cookingModeTitle: 'মনোযোগ সহকারে রান্নার মোড',
    stepOf: 'ধাপ {current} / {total}',
    kitchenTimer: 'রান্নার ডিজিটাল টাইমার',
    scratchpad: 'রাঁধুনির নোটবুক',
    previousStep: '← আগের ধাপ',
    nextStep: 'পরের ধাপ →',
    finishCooking: 'রান্না শেষ!',
    rannaComplete: 'রান্না শেষ! আনন্দ উপভোগ করুন!',
    rannaCompleteSub: 'আপনার সুস্বাদু বাঙালি পদ প্রস্তুত। গরম ধোঁয়া ওঠা ভাতের সাথে পরিবারের সবাইকে পরিবেশন করুন!',

    // Recipe Details
    adjustServings: 'পরিমাণ নির্ধারণ করুন (জনসংখ্যা)',
    ingredientsHeader: 'প্রয়োজনীয় উপকরণ',
    methodHeader: 'রান্নার প্রণালী',
    rannarTip: 'ঠাকুরমার রান্নার গোপন টিপস',
    startCookingBtn: 'রান্না শুরু করুন',

    // Auth & Google
    signInWithGoogle: 'Google দিয়ে লগইন করুন',
    signInBtn: 'লগইন করুন',
    signOutBtn: 'লগআউট',
    kitchenProfile: 'আমার হেঁশেল প্রোফাইল',
    verifiedGoogleAccount: 'যাচাইকৃত Google অ্যাকাউন্ট',
    cloudSyncActive: 'Google ক্লাউড সিঙ্ক চালু',
    cloudSyncDesc: 'আপনার সাপ্তাহিক রুটিন, নিজস্ব রেসিপি ও ভাঁড়ারের হিসাব Google অ্যাকাউন্টে সংরক্ষিত হচ্ছে।',
    signInToSync: 'আপনার রেসিপি, সাপ্তাহিক খাবারের তালিকা ও বাজারের ফর্দ সংরক্ষণ করতে Google দিয়ে লগইন করুন।',
    switchAccount: 'অন্য Google অ্যাকাউন্ট ব্যবহার করুন',
    continueAs: '{name} হিসেবে এগিয়ে যান'
  }
};
