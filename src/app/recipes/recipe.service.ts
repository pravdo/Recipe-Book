import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://img.bestrecipes.com.au/GmWTemLJ/w643-h428-cfill-q90/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 15)]
    ),
    new Recipe(
      'New Test Recipe',
      'Test Description',
      'https://img.bestrecipes.com.au/GmWTemLJ/w643-h428-cfill-q90/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // return new array exact same copy of the array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
