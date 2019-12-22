import { Injectable, Output } from '@angular/core';
import {Ingredient } from './shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() onIngredientAdd = new Subject<Ingredient>();

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
      this.onIngredientAdd.next(ingredient);
    }
  }
}
