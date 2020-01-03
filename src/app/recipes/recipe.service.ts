import { Injectable, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    // @Output() selectedRecipe: Subject<Recipe> = new Subject<Recipe>();
    // @Output() recipeId: EventEmitter<number> = new EventEmitter<number>();

    constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute) { }

    // private recipes: Recipe[] = [
    //     new Recipe('Pasta', 'Delicious Minestrone pasta', 'https://live.staticflickr.com/448/31618169433_044d86286e_b.jpg', [
    //         new Ingredient('pasta', 2),
    //         new Ingredient('lemon', 3),
    //         new Ingredient('sauce', 1)
    //     ]),
    //     new Recipe('Apricot Cookie', 'Apricot filled cookie', 'https://cdn.pixabay.com/photo/2016/01/14/18/21/pie-1140530_960_720.jpg', [
    //         new Ingredient('dough', 2),
    //         new Ingredient('apricots', 3),
    //         new Ingredient('sugar', 1)
    //     ])
    //   ];

    private recipes: Recipe[] = [];
    
    getRecipes() {
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
    
    getRecipe(id: number){
        return this.recipes[id];
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

}