import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DataStoreService} from "../shared/services/data-store.service";
import {RecipeModel} from "./recipe.model";
import {RecipesService} from "./recipes.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<RecipeModel[]> {

  constructor(private dataStoreService: DataStoreService, private recipeService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeModel[]> | [] {
    const recipes = this.recipeService.getRecipes();
    if(!recipes) {
      return this.dataStoreService.fetchRecipes();
    } else {
      return [];
    }
  }
}
