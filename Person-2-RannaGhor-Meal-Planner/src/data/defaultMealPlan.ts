import { WeeklyPlan } from '../types';

export const INITIAL_MEAL_PLAN: WeeklyPlan = {
  Monday: {
    breakfast: [{ recipeId: 'luchi' }, { recipeId: 'aloor-dom' }],
    lunch: [{ recipeId: 'steamed-rice' }, { recipeId: 'cholar-dal' }, { recipeId: 'aloo-posto' }, { recipeId: 'doi-maach' }],
    snack: [{ recipeId: 'singara' }],
    dinner: [{ recipeId: 'bengali-chicken-curry' }, { recipeId: 'steamed-rice' }]
  },
  Tuesday: {
    breakfast: [{ recipeId: 'rashmalai' }, { recipeId: 'aloor-dom' }],
    lunch: [{ recipeId: 'steamed-bhaat' }, { recipeId: 'shukto' }, { recipeId: 'begun-bhaja' }, { recipeId: 'machher-jhol' }],
    snack: [{ recipeId: 'singara' }],
    dinner: [{ recipeId: 'dhokar-dalna' }, { recipeId: 'steamed-rice' }]
  },
  Wednesday: {
    breakfast: [{ recipeId: 'ghugni' }],
    lunch: [{ recipeId: 'steamed-bhaat' }, { recipeId: 'aam-dal' }, { recipeId: 'begun-bhaja' }, { recipeId: 'shorshe-ilish' }],
    snack: [{ recipeId: 'singara' }],
    dinner: [{ recipeId: 'chhanar-dalna' }, { recipeId: 'steamed-rice' }]
  },
  Thursday: {
    breakfast: [{ recipeId: 'luchi' }, { recipeId: 'cholar-dal' }],
    lunch: [{ recipeId: 'steamed-rice' }, { recipeId: 'shukto' }, { recipeId: 'potoler-dolma' }, { recipeId: 'rui-kalia' }],
    snack: [{ recipeId: 'mishti-doi' }],
    dinner: [{ recipeId: 'mutton rezala' }, { recipeId: 'steamed-rice' }]
  },
  Friday: {
    breakfast: [{ recipeId: 'aloor-dom' }],
    lunch: [{ recipeId: 'khichuri' }, { recipeId: 'begun-bhaja' }, { recipeId: 'chingri-malai-curry' }, { recipeId: 'mishti-doi' }],
    snack: [{ recipeId: 'ghugni' }],
    dinner: [{ recipeId: 'mochar-ghonto' }, { recipeId: 'steamed-rice' }]
  },
  Saturday: {
    breakfast: [{ recipeId: 'luchi' }, { recipeId: 'aloor-dom' }],
    lunch: [{ recipeId: 'steamed-bhaat' }, { recipeId: 'aloo-posto' }, { recipeId: 'shorshe-ilish' }, { recipeId: 'rasgulla' }],
    snack: [{ recipeId: 'patishapta' }],
    dinner: [{ recipeId: 'mutton-rezala' }, { recipeId: 'luchi' }, { recipeId: 'rasgulla'}]
  },
  Sunday: {
    breakfast: [{ recipeId: 'luchi' }, { recipeId: 'aloor-dom' }],
    lunch: [{ recipeId: 'pulao' }, { recipeId: 'kosha-mangsho' }, { recipeId: 'mishti-doi' }, { recipeId: 'rasgulla' }],
    snack: [{ recipeId: 'singara' }, { recipeId: 'patishapta' }],
    dinner: [{ recipeId: 'steamed-rice' }, { recipeId: 'machher-jhol' }, { recipeId: 'nolen-gur-payesh' }]
  }
};
