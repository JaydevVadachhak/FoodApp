import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipeDetail!: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.selectedRecipeDetail.ingredients);
  }
}
