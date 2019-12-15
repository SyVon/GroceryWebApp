import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent {
    @Output() pageChange: EventEmitter<String> = new EventEmitter<String>()

    onRecipesClicked() {
        this.pageChange.emit('recipesPage');
    }

    onShoppingListClicked() {
        this.pageChange.emit('shoppingPage');
    }
}