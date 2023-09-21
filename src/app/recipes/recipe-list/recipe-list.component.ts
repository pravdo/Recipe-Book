import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://img.bestrecipes.com.au/GmWTemLJ/w643-h428-cfill-q90/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg'
    ),
    new Recipe(
      'New Test Recipe',
      'Test Description',
      'https://img.bestrecipes.com.au/GmWTemLJ/w643-h428-cfill-q90/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
