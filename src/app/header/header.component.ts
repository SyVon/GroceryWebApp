import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    private userSub: Subscription;

    @Output() pageChange: EventEmitter<String> = new EventEmitter<String>()

    constructor(private router: Router, private dataStoreService: DataStorageService, private authService: AuthService) { }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
        });
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

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

    onLogout() {
        this.authService.logout();
    }
}