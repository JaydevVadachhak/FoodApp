import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() onRecipeSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel('Test Recipe 1', 'Test 1', 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg'),
    new RecipeModel('Test Recipe 2', 'Test 2', 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg'),
    new RecipeModel('Test Recipe 3', 'Test 3', 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeSelect(recipeElement: RecipeModel) {
    this.onRecipeSelected.emit(recipeElement);
  }

}
