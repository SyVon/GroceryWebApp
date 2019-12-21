import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false}) nameInputElement: ElementRef;
  @ViewChild('amountInput', { static: false}) amountInputElement: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(this.nameInputElement.nativeElement.value , this.amountInputElement.nativeElement.value);
    this.shoppingListService.onAddedIngredient(newIngredient);
    this.shoppingListService.onIngredientAdd.emit(newIngredient);
    
  }
}
