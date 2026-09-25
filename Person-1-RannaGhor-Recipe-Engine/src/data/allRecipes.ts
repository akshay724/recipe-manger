import { Recipe } from '../types';
import { BENGALI_RECIPES } from './recipes';
import { ADDITIONAL_RECIPES } from './moreRecipes';
import { RECIPE_BENGALI_INSTRUCTIONS } from './bengaliInstructions';

export const ALL_RECIPES: Recipe[] = [
  ...BENGALI_RECIPES,
  ...ADDITIONAL_RECIPES
].map(recipe => ({
  ...recipe,
  bengaliInstructions: RECIPE_BENGALI_INSTRUCTIONS[recipe.id] || recipe.bengaliInstructions || recipe.instructions
}));

export const getRecipeById = (id: string): Recipe | undefined => {
  return ALL_RECIPES.find(r => r.id === id);
};
