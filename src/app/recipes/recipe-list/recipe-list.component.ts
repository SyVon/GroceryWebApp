import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://live.staticflickr.com/448/31618169433_044d86286e_b.jpg'),
    new Recipe('Second Test Recipe', 'This is a different recipe', 'https://cdn.pixabay.com/photo/2016/01/14/18/21/pie-1140530_960_720.jpg')
  ];

  @Output() recipeClicked: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }

}
