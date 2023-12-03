import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipesService} from "../../recipes/recipes.service";
import {RecipeModel} from "../../recipes/recipe.model";
import {exhaustMap, take, tap} from "rxjs";
import {AuthService} from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private http: HttpClient, private recipeService: RecipesService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://foodapp-ca259-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http
      .get<RecipeModel[]>('https://foodapp-ca259-default-rtdb.firebaseio.com/recipes.json')
      .pipe(tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
