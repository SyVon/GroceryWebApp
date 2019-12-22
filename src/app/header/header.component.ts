import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent {
    @Output() pageChange: EventEmitter<String> = new EventEmitter<String>()

    constructor(private router: Router) { }
    onRecipesClicked() {
        this.router.navigate(['/recipes']);
    }

    onShoppingListClicked() {
        this.router.navigate(['/shopping-list']);
    
    }
}