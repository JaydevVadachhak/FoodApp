import {Injectable} from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Test Recipe 1',
      'Test 1',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
      [
        new IngredientModel('Meat', 10),
        new IngredientModel('Apples', 6),
      ]
    ),
    new RecipeModel(
      'Test Recipe 2',
      'Test 2',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
      [
        new IngredientModel('Potatoes', 20),
        new IngredientModel('Pineapples', 5)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
