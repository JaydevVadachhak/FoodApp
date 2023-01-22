import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipesService} from "../../recipes/recipes.service";
import {RecipeModel} from "../../recipes/recipe.model";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private http: HttpClient, private recipeService: RecipesService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://foodapp-ca259-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http
      .get<RecipeModel[]>('https://foodapp-ca259-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
