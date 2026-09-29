import { FestivalMenu } from '../types';

export const BENGALI_FESTIVALS: FestivalMenu[] = [
  {
    id: 'poila-boishakh',
    festivalName: 'Poila Boishakh (Noboborsho)',
    bengaliFestivalName: 'পয়লা বৈশাখ (শুভ নববর্ষ)',
    description: 'The vibrant dawn of the Bengali calendar year, marked by new clothes, Haalkhata ledgers, and extravagant multi-course feasts celebrating fresh seasonal fish, posto, and traditional mishti.',
    season: 'Spring / Summer',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    significance: 'Celebrates renewal, prosperity, and the joyous reunion of families over classic heirloom recipes.',
    menu: {
      breakfast: ['luchi', 'aloor-dom', 'mishti-doi'],
      lunch: ['steamed-bhaat', 'shukto', 'aloo-posto', 'shorshe-ilish', 'doi-maach'],
      snack: ['singara', 'aam-pora-sharbat'],
      dinner: ['basanti-pulao', 'kosha-mangsho'],
      dessert: ['rasgulla', 'mishti-doi']
    },
    mustHaveItems: ['Hilsa (Ilish)', 'Poppy seeds (Posto)', 'Gobindobhog rice', 'Mustard oil', 'Mishti Doi clay pots', 'Raw mangoes']
  },
  {
    id: 'durga-puja',
    festivalName: 'Durga Puja (Maha Ashtami & Nabami)',
    bengaliFestivalName: 'শারদীয় দুর্গোৎসব (মহাষ্টমী ও নবমী)',
    description: 'The monumental cultural heartbeat of Bengal. Pure vegetarian Ashtami Bhog of khichuri and labra transforms into opulent Nabami feasts featuring Kosha Mangsho and Basanti Pulao.',
    season: 'Autumn (Shorot)',
    bannerImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80',
    significance: 'Welcoming Goddess Durga and her children home with sacred Bhog, dhak beats, and unmatched gastronomic delight.',
    menu: {
      breakfast: ['radhaballabhi', 'aloor-dom'],
      lunch: ['khichuri', 'begun-bhaja', 'chhanar-dalna', 'cholar-dal'],
      snack: ['ghugni', 'singara'],
      dinner: ['basanti-pulao', 'kosha-mangsho', 'chingri-malai-curry'],
      dessert: ['rasgulla', 'mishti-doi']
    },
    mustHaveItems: ['Gobindobhog rice', 'Sona Moong dal', 'Desi Ghee', 'Fresh Mutton', 'Jumbo Chingri', 'Chhana', 'Begun']
  },
  {
    id: 'saraswati-puja',
    festivalName: 'Saraswati Puja (Boshonto Panchami)',
    bengaliFestivalName: 'সরস্বতী পূজা (বসন্ত পঞ্চমী)',
    description: 'The celebration of learning, music, and first spring blooms. Dressed in basanti yellow, youths partake in sweet khichuri, kul-er tok (jujube chutney), and freshly harvested spinach.',
    season: 'Spring (Boshonto)',
    bannerImage: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80',
    significance: 'Worship of the Goddess of Wisdom, marking the first time unripe Indian jujubes (topakuler tok) are tasted after the puja.',
    menu: {
      breakfast: ['luchi', 'cholar-dal'],
      lunch: ['khichuri', 'begun-bhaja', 'labra', 'chhanar-dalna'],
      snack: ['singara'],
      dinner: ['steamed-bhaat', 'machher-jhol'],
      dessert: ['rasgulla', 'nolen-gur-payesh']
    },
    mustHaveItems: ['Topakul (Jujube)', 'Sona Moong dal', 'Cauliflower', 'Green peas', 'Basanti saffron / turmeric']
  },
  {
    id: 'lakshmi-puja',
    festivalName: 'Kojagori Lakshmi Puja',
    bengaliFestivalName: 'কোজাগরী লক্ষ্মী পূজা',
    description: 'Observed under the luminous full moon of autumn (Kojagori). Women stay awake through the night preparing Narkel Naru, Moa, and pure satvik Niramish bhog offerings.',
    season: 'Autumn',
    bannerImage: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1000&q=80',
    significance: 'Invoking the blessings of Goddess Lakshmi with intricate rice-paste alpana drawings and sweet coconut offerings.',
    menu: {
      breakfast: ['luchi', 'aloor-dom'],
      lunch: ['khichuri', 'begun-bhaja', 'dhokar-dalna'],
      snack: ['ghugni'],
      dinner: ['luchi', 'cholar-dal'],
      dessert: ['nolen-gur-payesh', 'rasgulla']
    },
    mustHaveItems: ['Fresh coconuts', 'Chana dal for dhoka', 'Gobindobhog rice', 'Ghee', 'Date palm jaggery']
  },
  {
    id: 'kali-puja',
    festivalName: 'Kali Puja & Diwali',
    bengaliFestivalName: 'শ্যামা পূজা ও দীপাবলি',
    description: 'Celebrated on the darkest night of Kartik month (Amavasya) with thousands of earthen lamps (pradeep) and midnight feasts featuring sacrificed goat curry (Bhoger Niramish Mangsho) or decadent Kosha.',
    season: 'Late Autumn',
    bannerImage: 'https://images.unsplash.com/photo-1545247181-516773ca83e3?auto=format&fit=crop&w=1000&q=80',
    significance: 'Honoring the fierce Mother Kali; custom dictates consuming 14 types of leafy greens (Choddo Shaak) the eve before.',
    menu: {
      breakfast: ['luchi', 'aloor-dom'],
      lunch: ['steamed-bhaat', 'machher-jhol', 'begun-bhaja'],
      snack: ['singara'],
      dinner: ['basanti-pulao', 'kosha-mangsho'],
      dessert: ['mishti-doi', 'rasgulla']
    },
    mustHaveItems: ['14 leafy greens (Choddo Shaak)', 'Tender goat meat', 'Mustard oil', 'Whole spices', 'Mustard oil for lamps']
  },
  {
    id: 'bhai-phonta',
    festivalName: 'Bhai Phonta (Bhatridwitiya)',
    bengaliFestivalName: 'ভাই ফোঁটা',
    description: 'Sisters bestow sandalwood paste marks upon their brothers’ foreheads chanting sacred blessings, followed by an epic marathon of sweet confectioneries, fish heads, and mutton.',
    season: 'Autumn / Winter',
    bannerImage: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=1000&q=80',
    significance: 'Celebrating sibling devotion with an insurmountable spread of handmade sweets and prized giant fish heads (Muro).',
    menu: {
      breakfast: ['radhaballabhi', 'aloor-dom'],
      lunch: ['steamed-bhaat', 'shukto', 'chingri-malai-curry', 'rui-kalia', 'kosha-mangsho'],
      snack: ['singara', 'ghugni'],
      dinner: ['basanti-pulao', 'mutton-rezala'],
      dessert: ['sandesh', 'mishti-doi', 'rasgulla']
    },
    mustHaveItems: ['Giant Rohu or Katla fish head', 'Golda Chingri', 'Sandesh from reputed sweet shop', 'Kaju & Kishmish']
  },
  {
    id: 'jamai-shashti',
    festivalName: 'Jamai Shashti',
    bengaliFestivalName: 'জামাই ষষ্ঠী',
    description: 'A dedicated summertime festival honoring the son-in-law (Jamai) with palm-leaf fans, auspicious dubba grass blessings, and the year’s most extravagant culinary banquet.',
    season: 'Summer',
    bannerImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    significance: 'Affectionate hospitality shown by mothers-in-law featuring the finest Hilsa, giant river prawns, mutton, and fresh mangoes.',
    menu: {
      breakfast: ['luchi', 'cholar-dal', 'aam-pora-sharbat'],
      lunch: ['steamed-bhaat', 'shukto', 'shorshe-ilish', 'chingri-malai-curry', 'kosha-mangsho'],
      snack: ['singara'],
      dinner: ['basanti-pulao', 'rui-kalia'],
      dessert: ['mishti-doi', 'rasgulla']
    },
    mustHaveItems: ['Padma / Ganga Hilsa (Ilish)', 'Golda Chingri', 'Himsagar / Lyangra mangoes', 'Mutton', 'Earthen pot Mishti Doi']
  }
];
