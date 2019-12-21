import { Injectable, Output, EventEmitter } from '@angular/core';
import {Ingredient } from './shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() onIngredientAdd = new EventEmitter<Ingredient>();

  constructor() { }
  
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('oranges', 10)
  ];

  onAddedIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    for( let ingredient of ingredients) {
      this.ingredients.push(ingredient);
      this.onIngredientAdd.emit(ingredient);
    }
  }
}
