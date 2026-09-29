import { Recipe } from '../types';

export const BENGALI_RECIPES: Recipe[] = [
  {
    id: 'shorshe-ilish',
    name: 'Shorshe Ilish',
    bengaliName: 'শর্ষe ইলিশ',
    tagline: 'Queen of Bengali fish dishes in pungent yellow & black mustard gravy.',
    story: 'Revered as the crown jewel of monsoon dining in Bengal, Shorshe Ilish captures the culinary soul of the Padma and Ganga rivers. Fresh Hilsa steaks are gently simmered in stone-ground mustard paste emulsified with fiery raw mustard oil, slit green chillies, and nigella seeds.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    baseServings: 4,
    difficulty: 'Medium',
    spiceLevel: 'Spicy',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'East Bengal-inspired',
    dishType: 'Mach',
    dietaryPreferences: ['Non-vegetarian', 'Gluten-free'],
    isTraditional: true,
    featured: true,
    season: 'Monsoon',
    festivalTags: ['Jamai Shashti', 'Poila Boishakh', 'Durga Puja'],
    ingredients: [
      { name: 'Hilsa (Ilish) steaks', bengaliName: 'ইলিশ মাছের টুকরো', quantity: 500, unit: 'g', category: 'Fish & Meat' },
      { name: 'Yellow mustard seeds (Shorshe)', bengaliName: 'হলুদ শর্ষে', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { name: 'Black mustard seeds (Kalo shorshe)', bengaliName: 'কালো শর্ষে', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Kalonji (Kalo jeere)', bengaliName: 'কালো জিরে', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Turmeric powder (Halud)', bengaliName: 'হলুদ গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Green chillies (Kancha lonka)', bengaliName: 'কাঁচা লঙ্কা', quantity: 6, unit: 'pcs', category: 'Vegetables' },
      { name: 'Mustard oil (Kancha shorsher tel)', bengaliName: 'কাঁচা শর্ষের তেল', quantity: 4, unit: 'tbsp', category: 'Pantry' },
      { name: 'Salt (Noon)', bengaliName: 'নুন', quantity: 1.5, unit: 'tsp', category: 'Pantry' },
    ],
    instructions: [
      'Wash the Hilsa steaks very gently and pat dry with kitchen paper. Smear with 1/2 tsp turmeric powder and 1/2 tsp salt.',
      'Soak yellow and black mustard seeds in 4 tbsp warm water with 1 pinch of salt and 2 green chillies for 15 minutes, then blend into a silky smooth paste (the salt prevents the mustard from turning bitter).',
      'Strain the mustard paste through a fine sieve with 1/2 cup warm water to discard harsh seeds skins for a soothing sauce.',
      'Heat 2 tbsp mustard oil in a kadai till it lightly smokes. Temper with kalonji (nigella seeds) and 2 slit green chillies.',
      'Lower flame, pour the strained mustard liquid, remaining turmeric, and salt. Bring to a gentle simmer.',
      'Gently slide in the raw Hilsa pieces into the bubbling gravy. Cook covered on low-medium flame for 6–7 minutes.',
      'Flip the delicate fish steaks with care, add the remaining whole slit green chillies, and cook covered for another 5 minutes.',
      'Drizzle 1 tbsp raw pungent mustard oil on top right before turning off heat. Let rest covered for 5 minutes before serving with hot steamed Gobindobhog rice.'
    ],
    tips: [
      'Always grind mustard with a pinch of salt and green chilli to avoid any lingering bitterness.',
      'Do NOT fry the Hilsa beforehand for authentic Shorshe Ilish; cooking raw fish straight in the mustard preserves its delicate sweetness and natural river oils.'
    ],
    substitutions: [
      'If fresh Hilsa is unavailable, Bhetki (Asian sea bass) or Salmon steaks work delightfully with this mustard base.'
    ],
    nutrition: {
      calories: 380,
      protein: '28g',
      carbs: '4g',
      fat: '26g'
    },
    storageInstructions: 'Best enjoyed fresh. Refrigerate for up to 24 hours in an airtight glass container; reheat gently over a warm water bath.',
    commonIngredients: ['fish', 'hilsa', 'mustard seeds', 'green chilli', 'mustard oil', 'turmeric']
  },
  {
    id: 'aloo-posto',
    name: 'Aloo Posto',
    bengaliName: 'আলু পোস্ত',
    tagline: 'Soft potatoes cooked in nutty aromatic poppy seed paste.',
    story: 'The quintessential comforting heartbeat of every West Bengal afternoon. Originating in the Bankura and Bardhaman districts, Aloo Posto pairs soft potato cubes with stone-ground poppy seed paste (posto bata), finished with raw mustard oil and crunchy green chillies.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    baseServings: 4,
    difficulty: 'Easy',
    spiceLevel: 'Mild',
    mealTypes: ['lunch'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Torkari',
    dietaryPreferences: ['Vegetarian', 'Vegan', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'All-year',
    festivalTags: ['Poila Boishakh', 'Regular'],
    ingredients: [
      { name: 'Potatoes (Aloo), diced into cubes', bengaliName: 'ডুমো করে কাটা আলু', quantity: 500, unit: 'g', category: 'Vegetables' },
      { name: 'Poppy seeds (Posto)', bengaliName: 'পোস্তদানা', quantity: 50, unit: 'g', category: 'Spices' },
      { name: 'Kalonji (Kalo jeere)', bengaliName: 'কালো জিরে', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Green chillies', bengaliName: 'কাঁচা লঙ্কা', quantity: 4, unit: 'pcs', category: 'Vegetables' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Turmeric (optional, traditional is pale)', bengaliName: 'হলুদ গুঁড়ো', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Sugar (optional pinch)', bengaliName: 'চিনি', quantity: 0.25, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      'Soak the poppy seeds in warm water for 20 minutes. Grind with 2 green chillies and minimal water on a shil-nora (grindstone) or high-speed spice grinder until silky and creamy.',
      'Heat 2 tbsp mustard oil in a heavy-bottomed pan. Add kalonji and 2 slit green chillies until fragrant.',
      'Add the cubed potatoes and sauté on medium heat for 4–5 minutes until translucent with light golden edges.',
      'Add salt and optional pinch of turmeric. Pour in 3/4 cup of warm water, cover with lid, and cook until potatoes are tender but intact (about 8–10 minutes).',
      'Lower flame and fold in the poppy seed paste (posto bata). Simmer gently for 3–4 minutes until the posto coats the potatoes luxuriously.',
      'Turn off the heat, drizzle 1 tbsp raw cold-pressed mustard oil over the top, and keep covered for 3 minutes before serving with Biulir Dal and hot steamed rice.'
    ],
    tips: [
      'Traditional Rarh Bengal Aloo Posto uses barely any turmeric; the dish should retain a soothing creamy ivory color.',
      'Never boil posto on high flame for long, as high heat can destroy the delicate floral nutty notes of poppy seed.'
    ],
    substitutions: [
      'You can add tender pointed gourd (Potol) or ridge gourd (Jhinge) to make Jhinge Aloo Posto.'
    ],
    nutrition: {
      calories: 240,
      protein: '6g',
      carbs: '32g',
      fat: '11g'
    },
    storageInstructions: 'Posto can turn sour quickly in humid climates. Store refrigerated up to 1 day; warm gently without overheating.',
    commonIngredients: ['potato', 'poppy seeds', 'posto', 'green chilli', 'mustard oil']
  },
  {
    id: 'chingri-malai-curry',
    name: 'Chingri Malai Curry',
    bengaliName: 'চিংড়ি মালাই কারি',
    tagline: 'Plump river prawns bathed in velvety spiced coconut milk.',
    story: 'A banquet masterpiece with royal heritage. While popular lore suggests "Malai" comes from the creamy coconut milk, culinary historians also trace it back to trade sailors visiting the Malaysian peninsula. Giant tiger or freshwater golda prawns are gently braised in thick pressed coconut cream with fragrant whole spices.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    totalTimeMinutes: 45,
    baseServings: 4,
    difficulty: 'Medium',
    spiceLevel: 'Medium',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Chingri',
    dietaryPreferences: ['Non-vegetarian', 'Gluten-free'],
    isTraditional: true,
    featured: true,
    season: 'All-year',
    festivalTags: ['Durga Puja', 'Poila Boishakh', 'Jamai Shashti', 'Bhai Phonta'],
    ingredients: [
      { name: 'Jumbo Prawns (Golda or Bagda Chingri)', bengaliName: 'গলদা বা বাগদা চিংড়ি', quantity: 500, unit: 'g', category: 'Fish & Meat' },
      { name: 'Thick coconut milk', bengaliName: 'নারকেলের ঘন দুধ', quantity: 300, unit: 'ml', category: 'Pantry' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Ghee', bengaliName: 'ঘি', quantity: 1, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Whole garam masala (cardamom, cinnamon, cloves)', bengaliName: 'ছোট এলাচ, দারুচিনি, লবঙ্গ', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Bay leaf (Tejpata)', bengaliName: 'তেজপাতা', quantity: 2, unit: 'pcs', category: 'Spices' },
      { name: 'Onion paste', bengaliName: 'পেঁয়াজ বাটা', quantity: 0.5, unit: 'cup', category: 'Vegetables' },
      { name: 'Ginger paste', bengaliName: 'আদা বাটা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Kashmiri red chilli powder', bengaliName: 'কাশ্মীরি লঙ্কা গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Bengali Garam Masala powder', bengaliName: 'গরম মশলা গুঁড়ো', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Slit green chillies', bengaliName: 'কাঁচা লঙ্কা', quantity: 4, unit: 'pcs', category: 'Vegetables' },
      { name: 'Sugar', bengaliName: 'চিনি', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      'De-vein prawns while keeping the heads and tails intact for rich flavor. Rub with turmeric and salt.',
      'Flash-fry the prawns in 2 tbsp hot mustard oil for exactly 45 seconds per side until they turn bright pink. Do not overcook or prawns will become rubbery. Remove and set aside.',
      'In the same fragrant oil, add 1 tbsp ghee. Splutter bay leaves, cinnamon, green cardamoms, and cloves.',
      'Add onion paste and sauté on medium heat until golden. Add ginger paste and cook for 2 minutes until raw smell dissipates.',
      'Add Kashmiri red chilli powder, turmeric, salt, and sugar. Sauté until oil separates.',
      'Pour in the thick coconut milk gradually while whisking to prevent splitting. Bring to a gentle boil.',
      'Gently slide the fried prawns and slit green chillies into the gravy. Simmer on low heat for 5–6 minutes so the prawns absorb the rich coconut essence.',
      'Sprinkle Bengali garam masala powder and a tiny drop of ghee. Turn off heat and rest for 5 minutes before serving with fragrant Basanti Pulao.'
    ],
    tips: [
      'Keep the prawn heads on! The fat in the head gives the malai gravy its signature orange hue and ocean depth.',
      'Never boil coconut milk on high flame; keep heat on medium-low to maintain silkiness.'
    ],
    substitutions: [
      'Medium river prawns can be used instead of jumbo king prawns with adjusted cooking time.'
    ],
    nutrition: {
      calories: 420,
      protein: '30g',
      carbs: '9g',
      fat: '29g'
    },
    storageInstructions: 'Refrigerate in a sealed container up to 2 days. Reheat on low flame with a splash of coconut milk.',
    commonIngredients: ['prawns', 'chingri', 'coconut milk', 'onion', 'ginger', 'mustard oil', 'ghee']
  },
  {
    id: 'kosha-mangsho',
    name: 'Kosha Mangsho',
    bengaliName: 'কষা মাংস',
    tagline: 'Slow-braised dark mutton curry infused with mustard oil & spices.',
    story: 'The crowning glory of Sunday afternoon feasts in Bengal and Kolkata cabin culture (celebrated by legendary institutions like Golbari). Tender mutton pieces and golden fried whole potatoes are slow-cooked through relentless "koshano" (braising and caramelization) in an iron kadai until the gravy turns glistening dark and decadent.',
    image: 'https://images.unsplash.com/photo-1545247181-516773ca83e3?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 30,
    cookTimeMinutes: 75,
    totalTimeMinutes: 105,
    baseServings: 6,
    difficulty: 'Advanced',
    spiceLevel: 'Spicy',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Mangsho',
    dietaryPreferences: ['Non-vegetarian'],
    isTraditional: true,
    featured: true,
    season: 'All-year',
    festivalTags: ['Durga Puja', 'Kali Puja', 'Poila Boishakh', 'Sunday Feast'],
    ingredients: [
      { name: 'Mutton (Goat meat, with bone)', bengaliName: 'পাঁঠার মাংস', quantity: 800, unit: 'g', category: 'Fish & Meat' },
      { name: 'Large potatoes, halved', bengaliName: 'বড় আলু', quantity: 3, unit: 'pcs', category: 'Vegetables' },
      { name: 'Thick curd (Tok doi)', bengaliName: 'টক দই', quantity: 0.5, unit: 'cup', category: 'Dairy & Sweets' },
      { name: 'Sliced onions', bengaliName: 'কুচানো পেঁয়াজ', quantity: 3, unit: 'pcs', category: 'Vegetables' },
      { name: 'Ginger-garlic paste', bengaliName: 'আদা-রসুন বাটা', quantity: 3, unit: 'tbsp', category: 'Spices' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Whole spices (cinnamon, cloves, cardamom)', bengaliName: 'গোটা গরম মশলা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Tejpata & Dried red chillies', bengaliName: 'তেজপাতা ও শুকনো লঙ্কা', quantity: 3, unit: 'pcs', category: 'Spices' },
      { name: 'Kashmiri chilli powder', bengaliName: 'কাশ্মীরি লঙ্কা গুঁড়ো', quantity: 1.5, unit: 'tbsp', category: 'Spices' },
      { name: 'Coriander & Cumin powder', bengaliName: 'ধনে ও জিরে গুঁড়ো', quantity: 2, unit: 'tsp', category: 'Spices' },
      { name: 'Sugar for caramelization', bengaliName: 'চিনি', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Ghee & Bengali Garam Masala', bengaliName: 'ঘি ও গরম মশলা', quantity: 1, unit: 'tbsp', category: 'Dairy & Sweets' }
    ],
    instructions: [
      'Marinate mutton with beaten curd, 1 tbsp mustard oil, half the ginger-garlic paste, 1 tsp turmeric, and 1 tsp red chilli powder for at least 2 hours (overnight preferred).',
      'Heat mustard oil in an iron or heavy kadai. Fry potato halves with a pinch of turmeric and salt until golden crust forms. Set aside.',
      'In the same smoking oil, add 1 tsp sugar on low heat and let it melt into dark golden caramel (the secret to Kolkata Kosha color).',
      'Drop bay leaves, dried red chillies, and crushed whole garam masala. Add sliced onions and fry on medium heat until deep brown and caramelized.',
      'Add remaining ginger-garlic paste, cumin powder, coriander powder, Kashmiri chilli powder, and splash of warm water. Bhuno (koshano) until oil glistens on the edges.',
      'Add the marinated mutton. Stir vigorously on high flame for 10 minutes to sear meat.',
      'Lower flame, cover with lid, and slow-cook for 45–50 minutes, stirring every 7 minutes so the spices caramelize without burning.',
      'Add fried potatoes and 1.5 cups of warm water. Simmer until mutton is melt-in-the-mouth tender and gravy is thick and clinging to meat.',
      'Finish with 1 tbsp ghee and fresh ground Bengali garam masala. Serve hot with fluffy Luchi or Basanti Pulao.'
    ],
    tips: [
      'Use an iron kadai (lohar korai) if available. The iron reaction with onions and spices gives Kosha Mangsho its authentic Kolkata cabin dark hue.',
      'Never add cold water while braising mutton; always add steaming warm water to prevent the meat fibers from toughening.'
    ],
    substitutions: [
      'Bone-in country chicken or broiler chicken can be cooked using the same spice paste for a 35-minute Chicken Kosha.'
    ],
    nutrition: {
      calories: 520,
      protein: '38g',
      carbs: '14g',
      fat: '35g'
    },
    storageInstructions: 'Tastes even better the next day as the meat continues to cure in spices. Keeps refrigerated for 3 days.',
    commonIngredients: ['mutton', 'potato', 'onion', 'curd', 'ginger', 'garlic', 'mustard oil']
  },
  {
    id: 'shukto',
    name: 'Shukto',
    bengaliName: 'শুক্তো',
    tagline: 'Traditional bittersweet medley of vegetables with radhuni & bori.',
    story: 'The traditional curtain-raiser to a multi-course Bengali formal meal. Shukto balances delicate bitter tones from bitter gourd or neem with sweet pumpkin, plantain, and sweet potato, tied together with milk, ground ginger, and the indigenous wild celery seed spice called Radhuni.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    totalTimeMinutes: 45,
    baseServings: 6,
    difficulty: 'Advanced',
    spiceLevel: 'Mild',
    mealTypes: ['lunch'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Torkari',
    dietaryPreferences: ['Vegetarian', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'Summer',
    festivalTags: ['Poila Boishakh', 'Durga Puja', 'Shradhya', 'Regular'],
    ingredients: [
      { name: 'Bitter gourd (Korola), sliced', bengaliName: 'করলা', quantity: 1, unit: 'pcs', category: 'Vegetables' },
      { name: 'Raw banana (Kanchkola), cubed', bengaliName: 'কাঁচকলা', quantity: 1, unit: 'pcs', category: 'Vegetables' },
      { name: 'Drumstick (Sojne danta)', bengaliName: 'সজনে ডাঁটা', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Eggplant (Begun), cubed', bengaliName: 'বেগুন', quantity: 1, unit: 'pcs', category: 'Vegetables' },
      { name: 'Sweet potato (Ranga aloo) & potato', bengaliName: 'রাঙা আলু ও সাধারণ আলু', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Biulir Dal Bori (sun-dried lentil dumplings)', bengaliName: 'বিউলির ডালের বড়ি', quantity: 12, unit: 'pcs', category: 'Pantry' },
      { name: 'Radhuni (Wild celery seeds)', bengaliName: 'রাধুনি', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Mustard seed paste & Ginger paste', bengaliName: 'শর্ষে বাটা ও আদা বাটা', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { name: 'Whole milk', bengaliName: 'দুধ', quantity: 0.5, unit: 'cup', category: 'Dairy & Sweets' },
      { name: 'Mustard oil & Ghee', bengaliName: 'শর্ষের তেল ও গাওয়া ঘি', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Panch Phoron (roasted and powdered)', bengaliName: 'ভাজা পাঁচফোড়নের গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Fry the bori in 1 tbsp mustard oil until golden and crunchy. Drain and keep aside.',
      'In the same pan, fry the bitter gourd slices lightly with a pinch of turmeric and salt; remove.',
      'Add another tbsp oil, temper with 1/2 tsp radhuni and a bay leaf until aromatic.',
      'Add the hard vegetables (potatoes, sweet potato, raw banana, drumsticks) and gently sauté for 4 minutes.',
      'Add eggplant and sauté for another 2 minutes. Pour in 1.5 cups hot water and salt. Cover and simmer until vegetables are almost tender.',
      'Add the mustard-ginger paste diluted with milk, the fried bitter gourd, and the fried bori. Simmer gently for 4 minutes so the vegetables mingle with the velvety broth.',
      'Finish with 1 tsp ghee, the remaining ground radhuni paste, and roasted panch phoron powder. Turn off heat immediately and rest 10 minutes.'
    ],
    tips: [
      'Radhuni is the irreplaceable soul of authentic Bengali Shukto. If you cannot find radhuni, celery seeds or ajwain can give a faint approximation.',
      'Shukto should never be thick; it must have a light, soothing, milky broth to begin lunch.'
    ],
    substitutions: [
      'Use plant milk (oat or cashew milk) for a 100% vegan Shukto.'
    ],
    nutrition: {
      calories: 180,
      protein: '5g',
      carbs: '24g',
      fat: '7g'
    },
    storageInstructions: 'Consume within 24 hours. The bori will soften as it sits.',
    commonIngredients: ['bitter gourd', 'drumstick', 'raw banana', 'potato', 'bori', 'milk', 'radhuni']
  },
  {
    id: 'cholar-dal',
    name: 'Cholar Dal Narkel Diye',
    bengaliName: 'ছোলার ডাল নারকেল দিয়ে',
    tagline: 'Festive Bengal gram lentils tempered with ghee, coconut chips & hing.',
    story: 'No Bengali Sunday morning breakfast or festive Ashtami lunch is complete without Cholar Dal paired with puffed golden luchis. Thick chana dal is simmered with ginger, cumin, and hing, then generously crowned with fried crunchy coconut slivers and fragrant Bengali garam masala.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    totalTimeMinutes: 55,
    baseServings: 6,
    difficulty: 'Easy',
    spiceLevel: 'Mild',
    mealTypes: ['breakfast', 'lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Dal',
    dietaryPreferences: ['Vegetarian', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'All-year',
    festivalTags: ['Durga Puja', 'Lakshmi Puja', 'Saraswati Puja', 'Poila Boishakh'],
    ingredients: [
      { name: 'Chana dal (Cholar dal), soaked 1 hr', bengaliName: 'ছোলার ডাল', quantity: 250, unit: 'g', category: 'Pantry' },
      { name: 'Fresh coconut chips (Narkel kuchi)', bengaliName: 'নারকেল কুচি', quantity: 0.25, unit: 'cup', category: 'Vegetables' },
      { name: 'Pure Desi Ghee', bengaliName: 'গাওয়া ঘি', quantity: 2, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Asafoetida (Hing)', bengaliName: 'হিং', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { name: 'Whole spices (cardamom, cinnamon, cloves, bay leaf)', bengaliName: 'গোটা গরম মশলা ও তেজপাতা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Ginger paste', bengaliName: 'আদা বাটা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Cumin powder & Turmeric', bengaliName: 'জিরে গুঁড়ো ও হলুদ গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Slit green chillies', bengaliName: 'কাঁচা লঙ্কা', quantity: 3, unit: 'pcs', category: 'Vegetables' },
      { name: 'Sugar', bengaliName: 'চিনি', quantity: 1.5, unit: 'tsp', category: 'Pantry' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      'Pressure cook the soaked chana dal with 3 cups water, 1/2 tsp turmeric, 1/2 tsp salt, and 1 green chilli for 3 whistles until cooked through but retaining shape (not mushy).',
      'In a kadai, heat 1 tbsp ghee. Fry the fresh coconut chips until golden brown and crisp. Drain and keep aside.',
      'In the remaining ghee, add bay leaves, dried red chilli, green cardamoms, cinnamon stick, cloves, and asafoetida (hing). Let them release their sweet aroma.',
      'Add ginger paste, cumin powder, and 2 tbsp water to prevent scorching. Sauté until ghee separates.',
      'Pour in the cooked dal. Add sugar, remaining salt, and slit green chillies. Simmer for 5–7 minutes until thick and glossy.',
      'Fold in the fried crunchy coconut chips and sprinkle Bengali garam masala powder. Drizzle a final spoon of ghee before turning off heat.'
    ],
    tips: [
      'The dal grains must be soft to bite yet visually distinct, never mashed into a purée.',
      'Bengali Cholar Dal is distinctively sweet-savory; do not skip the sugar.'
    ],
    substitutions: [
      'Can be made with mustard oil and cashew nuts for a different aroma.'
    ],
    nutrition: {
      calories: 220,
      protein: '11g',
      carbs: '28g',
      fat: '7g'
    },
    storageInstructions: 'Refrigerate up to 3 days. The dal thickens naturally upon cooling; thin with a splash of boiling water when reheating.',
    commonIngredients: ['chana dal', 'coconut', 'ghee', 'hing', 'ginger', 'sugar']
  },
  {
    id: 'luchi',
    name: 'Phulko Luchi',
    bengaliName: 'ফুলকো লুচি',
    tagline: 'Puffed, snow-white Bengali deep-fried flatbreads.',
    story: 'No celebration in Bengal begins without the magic of Phulko Luchi. Unlike North Indian pooris made with whole wheat, authentic Bengali luchis are made of refined flour (maida) kneaded with "moyen" (shortening) and warm water, fried briefly in hot oil until they swell like snow-white clouds.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    totalTimeMinutes: 35,
    baseServings: 4,
    difficulty: 'Medium',
    spiceLevel: 'Mild',
    mealTypes: ['breakfast', 'dinner', 'snack'],
    cuisineRegion: 'Kolkata',
    dishType: 'Rice',
    dietaryPreferences: ['Vegetarian', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'All-year',
    festivalTags: ['Durga Puja', 'Kali Puja', 'Poila Boishakh', 'Sunday Feast'],
    ingredients: [
      { name: 'Maida (All-purpose flour)', bengaliName: 'ময়দা', quantity: 300, unit: 'g', category: 'Pantry' },
      { name: 'Ghee or oil for moyan (shortening)', bengaliName: 'ময়ানের জন্য ঘি বা তেল', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 0.5, unit: 'tsp', category: 'Pantry' },
      { name: 'Lukewarm water', bengaliName: 'ঈষদুষ্ণ জল', quantity: 0.75, unit: 'cup', category: 'Pantry' },
      { name: 'White oil for deep frying', bengaliName: 'সাদা তেল ভাজার জন্য', quantity: 2, unit: 'cup', category: 'Pantry' }
    ],
    instructions: [
      'In a wide mixing bowl, mix maida and salt. Rub in 2 tbsp of ghee/oil with fingertips until the flour resembles fine breadcrumbs (this ensures tender luchi).',
      'Gradually add lukewarm water and knead into a smooth, pliable, slightly firm dough. Knead for 6–8 minutes until silky.',
      'Cover with a damp cotton cloth and rest for 20 minutes.',
      'Divide dough into small lemon-sized smooth balls (lechi). Smear lightly with oil (never use dry flour dusting to roll luchis).',
      'Roll each ball into a 4-inch round disc of even thickness.',
      'Heat oil in a deep kadai until moderately hot. Slide a rolled luchi into the oil and press down very gently with a slotted spoon until it balloons up completely.',
      'Flip immediately and fry the other side for 5 seconds. Remove onto kitchen paper. Luchis should remain pale white, not deep brown.',
      'Serve piping hot with Aloor Dom, Cholar Dal, or Kosha Mangsho.'
    ],
    tips: [
      'Never dust flour while rolling luchi; grease the rolling pin and board with a drop of oil instead.',
      'Fry each luchi for no more than 15–20 seconds total to retain its tender, cloud-like texture.'
    ],
    substitutions: [
      'You can use half atta (whole wheat) and half maida for everyday breakfast, though traditional festive luchi is 100% maida.'
    ],
    nutrition: {
      calories: 290,
      protein: '5g',
      carbs: '38g',
      fat: '13g'
    },
    storageInstructions: 'Luchi is meant to be eaten straight out of the hot oil kadai. Deflates upon cooling.',
    commonIngredients: ['maida', 'flour', 'oil', 'ghee', 'salt']
  },
  {
    id: 'aloor-dom',
    name: 'Kolkata Aloor Dom',
    bengaliName: 'কলকাতার আলুর দম',
    tagline: 'Slow-simmered spiced baby potatoes with hing, ginger & peas.',
    story: 'The timeless partner to hot phulko luchis on foggy winter mornings and festive Ashtami evenings. Baby potatoes are pricked, deep-fried until golden, then simmered in a fragrant tomato-ginger-hing gravy loaded with fresh green peas.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    baseServings: 4,
    difficulty: 'Easy',
    spiceLevel: 'Medium',
    mealTypes: ['breakfast', 'lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Torkari',
    dietaryPreferences: ['Vegetarian', 'Vegan', 'Gluten-free'],
    isTraditional: true,
    featured: true,
    season: 'Winter',
    festivalTags: ['Durga Puja', 'Saraswati Puja', 'Breakfast Favorite'],
    ingredients: [
      { name: 'Baby potatoes, boiled and peeled', bengaliName: 'ছোট নতুন আলু', quantity: 500, unit: 'g', category: 'Vegetables' },
      { name: 'Green peas (Koraishuti)', bengaliName: 'কড়াইশুঁটি', quantity: 0.5, unit: 'cup', category: 'Vegetables' },
      { name: 'Tomato paste', bengaliName: 'টমেটো বাটা', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Ginger paste', bengaliName: 'আদা বাটা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Hing (Asafoetida)', bengaliName: 'হিং', quantity: 0.25, unit: 'tsp', category: 'Spices' },
      { name: 'Cumin seeds & Bay leaf', bengaliName: 'গোটা জিরে ও তেজপাতা', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Kashmiri red chilli & Turmeric', bengaliName: 'কাশ্মীরি লঙ্কা ও হলুদ গুঁড়ো', quantity: 1.5, unit: 'tsp', category: 'Spices' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Bengali Garam Masala & Bhaja Moshla', bengaliName: 'ভাজা মশলা', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Prick the boiled baby potatoes with a fork so spices seep inside. Fry in 2 tbsp mustard oil until evenly golden; remove.',
      'In the same oil, add cumin seeds, bay leaf, dried red chilli, and hing.',
      'Add ginger paste and sauté for 1 minute. Add tomato paste, turmeric, Kashmiri red chilli powder, cumin powder, and salt.',
      'Cook masala until oil oozes from the sides. Toss in the green peas and fried potatoes.',
      'Add 1 cup of warm water, cover with lid, and slow cook on low flame for 10 minutes until potatoes are thoroughly infused.',
      'Uncover, sprinkle roasted bhaja moshla powder and fresh coriander leaves before serving.'
    ],
    tips: [
      'Pricking potatoes before frying ensures the thick tangy sauce penetrates all the way to the core.'
    ],
    substitutions: [
      'Regular large potatoes cut into big rounds work just as well if new baby potatoes are out of season.'
    ],
    nutrition: {
      calories: 210,
      protein: '4g',
      carbs: '30g',
      fat: '9g'
    },
    storageInstructions: 'Refrigerate up to 2 days; tastes even richer the next day.',
    commonIngredients: ['potato', 'green peas', 'tomato', 'ginger', 'hing', 'mustard oil']
  },
  {
    id: 'basanti-pulao',
    name: 'Basanti Pulao',
    bengaliName: 'বাসন্তী পোলাও',
    tagline: 'Fragrant sweet golden Gobindobhog rice scented with saffron, ghee & cashews.',
    story: 'The quintessential celebratory rice dish of West Bengal. Known for its radiant yellow spring hue (basanti) and sweet fragrant bouquet, short-grain Gobindobhog rice is marinated in raw desi ghee, turmeric or saffron, and crushed ginger, then cooked with cashews, golden raisins, and sweet whole spices.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    totalTimeMinutes: 40,
    baseServings: 4,
    difficulty: 'Medium',
    spiceLevel: 'Mild',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Rice',
    dietaryPreferences: ['Vegetarian', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'Autumn',
    festivalTags: ['Durga Puja', 'Kali Puja', 'Poila Boishakh', 'Bhai Phonta'],
    ingredients: [
      { name: 'Gobindobhog rice (aromatic short grain)', bengaliName: 'গোবিন্দভোগ চাল', quantity: 300, unit: 'g', category: 'Pantry' },
      { name: 'Pure Desi Ghee', bengaliName: 'গাওয়া ঘি', quantity: 3, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Saffron strands soaked in 2 tbsp warm milk', bengaliName: 'কেশর দুধ', quantity: 1, unit: 'pinch', category: 'Dairy & Sweets' },
      { name: 'Turmeric powder (for golden hue)', bengaliName: 'হলুদ গুঁড়ো', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Ginger paste', bengaliName: 'আদা বাটা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Cashew nuts & Golden raisins (Kaju-Kishmish)', bengaliName: 'কাজু ও কিশমিশ', quantity: 0.25, unit: 'cup', category: 'Pantry' },
      { name: 'Whole spices (cardamom, cinnamon, cloves, bay leaves)', bengaliName: 'গোটা গরম মশলা ও তেজপাতা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Sugar', bengaliName: 'চিনি', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Warm water (exactly double volume of rice)', bengaliName: 'গরম জল', quantity: 2.5, unit: 'cup', category: 'Pantry' }
    ],
    instructions: [
      'Gently wash Gobindobhog rice twice and spread onto a wide cotton cloth or tray to dry completely for 30 minutes.',
      'In a bowl, toss the dry rice with 2 tbsp ghee, ginger paste, turmeric powder, and saffron milk. Let it marinate for 20 minutes.',
      'Heat 1 tbsp ghee in a heavy-bottomed pot. Fry cashews and raisins until plump and golden; set aside.',
      'In the same pot, add bay leaves, green cardamoms, cinnamon, and cloves. Let them splutter.',
      'Add the marinated rice and roast gently on low flame for 3–4 minutes until grains turn translucent and crackle lightly.',
      'Pour in warm water (exact 1:2 ratio of rice to water) and salt. Bring to a rapid rolling boil.',
      'Cover tightly with a heavy lid, lower the flame to the lowest setting, and cook undisturbed for 10 minutes.',
      'Gently stir in sugar and the fried cashews and raisins with a fork so grains do not break. Cover and cook on dum for another 5 minutes.',
      'Turn off heat and let rest covered for 10 minutes. The grains will fluff up into fragrant golden pearls. Serve with Kosha Mangsho or Chanar Dalna.'
    ],
    tips: [
      'Gobindobhog rice must be dry before marinating with ghee, otherwise grains will break while roasting.',
      'Always add sugar only after rice is 80% cooked; adding sugar too early prevents the rice from expanding properly.'
    ],
    substitutions: [
      'Kalijira rice or aged Basmati can be substituted if Gobindobhog is unavailable.'
    ],
    nutrition: {
      calories: 360,
      protein: '6g',
      carbs: '62g',
      fat: '11g'
    },
    storageInstructions: 'Best eaten fresh. Leftovers can be refrigerated for 2 days; steam with a teaspoon of ghee to refresh.',
    commonIngredients: ['gobindobhog rice', 'rice', 'ghee', 'cashews', 'raisins', 'saffron', 'sugar']
  },
  {
    id: 'doi-maach',
    name: 'Doi Maach',
    bengaliName: 'দই মাছ',
    tagline: 'Fish steaks braised in spiced velvety yogurt gravy.',
    story: 'A timeless classic of classic Bengali celebrations and Sunday lunches. Fresh Rohu or Katla carp steaks are gently simmered in a luscious yogurt gravy spiced with whole garam masala, ginger, and green chillies, balancing sweet, savory, and mild tangy notes.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    baseServings: 4,
    difficulty: 'Medium',
    spiceLevel: 'Medium',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Mach',
    dietaryPreferences: ['Non-vegetarian', 'Gluten-free'],
    isTraditional: true,
    featured: true,
    season: 'Summer',
    festivalTags: ['Poila Boishakh', 'Bhai Phonta', 'Sunday Feast'],
    ingredients: [
      { name: 'Rohu or Katla fish steaks', bengaliName: 'রুই বা কাতলা মাছের পেটি', quantity: 500, unit: 'g', category: 'Fish & Meat' },
      { name: 'Sour curd (Tok doi), whisked smooth', bengaliName: 'টক দই', quantity: 1, unit: 'cup', category: 'Dairy & Sweets' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 4, unit: 'tbsp', category: 'Pantry' },
      { name: 'Onion paste', bengaliName: 'পেঁয়াজ বাটা', quantity: 0.5, unit: 'cup', category: 'Vegetables' },
      { name: 'Ginger-garlic paste', bengaliName: 'আদা-রসুন বাটা', quantity: 1.5, unit: 'tbsp', category: 'Spices' },
      { name: 'Whole spices (cardamom, cinnamon, cloves, bay leaf)', bengaliName: 'গোটা গরম মশলা ও তেজপাতা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Kashmiri red chilli & Turmeric', bengaliName: 'কাশ্মীরি লঙ্কা ও হলুদ', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Green chillies, slit', bengaliName: 'কাঁচা লঙ্কা', quantity: 4, unit: 'pcs', category: 'Vegetables' },
      { name: 'Sugar', bengaliName: 'চিনি', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      'Marinate fish steaks with 1/2 tsp turmeric and 1/2 tsp salt for 10 minutes.',
      'Whisk curd with 1 tsp flour (or cornstarch) and 1/2 cup water so it does not curdle in hot gravy.',
      'Heat mustard oil in a kadai and lightly shallow-fry the fish pieces for 2 minutes per side until pale golden. Drain and set aside.',
      'In the remaining oil, temper with bay leaves, green cardamom, cinnamon, and cloves.',
      'Add onion paste and fry on medium heat until pale golden. Add ginger-garlic paste and sauté for 2 minutes.',
      'Lower flame completely. Add turmeric, Kashmiri chilli powder, salt, and sugar.',
      'Slowly pour in whisked yogurt while stirring continuously in one direction to keep gravy silky.',
      'Slide the fried fish pieces and slit green chillies into the gravy. Simmer covered for 7–8 minutes until fish is cooked through and gravy is glossy.',
      'Drizzle a touch of ghee and serve with piping hot steamed rice.'
    ],
    tips: [
      'Always bring yogurt to room temperature and whisk thoroughly before adding to the pan.',
      'Keep the stove on very low heat when adding yogurt to prevent curdling.'
    ],
    substitutions: [
      'Bhetki (barramundi) fillets make a sublime boneless variation for kids and guests.'
    ],
    nutrition: {
      calories: 340,
      protein: '27g',
      carbs: '8g',
      fat: '22g'
    },
    storageInstructions: 'Refrigerate in a covered container up to 2 days; warm gently.',
    commonIngredients: ['rohu', 'fish', 'curd', 'yogurt', 'onion', 'ginger', 'mustard oil']
  },
  {
    id: 'bengali-chicken-curry',
    name: 'Bengali Chicken Curry (Mangsher Jhol)',
    bengaliName: 'আলু দিয়ে লাল মুরগির ঝোল',
    tagline: 'Thin, spicy, aromatic Sunday red chicken curry with halved golden potatoes.',
    story: 'The emotion of every Bengali home on a lazy Sunday afternoon. Large chunks of chicken and fried potato halves simmer together in a fiery, fragrant red broth (laal jhol) that saturates hot steamed rice like nothing else.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    totalTimeMinutes: 55,
    baseServings: 5,
    difficulty: 'Easy',
    spiceLevel: 'Spicy',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Mangsho',
    dietaryPreferences: ['Non-vegetarian', 'Gluten-free'],
    isTraditional: true,
    featured: true,
    season: 'All-year',
    festivalTags: ['Sunday Special', 'Family Favorite'],
    ingredients: [
      { name: 'Chicken (curry cut, bone-in)', bengaliName: 'মুরগির মাংস', quantity: 750, unit: 'g', category: 'Fish & Meat' },
      { name: 'Large potatoes, halved', bengaliName: 'বড় আলু', quantity: 3, unit: 'pcs', category: 'Vegetables' },
      { name: 'Onions, finely sliced', bengaliName: 'কুচানো পেঁয়াজ', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Ginger-garlic paste', bengaliName: 'আদা-রসুন বাটা', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { name: 'Ripe tomatoes, chopped', bengaliName: 'টমেটো', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 4, unit: 'tbsp', category: 'Pantry' },
      { name: 'Cumin powder & Coriander powder', bengaliName: 'জিরে ও ধনে গুঁড়ো', quantity: 1.5, unit: 'tsp', category: 'Spices' },
      { name: 'Kashmiri red chilli powder', bengaliName: 'কাশ্মীরি লঙ্কা গুঁড়ো', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Turmeric powder', bengaliName: 'হলুদ গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Whole spices & Bay leaves', bengaliName: 'গোটা গরম মশলা ও তেজপাতা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Fresh green chillies', bengaliName: 'কাঁচা লঙ্কা', quantity: 4, unit: 'pcs', category: 'Vegetables' },
      { name: 'Salt & Sugar', bengaliName: 'নুন ও চিনি', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      'Marinate chicken with 1 tbsp mustard oil, half the ginger-garlic paste, 1/2 tsp turmeric, and 1/2 tsp red chilli powder for 30 minutes.',
      'Heat mustard oil in a kadai. Fry potato halves with turmeric and salt until deep golden; remove.',
      'In the same oil, add 1/2 tsp sugar to caramelize lightly for rich color. Add bay leaves, dried red chilli, and whole garam masala.',
      'Add sliced onions and fry until deeply golden. Add ginger-garlic paste and chopped tomatoes; sauté until oil separates.',
      'Add cumin, coriander, turmeric, red chilli powder, and a splash of warm water. Bhuno (sauté) the masala for 4 minutes.',
      'Add marinated chicken. Braise on medium-high heat for 8–10 minutes until chicken sears and changes color.',
      'Add fried potatoes and 2.5 cups boiling water for that signature runny Sunday "jhol".',
      'Cover with lid and simmer for 15–18 minutes until chicken is succulent and potatoes are fork-tender.',
      'Slit green chillies into the curry, sprinkle Bengali garam masala, turn off heat, and serve with steaming Bhaat and lime wedges.'
    ],
    tips: [
      'The big halved potato is sacred in Bengali mangsher jhol; it absorbs all the rich chicken juices.',
      'Always add hot boiling water to create the jhol so the chicken stays tender.'
    ],
    substitutions: [
      'Broiler or country chicken (Desi murgi) can both be used; add 10 more minutes simmer for country chicken.'
    ],
    nutrition: {
      calories: 390,
      protein: '32g',
      carbs: '16g',
      fat: '23g'
    },
    storageInstructions: 'Refrigerate up to 3 days; reheated Sunday chicken curry tastes divine on Monday.',
    commonIngredients: ['chicken', 'potato', 'onion', 'tomato', 'ginger', 'garlic', 'mustard oil']
  },
  {
    id: 'dhokar-dalna',
    name: 'Dhokar Dalna',
    bengaliName: 'ধোঁকার ডালনা',
    tagline: 'Spiced lentil cakes pan-fried and braised in rich satvik tomato-ginger gravy.',
    story: 'A vegetarian triumph born out of widow-kitchen culinary innovation in historical Bengal. Soaked chana dal is stone-ground with ginger, green chillies, and hing, steamed into a diamond-shaped cake (dhoka), shallow-fried, and simmered in an onion-garlic-free (Niramish) tomato gravy.',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 30,
    cookTimeMinutes: 30,
    totalTimeMinutes: 60,
    baseServings: 4,
    difficulty: 'Advanced',
    spiceLevel: 'Medium',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Vegetarian',
    dietaryPreferences: ['Vegetarian', 'Gluten-free'],
    isTraditional: true,
    featured: true,
    season: 'All-year',
    festivalTags: ['Lakshmi Puja', 'Saraswati Puja', 'Durga Puja Ashtami'],
    ingredients: [
      { name: 'Chana dal (soaked 4 hrs)', bengaliName: 'ছোলার ডাল', quantity: 250, unit: 'g', category: 'Pantry' },
      { name: 'Ginger paste', bengaliName: 'আদা বাটা', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { name: 'Asafoetida (Hing)', bengaliName: 'হিং', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Green chillies', bengaliName: 'কাঁচা লঙ্কা', quantity: 4, unit: 'pcs', category: 'Vegetables' },
      { name: 'Potatoes, cubed', bengaliName: 'ডুমো করে কাটা আলু', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Tomato paste', bengaliName: 'টমেটো বাটা', quantity: 0.5, unit: 'cup', category: 'Vegetables' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 4, unit: 'tbsp', category: 'Pantry' },
      { name: 'Ghee & Bengali Garam Masala', bengaliName: 'ঘি ও গরম মশলা', quantity: 1, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Cumin powder & Turmeric', bengaliName: 'জিরে ও হলুদ গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Kashmiri red chilli powder', bengaliName: 'কাশ্মীরি লঙ্কা গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Grind the soaked chana dal with 2 green chillies, 1/2 tsp salt, and minimal water into a coarse, thick paste.',
      'Heat 1 tbsp oil in a non-stick pan. Add hing and 1/2 tsp ginger paste. Add dal paste and sauté continuously for 5–6 minutes until dough leaves sides of pan.',
      'Grease a flat tray with oil. Transfer warm dal dough and press flat to 1-inch thickness. Let cool for 15 minutes, then cut into diamond-shaped cakes.',
      'Shallow-fry the lentil diamonds in mustard oil until crispy golden on both sides. Set aside.',
      'In the same pan, fry potato cubes until golden. Remove.',
      'Temper hot oil with bay leaf, whole garam masala, and cumin seeds. Add tomato paste, remaining ginger paste, cumin powder, turmeric, Kashmiri chilli, and salt.',
      'Sauté until oil leaves masala. Add fried potatoes and 2 cups warm water; simmer until potatoes are tender.',
      'Carefully drop the fried dhoka pieces into the gravy and simmer for 3 minutes (do not over-simmer or they will disintegrate).',
      'Finish with 1 tsp ghee and garam masala. Serve with hot steamed rice.'
    ],
    tips: [
      'Dhoka cakes absorb gravy rapidly upon cooling; keep extra warm water ready if making ahead.'
    ],
    substitutions: [
      'A mix of chana dal and matal dal (yellow peas) gives extra crunch.'
    ],
    nutrition: {
      calories: 310,
      protein: '14g',
      carbs: '38g',
      fat: '12g'
    },
    storageInstructions: 'Store fried dhoka pieces separately from gravy; drop them in just before heating to serve.',
    commonIngredients: ['chana dal', 'potato', 'tomato', 'ginger', 'hing', 'mustard oil']
  },
  {
    id: 'begun-bhaja',
    name: 'Begun Bhaja',
    bengaliName: 'বেগুন ভাজা',
    tagline: 'Crispy pan-fried spiced eggplant rounds with mustard oil.',
    story: 'The quickest and most beloved Bengali side dish. Thick discs of glossy purple brinjal are coated in turmeric, red chilli, a touch of rice flour for crispiness, and a pinch of sugar, then pan-fried in bubbling mustard oil.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    totalTimeMinutes: 20,
    baseServings: 4,
    difficulty: 'Easy',
    spiceLevel: 'Mild',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Bhaja',
    dietaryPreferences: ['Vegetarian', 'Vegan', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'Monsoon',
    festivalTags: ['Khichuri Partner', 'Daily Meal'],
    ingredients: [
      { name: 'Large round Eggplant (Begun)', bengaliName: 'গোল বেগুন', quantity: 1, unit: 'pcs', category: 'Vegetables' },
      { name: 'Turmeric powder', bengaliName: 'হলুদ গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Kashmiri red chilli powder', bengaliName: 'কাশ্মীরি লঙ্কা গুঁড়ো', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Rice flour or Besan (for crunch)', bengaliName: 'চালের গুঁড়ো', quantity: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Mustard oil for pan frying', bengaliName: 'শর্ষের তেল', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Sugar', bengaliName: 'চিনি', quantity: 0.5, unit: 'tsp', category: 'Pantry' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      'Cut the eggplant into thick 3/4-inch circular discs. Score both cut surfaces lightly in diamond crisscross pattern.',
      'Rub both sides with turmeric, chilli powder, salt, sugar, and rice flour. Let sit for 5 minutes (the eggplant will release moisture and bind the spices).',
      'Heat 2 tbsp mustard oil in a cast iron skillet or flat pan until gently shimmering.',
      'Place the seasoned eggplant discs in the pan on medium-low flame. Cover with a lid for 3 minutes so the interior steams to creamy tenderness.',
      'Uncover, flip to the other side, add another drizzle of oil, and fry open for 3–4 minutes until a crisp, caramelized crust forms.',
      'Serve sizzling hot with Khichuri, Bhaat-Dal, or Luchi.'
    ],
    tips: [
      'Scoring the eggplant surface allows seasoning to seep into the core without over-absorbing oil.'
    ],
    substitutions: [
      'Potol (pointed gourd) or Aloo sliced thin can be fried using the exact same spice rub.'
    ],
    nutrition: {
      calories: 140,
      protein: '2g',
      carbs: '12g',
      fat: '10g'
    },
    storageInstructions: 'Must be eaten immediately; loses its crisp exterior if left to sit.',
    commonIngredients: ['eggplant', 'brinjal', 'begun', 'mustard oil', 'turmeric']
  },
  {
    id: 'khichuri',
    name: 'Bhuni Khichuri',
    bengaliName: 'ভুনি খিচুড়ি',
    tagline: 'Monsoon comfort dish of roasted moong dal, Gobindobhog rice & winter vegetables.',
    story: 'Synonymous with rainy afternoon downpours and Durga Puja Ashtami Bhog. Sona Moong dal is dry-roasted until deeply aromatic and nutty, cooked with pearl Gobindobhog rice, fried cauliflower florets, potatoes, and peas in a fragrant ghee-ginger tempering.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    totalTimeMinutes: 50,
    baseServings: 6,
    difficulty: 'Medium',
    spiceLevel: 'Medium',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Rice',
    dietaryPreferences: ['Vegetarian', 'Gluten-free'],
    isTraditional: true,
    featured: true,
    season: 'Monsoon',
    festivalTags: ['Durga Puja Ashtami Bhog', 'Monsoon Favorite', 'Saraswati Puja'],
    ingredients: [
      { name: 'Gobindobhog rice', bengaliName: 'গোবিন্দভোগ চাল', quantity: 200, unit: 'g', category: 'Pantry' },
      { name: 'Sona Moong dal', bengaliName: 'সোনা মুগ ডাল', quantity: 200, unit: 'g', category: 'Pantry' },
      { name: 'Cauliflower florets (Phulkopi)', bengaliName: 'ফুলকপি', quantity: 1, unit: 'cup', category: 'Vegetables' },
      { name: 'Potato cubes & Green peas', bengaliName: 'আলু ও কড়াইশুঁটি', quantity: 1, unit: 'cup', category: 'Vegetables' },
      { name: 'Desi Ghee', bengaliName: 'গাওয়া ঘি', quantity: 3, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Ginger paste & Slit green chillies', bengaliName: 'আদা বাটা ও কাঁচা লঙ্কা', quantity: 2, unit: 'tbsp', category: 'Spices' },
      { name: 'Whole spices, bay leaf & cumin seeds', bengaliName: 'গোটা গরম মশলা, তেজপাতা ও গোটা জিরে', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Cumin powder & Kashmiri chilli powder', bengaliName: 'জিরে ও কাশ্মীরি লঙ্কা গুঁড়ো', quantity: 1.5, unit: 'tsp', category: 'Spices' },
      { name: 'Sugar & Salt', bengaliName: 'চিনি ও নুন', quantity: 1, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      'In a dry kadai, roast moong dal on low flame until reddish-golden and fragrant. Wash rice and roasted dal together; drain.',
      'Shallow-fry cauliflower florets and potato cubes in mustard oil until golden; set aside.',
      'In a heavy pot, heat 1 tbsp ghee and 1 tbsp mustard oil. Temper with cumin seeds, bay leaves, dry red chillies, and whole garam masala.',
      'Add ginger paste, cumin powder, turmeric, Kashmiri chilli, and 2 tbsp water; sauté until fragrant.',
      'Add washed rice and dal. Roast with masala for 3 minutes.',
      'Pour in 5 cups boiling hot water and salt. Cover and cook on medium flame for 12 minutes.',
      'Add fried vegetables, green peas, green chillies, and sugar. Stir gently, cover, and simmer on lowest flame for 8 minutes until rice and dal are soft and tender.',
      'Finish with 2 tbsp ghee and a sprinkle of garam masala. Serve hot with Begun Bhaja, Labra, and tomato chutney.'
    ],
    tips: [
      'Roasting moong dal until fragrant and lightly browned is non-negotiable for authentic Bengali khichuri flavor.'
    ],
    substitutions: [
      'Masoor dal can be used for everyday rainy day khichuri.'
    ],
    nutrition: {
      calories: 340,
      protein: '12g',
      carbs: '54g',
      fat: '9g'
    },
    storageInstructions: 'Refrigerate up to 2 days; add a splash of boiling water when reheating as khichuri thickens rapidly.',
    commonIngredients: ['gobindobhog rice', 'moong dal', 'cauliflower', 'potato', 'ghee', 'ginger']
  },
  {
    id: 'mishti-doi',
    name: 'Kolkata Mishti Doi',
    bengaliName: 'কলকাতার মিষ্টি দই',
    tagline: 'Caramelized sweet fermented clay-pot yogurt.',
    story: 'The undisputed pride of Bengali confectionery. Fresh whole cow milk is slowly simmered down to half its volume, infused with deeply caramelized cane sugar or jaggery, then cultured and fermented overnight in unglazed porous earthen pots (bhnad) which absorb excess moisture to give a thick, velvety custard texture.',
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    totalTimeMinutes: 60,
    baseServings: 6,
    difficulty: 'Medium',
    spiceLevel: 'Mild',
    mealTypes: ['dessert', 'snack'],
    cuisineRegion: 'Kolkata',
    dishType: 'Mishti',
    dietaryPreferences: ['Vegetarian', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'Summer',
    festivalTags: ['Poila Boishakh', 'Durga Puja', 'Jamai Shashti', 'Every Celebration'],
    ingredients: [
      { name: 'Full cream milk', bengaliName: 'ফুল ক্রিম দুধ', quantity: 1, unit: 'L', category: 'Dairy & Sweets' },
      { name: 'Sugar for sweetening milk', bengaliName: 'চিনি', quantity: 0.5, unit: 'cup', category: 'Pantry' },
      { name: 'Sugar for dark caramel', bengaliName: 'ক্যারামেলের জন্য চিনি', quantity: 0.25, unit: 'cup', category: 'Pantry' },
      { name: 'Thick yogurt (starter culture / doi kaat)', bengaliName: 'টক দই (সাজো)', quantity: 2, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Cardamom powder (optional)', bengaliName: 'এলাচ গুঁড়ো', quantity: 0.25, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Hang 2 tbsp of plain yogurt in a muslin cloth for 30 minutes to drain excess whey water.',
      'In a wide heavy pot, boil 1 liter of milk and simmer on medium flame, stirring frequently, until reduced to roughly 650 ml.',
      'Add 1/2 cup sugar to the milk and dissolve.',
      'In another small saucepan, take 1/4 cup sugar with 1 tbsp water. Heat on medium without stirring until it melts into a rich amber caramel.',
      'Pour 1/2 cup of hot milk into the caramel pan carefully (it will bubble vigorously) and stir until smooth, then whisk this caramel liquid into the main pot of reduced milk to yield a beautiful terracotta pink-brown hue.',
      'Let the milk cool until lukewarm (test with clean finger: warm enough to hold comfortably for 10 seconds).',
      'Whisk the hung yogurt culture until smooth, then whisk into the lukewarm caramelized milk.',
      'Pour into traditional unglazed terracotta or ceramic bowls. Cover with foil or cloth and place in a warm, draft-free spot (like an unlit oven) for 8–10 hours until set firm.',
      'Chill in the refrigerator for at least 3 hours before slicing and serving.'
    ],
    tips: [
      'Using an earthen clay pot (matir bhnad) creates the thickest mishti doi because the porous clay absorbs residual water.',
      'Ensure the milk is strictly lukewarm when adding culture; too hot kills the probiotics, too cold stops fermentation.'
    ],
    substitutions: [
      'In winter, substitute the caramelized white sugar with liquid Nolen Gur (date palm jaggery) for sensational Nolen Gurer Mishti Doi.'
    ],
    nutrition: {
      calories: 220,
      protein: '7g',
      carbs: '28g',
      fat: '9g'
    },
    storageInstructions: 'Refrigerate up to 5 days. Keep covered to prevent drying.',
    commonIngredients: ['milk', 'sugar', 'curd', 'yogurt']
  },
  {
    id: 'nolen-gur-payesh',
    name: 'Nolen Gurer Payesh',
    bengaliName: 'নলেন গুড়ের পায়েস',
    tagline: 'Silky winter rice pudding sweetened with seasonal date-palm jaggery.',
    story: 'The poetic essence of winter in Bengal. When date palm sap is freshly harvested and tapped in rural villages, it is reduced into liquid "Jhola Gur" and fudge-like "Patali Gur". Tiny grains of aromatic Gobindobhog rice are slow-cooked in rich milk and laced with this smoky, caramel-scented jaggery.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 45,
    totalTimeMinutes: 55,
    baseServings: 6,
    difficulty: 'Easy',
    spiceLevel: 'Mild',
    mealTypes: ['dessert'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Mishti',
    dietaryPreferences: ['Vegetarian', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'Winter',
    festivalTags: ['Poush Sankranti', 'Winter Delicacy', 'Birthday / Shubho Jonmodin'],
    ingredients: [
      { name: 'Gobindobhog rice', bengaliName: 'গোবিন্দভোগ চাল', quantity: 75, unit: 'g', category: 'Pantry' },
      { name: 'Full cream milk', bengaliName: 'ফুল ক্রিম দুধ', quantity: 1.5, unit: 'L', category: 'Dairy & Sweets' },
      { name: 'Nolen Gur / Patali Gur (Date palm jaggery)', bengaliName: 'নলেন গুড় বা পাটালি', quantity: 200, unit: 'g', category: 'Pantry' },
      { name: 'Pure Desi Ghee', bengaliName: 'গাওয়া ঘি', quantity: 1, unit: 'tsp', category: 'Dairy & Sweets' },
      { name: 'Bay leaf (Tejpata)', bengaliName: 'তেজপাতা', quantity: 1, unit: 'pcs', category: 'Spices' },
      { name: 'Cashews & Raisins', bengaliName: 'কাজু ও কিশমিশ', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Green cardamom pods', bengaliName: 'ছোট এলাচ', quantity: 2, unit: 'pcs', category: 'Spices' }
    ],
    instructions: [
      'Wash Gobindobhog rice and smear with 1 tsp ghee; rest for 15 minutes.',
      'Boil full cream milk with 1 bay leaf and lightly crushed green cardamoms in a heavy-bottomed pot. Simmer for 15 minutes to reduce slightly.',
      'Add the ghee-smeared rice to the boiling milk. Stir constantly so rice does not stick to the bottom.',
      'Cook on medium-low flame for 25 minutes until the rice grains are thoroughly cooked and soft enough to mash between fingers.',
      'Turn off the heat or reduce to absolute lowest setting. Allow milk to cool slightly for 3 minutes (critical: adding gur to boiling milk can curdle it).',
      'Grate or dissolve the date palm jaggery (Nolen Gur) into a smooth syrup and slowly fold into the warm rice milk until it dissolves into a luxurious golden tan.',
      'Add cashews and raisins. Turn flame back on ultra-low for 2 minutes, stirring gently.',
      'Serve warm or chilled in earthenware bowls.'
    ],
    tips: [
      'Always cool the milk slightly before stirring in Nolen Gur to prevent curdling.',
      'Gobindobhog rice is essential; its natural floral aroma combined with Nolen Gur is peerless.'
    ],
    substitutions: [
      'In summer, use cane jaggery or palm sugar, or make traditional Chaler Payesh with sugar and saffron.'
    ],
    nutrition: {
      calories: 280,
      protein: '8g',
      carbs: '46g',
      fat: '7g'
    },
    storageInstructions: 'Refrigerate up to 4 days. Delicious chilled.',
    commonIngredients: ['gobindobhog rice', 'rice', 'milk', 'nolen gur', 'jaggery', 'ghee']
  },
  {
    id: 'patishapta',
    name: 'Patishapta Pitha',
    bengaliName: 'পাটিসাপটা পিঠে',
    tagline: 'Delicate winter crepes stuffed with sweet coconut-khoya filling.',
    story: 'The most beloved star of Poush Sankranti and winter pithe festivals. Paper-thin crepes crafted from rice flour and semolina are wrapped around a decadent core of fresh coconut grated with Nolen Gur or thickened sweetened mawa khoya.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b30decb087?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    totalTimeMinutes: 45,
    baseServings: 6,
    difficulty: 'Medium',
    spiceLevel: 'Mild',
    mealTypes: ['dessert', 'snack'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Pitha',
    dietaryPreferences: ['Vegetarian', 'Low-spice'],
    isTraditional: true,
    featured: true,
    season: 'Winter',
    festivalTags: ['Poush Sankranti', 'Pithe Puli Utsav', 'Winter Delicacy'],
    ingredients: [
      { name: 'Maida (All purpose flour)', bengaliName: 'ময়দা', quantity: 1, unit: 'cup', category: 'Pantry' },
      { name: 'Rice flour (Chaler gundo)', bengaliName: 'চালের গুঁড়ো', quantity: 0.5, unit: 'cup', category: 'Pantry' },
      { name: 'Semolina (Suji)', bengaliName: 'সুজি', quantity: 0.25, unit: 'cup', category: 'Pantry' },
      { name: 'Warm milk for batter', bengaliName: 'ঈষদুষ্ণ দুধ', quantity: 1.5, unit: 'cup', category: 'Dairy & Sweets' },
      { name: 'Grated fresh coconut', bengaliName: 'কোরানো নারকেল', quantity: 1.5, unit: 'cup', category: 'Vegetables' },
      { name: 'Nolen Gur or Date palm jaggery', bengaliName: 'নলেন গুড়', quantity: 1, unit: 'cup', category: 'Pantry' },
      { name: 'Mawa / Khoya', bengaliName: 'ক্ষীর / খোয়া', quantity: 0.5, unit: 'cup', category: 'Dairy & Sweets' },
      { name: 'Ghee for greasing pan', bengaliName: 'ঘি', quantity: 2, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Cardamom powder', bengaliName: 'এলাচ গুঁড়ো', quantity: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'To make filling (pur): Cook grated coconut and Nolen Gur in a pan on medium-low flame for 10 minutes until sticky and fragrant. Stir in khoya and cardamom powder until it forms a cohesive soft mixture. Set aside to cool.',
      'To make crepe batter: Whisk maida, rice flour, suji, a pinch of salt, and warm milk into a lump-free, flowing crepe batter (like thin pancake batter). Rest 20 minutes.',
      'Heat a flat non-stick pan or tawa. Lightly grease with ghee using an eggplant stalk or folded paper.',
      'Pour a ladle of batter onto the hot pan, swirl gently to spread into an oval crepe. Cook on low flame for 1 minute until top turns translucent.',
      'Place 2 tablespoons of coconut-khoya filling lengthwise along one edge of the crepe.',
      'Using a spatula, gently roll the crepe over the filling into a neat cylinder. Lightly press the seam.',
      'Remove onto a plate. Repeat with remaining batter, greasing the pan each time. Serve warm or at room temperature.'
    ],
    tips: [
      'Traditional Bengali grandmothers grease the tawa using the green cut end of an eggplant dipped in ghee for a spotless non-stick glide.',
      'Keep the batter flowing and thin so the crepes stay paper-tender rather than rubbery.'
    ],
    substitutions: [
      'You can make pure kheer/khoya stuffing instead of coconut for Kheer-er Patishapta.'
    ],
    nutrition: {
      calories: 210,
      protein: '5g',
      carbs: '34g',
      fat: '7g'
    },
    storageInstructions: 'Refrigerate up to 3 days in an airtight box; enjoy slightly warmed.',
    commonIngredients: ['flour', 'rice flour', 'coconut', 'nolen gur', 'milk', 'khoya', 'ghee']
  },
  {
    id: 'machher-jhol',
    name: 'Panch Phoron Maachher Jhol',
    bengaliName: 'পাঁচফোড়ন দিয়ে পাতলা মাছের ঝোল',
    tagline: 'Light, comforting everyday fish broth with seasonal vegetables & nigella.',
    story: 'The everyday healing potion of Bengali homes. Light carp steaks simmered with pointed gourd (potol), potatoes, and raw papaya in a clear, golden broth tempered with whole cumin and panch phoron, soothing for digestion and soul.',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    baseServings: 4,
    difficulty: 'Easy',
    spiceLevel: 'Mild',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Mach',
    dietaryPreferences: ['Non-vegetarian', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: false,
    season: 'Summer',
    festivalTags: ['Daily Comfort', 'Healing Meal'],
    ingredients: [
      { name: 'Rohu or Katla fish steaks', bengaliName: 'রুই মাছের টুকরো', quantity: 400, unit: 'g', category: 'Fish & Meat' },
      { name: 'Potatoes & Potol (Pointed gourd), quartered lengthwise', bengaliName: 'আলু ও পটল', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Panch phoron or Kalo jeere (Nigella seeds)', bengaliName: 'পাঁচফোড়ন বা কালো জিরে', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Ginger paste & Cumin paste', bengaliName: 'আদা ও জিরে বাটা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Turmeric & Salt', bengaliName: 'হলুদ ও নুন', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Slit green chillies', bengaliName: 'কাঁচা লঙ্কা', quantity: 3, unit: 'pcs', category: 'Vegetables' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Fresh coriander leaves', bengaliName: 'ধনেপাতা', quantity: 2, unit: 'tbsp', category: 'Vegetables' }
    ],
    instructions: [
      'Rub fish steaks with turmeric and salt. Lightly fry in 1 tbsp mustard oil for 1.5 minutes per side; do not over-fry.',
      'In the same pan, fry the potato and potol wedges until lightly golden; set aside.',
      'Add remaining oil, splutter panch phoron and slit green chillies.',
      'Stir in ginger-cumin paste with turmeric and 2 tbsp water; sauté for 1 minute.',
      'Add 2.5 cups hot water and salt. Add fried vegetables and bring to a rapid boil.',
      'Gently slide in the fish pieces. Simmer for 7 minutes until vegetables are tender.',
      'Garnish with fresh coriander leaves and serve with hot steamed rice.'
    ],
    tips: [
      'Do not make this jhol thick; it should be light, fragrant, and soup-like.'
    ],
    substitutions: [
      'Raw papaya (pepe) or cauliflower florets can be added according to season.'
    ],
    nutrition: {
      calories: 220,
      protein: '22g',
      carbs: '10g',
      fat: '11g'
    },
    storageInstructions: 'Best eaten fresh on the day of cooking.',
    commonIngredients: ['fish', 'rohu', 'potato', 'potol', 'panch phoron', 'mustard oil']
  },
  {
    id: 'ghugni',
    name: 'Kolkata Motor Dal-er Ghugni',
    bengaliName: 'কলকাতার মটর ডালের ঘুগনি',
    tagline: 'Tangy, spicy dried yellow peas street snack with tamarind & coconut.',
    story: 'The undisputed monarch of Bengali street snacks and evening tiffin. Dried yellow peas are slow-boiled and cooked into a thick spicy gravy with ginger, garlic, chopped coconut, finished with roasted cumin-coriander bhaja moshla, tamarind water, and chopped onions.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    totalTimeMinutes: 50,
    baseServings: 4,
    difficulty: 'Easy',
    spiceLevel: 'Medium',
    mealTypes: ['snack', 'breakfast'],
    cuisineRegion: 'Kolkata',
    dishType: 'Vegetarian',
    dietaryPreferences: ['Vegetarian', 'Vegan', 'Gluten-free'],
    isTraditional: true,
    featured: false,
    season: 'All-year',
    festivalTags: ['Durga Puja Pandal Food', 'Evening Tiffin'],
    ingredients: [
      { name: 'Dried yellow peas (Motor dal), soaked overnight', bengaliName: 'শুকনো হলুদ মটর', quantity: 250, unit: 'g', category: 'Pantry' },
      { name: 'Potato, diced small', bengaliName: 'ছোট ডুমো আলু', quantity: 1, unit: 'pcs', category: 'Vegetables' },
      { name: 'Fried coconut bits', bengaliName: 'নারকেল কুচি ভাজা', quantity: 2, unit: 'tbsp', category: 'Vegetables' },
      { name: 'Finely chopped onion, tomato, ginger, garlic', bengaliName: 'পেঁয়াজ, টমেটো, আদা ও রসুন কুচি', quantity: 1, unit: 'cup', category: 'Vegetables' },
      { name: 'Bhaja Moshla (roasted cumin & dry chilli powder)', bengaliName: 'ভাজা মশলা গুঁড়ো', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Tamarind pulp water', bengaliName: 'তেঁতুলের জল', quantity: 2, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      'Boil the soaked yellow peas with potatoes, salt, and turmeric in pressure cooker for 4 whistles until soft but not completely mashed.',
      'Heat mustard oil in a kadai. Fry chopped onions until golden.',
      'Add ginger-garlic paste and chopped tomatoes; sauté until oil separates.',
      'Add cumin powder, coriander powder, red chilli powder, and boiled peas with their water.',
      'Simmer on medium heat for 10 minutes until thick and aromatic.',
      'Stir in tamarind pulp and fried coconut pieces.',
      'Ladle into bowls and top with chopped onions, green chillies, coriander, and a generous heap of roasted bhaja moshla. Serve with toasted paoruti or luchi.'
    ],
    tips: [
      'The special touch is "Bhaja Moshla"—dry roast whole cumin seeds and dry red chillies on a hot tawa until smoky, then coarsely grind.'
    ],
    substitutions: [
      'Add minced mutton keema or boneless chicken for Kolkata style Mangsher Ghugni.'
    ],
    nutrition: {
      calories: 230,
      protein: '11g',
      carbs: '36g',
      fat: '5g'
    },
    storageInstructions: 'Refrigerates well up to 3 days.',
    commonIngredients: ['yellow peas', 'potato', 'onion', 'tamarind', 'mustard oil']
  },
  {
    id: 'aam-dal',
    name: 'Tok Aam Dal',
    bengaliName: 'কাঁচা আম দিয়ে টক ডাল',
    tagline: 'Refreshing summer red lentil soup with sour raw mangoes & mustard tempering.',
    story: 'The savior of sweltering summer afternoons across Bengal. Light masoor or matal dal is gently boiled with sour raw green mango slices, then tempered with black mustard seeds and dry red chillies in pure mustard oil for a clean, palate-cleansing tang.',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    totalTimeMinutes: 30,
    baseServings: 4,
    difficulty: 'Easy',
    spiceLevel: 'Mild',
    mealTypes: ['lunch'],
    cuisineRegion: 'Rural Bengal',
    dishType: 'Dal',
    dietaryPreferences: ['Vegetarian', 'Vegan', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: false,
    season: 'Summer',
    festivalTags: ['Summer Classic', 'Boishakhi Ranna'],
    ingredients: [
      { name: 'Masoor dal (Red lentils)', bengaliName: 'মুসুর ডাল', quantity: 150, unit: 'g', category: 'Pantry' },
      { name: 'Raw green mango (Kancha aam), peeled and sliced', bengaliName: 'কাঁচা আম', quantity: 1, unit: 'pcs', category: 'Vegetables' },
      { name: 'Black mustard seeds', bengaliName: 'কালো শর্ষে', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Dried red chillies', bengaliName: 'শুকনো লঙ্কা', quantity: 2, unit: 'pcs', category: 'Spices' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Turmeric powder', bengaliName: 'হলুদ গুঁড়ো', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Sugar', bengaliName: 'চিনি', quantity: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Salt', bengaliName: 'নুন', quantity: 1, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      'Wash masoor dal and cook with 3 cups water, salt, and turmeric until tender.',
      'Add raw mango slices to the dal and simmer for 5 minutes until mango turns soft and imparts tanginess.',
      'Heat mustard oil in a separate small tadka pan. Add dried red chillies and black mustard seeds until they crackle furiously.',
      'Pour the sputtering tadka into the dal. Stir in sugar to balance the tartness.',
      'Simmer for 2 minutes and serve warm or at room temperature with Bhaat and Aloo Bhaja.'
    ],
    tips: [
      'Do not boil the mango too early or it will disintegrate into mush; add only when dal is 80% done.'
    ],
    substitutions: [
      'Moong dal or Matar dal can be used in place of masoor dal.'
    ],
    nutrition: {
      calories: 160,
      protein: '9g',
      carbs: '24g',
      fat: '3.5g'
    },
    storageInstructions: 'Refrigerate up to 2 days; tastes wonderfully refreshing chilled on hot days.',
    commonIngredients: ['masoor dal', 'raw mango', 'mustard seeds', 'mustard oil']
  },
  {
    id: 'chhanar-dalna',
    name: 'Chhanar Dalna',
    bengaliName: 'ছানার ডালনা',
    tagline: 'Melt-in-mouth cottage cheese koftas in satvik tomato-ginger cumin gravy.',
    story: 'The peak of Bengali festive vegetarian cooking. Fresh homemade cow milk cottage cheese (chhana) is delicately kneaded with flour, crushed green chillies, and fried into pillowy koftas, then simmered in a satvik (pure vegetarian, no onion no garlic) gravy spiced with ginger, cumin, and Bengali garam masala.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    totalTimeMinutes: 50,
    baseServings: 4,
    difficulty: 'Medium',
    spiceLevel: 'Mild',
    mealTypes: ['lunch', 'dinner'],
    cuisineRegion: 'Kolkata',
    dishType: 'Vegetarian',
    dietaryPreferences: ['Vegetarian', 'Gluten-free', 'Low-spice'],
    isTraditional: true,
    featured: false,
    season: 'All-year',
    festivalTags: ['Durga Puja Ashtami', 'Ekadashi', 'Niramish Day'],
    ingredients: [
      { name: 'Fresh homemade chhana (paneer)', bengaliName: 'তাজা ছানা', quantity: 300, unit: 'g', category: 'Dairy & Sweets' },
      { name: 'Maida or Cornflour for binding', bengaliName: 'ময়দা বা কর্নফ্লাওয়ার', quantity: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Potatoes, cubed', bengaliName: 'ডুমো আলু', quantity: 2, unit: 'pcs', category: 'Vegetables' },
      { name: 'Tomato purée', bengaliName: 'টমেটো বাটা', quantity: 0.5, unit: 'cup', category: 'Vegetables' },
      { name: 'Ginger paste', bengaliName: 'আদা বাটা', quantity: 1.5, unit: 'tbsp', category: 'Spices' },
      { name: 'Cumin powder & Turmeric', bengaliName: 'জিরে ও হলুদ গুঁড়ো', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Kashmiri chilli powder', bengaliName: 'কাশ্মীরি লঙ্কা', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Ghee & Bengali Garam Masala', bengaliName: 'ঘি ও গরম মশলা', quantity: 1, unit: 'tbsp', category: 'Dairy & Sweets' },
      { name: 'Mustard oil', bengaliName: 'শর্ষের তেল', quantity: 3, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      'Knead the fresh chhana with maida, a pinch of salt, crushed green chilli, and 1/2 tsp roasted cumin powder with the palm of your hand for 5 minutes until soft and pliable.',
      'Shape into small flattened discs or squares.',
      'Heat mustard oil and lightly fry the chhana koftas until pale golden. Drain gently.',
      'In the same oil, fry the potato cubes until golden; remove.',
      'Temper oil with cumin seeds, bay leaf, and green cardamom. Add ginger paste, tomato purée, turmeric, cumin powder, and Kashmiri chilli.',
      'Cook masala until oil glazes the pan. Add 2 cups warm water and salt.',
      'Add fried potatoes and simmer until tender.',
      'Gently slide the soft chhana koftas into the simmering gravy. Cook for 2 minutes only so they absorb flavor without falling apart.',
      'Finish with 1 tsp fragrant ghee and Bengali garam masala.'
    ],
    tips: [
      'Do not over-knead the chhana or fat will separate; stop as soon as it forms a smooth ball.'
    ],
    substitutions: [
      'Store-bought soft Malai Paneer can be gently crumbled and mashed if fresh milk chhana is not made at home.'
    ],
    nutrition: {
      calories: 320,
      protein: '16g',
      carbs: '22g',
      fat: '19g'
    },
    storageInstructions: 'Refrigerate up to 2 days; add koftas during final reheating.',
    commonIngredients: ['chhana', 'paneer', 'potato', 'tomato', 'ginger', 'ghee']
  },
  {
    id: 'singara',
    name: 'Bengali Cauliflower Singara',
    bengaliName: 'ফুলকপি-আলুর শিঙাড়া',
    tagline: 'Flaky pyramid pastries stuffed with spiced cauliflower florets, potatoes & peanuts.',
    story: 'Kolkata’s legendary tea-time companion. Unlike North Indian samosas filled with mashed potato, the authentic Bengali Singara has a tender, paper-flaky pastry crust stuffed with crunchy diced potatoes, tiny cauliflower florets, ginger, green chillies, and roasted peanuts, flavored with panch phoron.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    prepTimeMinutes: 30,
    cookTimeMinutes: 20,
    totalTimeMinutes: 50,
    baseServings: 4,
    difficulty: 'Medium',
    spiceLevel: 'Medium',
    mealTypes: ['snack'],
    cuisineRegion: 'Kolkata',
    dishType: 'Vegetarian',
    dietaryPreferences: ['Vegetarian', 'Vegan'],
    isTraditional: true,
    featured: false,
    season: 'Winter',
    festivalTags: ['Evening Cha Companion', 'Sweet Shop Classic'],
    ingredients: [
      { name: 'Maida (All purpose flour)', bengaliName: 'ময়দা', quantity: 250, unit: 'g', category: 'Pantry' },
      { name: 'Kalonji (Kalo jeere)', bengaliName: 'কালো জিরে', quantity: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Ghee or oil for moyan', bengaliName: 'ময়ান', quantity: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Tiny cauliflower florets & diced potato', bengaliName: 'ছোট ফুলকপি ও আলুর টুকরো', quantity: 2, unit: 'cup', category: 'Vegetables' },
      { name: 'Roasted peanuts (Chinabadam)', bengaliName: 'ভাজা চিনেবাদাম', quantity: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Panch phoron, ginger & green chilli', bengaliName: 'পাঁচফোড়ন, আদা ও কাঁচা লঙ্কা', quantity: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Bengali Bhaja Moshla', bengaliName: 'ভাজা মশলা', quantity: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Oil for deep frying', bengaliName: 'ভাজার তেল', quantity: 2, unit: 'cup', category: 'Pantry' }
    ],
    instructions: [
      'Knead maida with kalonji, salt, and 3 tbsp ghee/oil into a stiff dough using minimal cold water. Rest 20 minutes.',
      'Sauté potatoes and cauliflower with panch phoron, ginger, green chillies, turmeric, salt, and peanuts until cooked and dry. Toss with bhaja moshla. Cool completely.',
      'Roll oval discs from dough balls, cut each oval in half.',
      'Form each half into a cone using water along the edge to seal.',
      'Fill generously with the cauliflower-potato stuffing, fold the base, and seal shut with pleats.',
      'Deep-fry in warm oil on low flame for 12–15 minutes until the crust turns pale golden, blistered, and exceptionally crisp.',
      'Serve with steaming ginger tea (ada cha) and sweet tamarind chutney.'
    ],
    tips: [
      'Never fry Singara in hot oil! The oil must start at low temperature so the pastry cooks slowly from within to achieve that iconic brittle crunch.'
    ],
    substitutions: [
      'Green peas can be added in abundance during winter.'
    ],
    nutrition: {
      calories: 260,
      protein: '5g',
      carbs: '32g',
      fat: '13g'
    },
    storageInstructions: 'Reheat in an oven or air-fryer to restore crackling crispness.',
    commonIngredients: ['flour', 'potato', 'cauliflower', 'peanuts', 'ginger']
  }
];
