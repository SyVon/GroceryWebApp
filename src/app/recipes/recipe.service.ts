import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) { }

    private recipes: Recipe[] = [
        new Recipe('Pasta', 'Delicious Minestrone pasta', 'https://live.staticflickr.com/448/31618169433_044d86286e_b.jpg', [
            new Ingredient('pasta', 2),
            new Ingredient('lemon', 3),
            new Ingredient('sauce', 1)
        ]),
        new Recipe('Apricot Cookie', 'Apricot filled cookie', 'https://cdn.pixabay.com/photo/2016/01/14/18/21/pie-1140530_960_720.jpg', [
            new Ingredient('dough', 2),
            new Ingredient('apricots', 3),
            new Ingredient('sugar', 1)
        ])
      ];
    getRecipes() {
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    onChangeRecipeSelected(recipe: Recipe) {
        this.selectedRecipe.emit(recipe);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
    
}