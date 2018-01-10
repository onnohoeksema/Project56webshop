import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { RouterModule, Routes } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core'; 

import { UserDashBoardComponent } from './UserDashBoard.component';

const routes: Routes = [
    { path: 'UserDashBoard', component: UserDashBoardComponent },
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//Tot hier copieren als je het wil gebruiken, daarna de Import {---} veranderen naar jou adress en de Route changen.
@Component({
    selector: 'Wishlist',
    templateUrl: './Wishlist.component.html'
})

export class WishlistComponent {
    public wishlists: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public filteredwishlists: any

    public sortType     = 'name'; // set the default sort type
    public sortReverse  = false;  // set the default sort order
    public searchFish   = '';     // set the default search/filter term

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get('/api/UserPage/GetAll').subscribe(data => {
        this.wishlists = data;

        }, error => console.error(error));


    }

    SaveNewData(WishlistID: any, ProductID: any, UserID: any){
        this.http.get('/api/UserPage/SaveData/' + WishlistID + '/' + UserID + '/' + ProductID + '/' ).subscribe(result => {
            if(result){
                location.href = "Wishlist"
            }
        })
    }

}