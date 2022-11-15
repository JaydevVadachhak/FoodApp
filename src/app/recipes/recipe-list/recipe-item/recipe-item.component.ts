import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../recipe.model";
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onRecipeSelect() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }

}
