import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent {
    @Output() pageChange: EventEmitter<String> = new EventEmitter<String>()

    constructor(private router: Router, private dataStoreService: DataStorageService) { }

    onRecipesClicked() {
        this.router.navigate(['/recipes']);
    }

    onShoppingListClicked() {
        this.router.navigate(['/shopping-list']);
    
    }

    onSaveData() {
        this.dataStoreService.storeRecipes();
    }

    onFetchData() {
        this.dataStoreService.fetchRecipes().subscribe();
    }
}