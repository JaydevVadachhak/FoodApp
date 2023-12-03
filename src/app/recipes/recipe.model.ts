import {IngredientModel} from "../shared/model/ingredient.model";

export class RecipeModel {
  public name: string | undefined;
  public description: string | undefined;
  public imagePath: string | undefined;
  public ingredients: IngredientModel[];

  constructor(name: string, desc: string, imagePath: string, ingredients: IngredientModel[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
