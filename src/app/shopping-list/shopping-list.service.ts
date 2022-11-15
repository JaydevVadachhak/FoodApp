import { Injectable } from '@angular/core';
import {IngredientModel} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredient: IngredientModel[]) {
    this.ingredients.push(...ingredient);
  }

}
