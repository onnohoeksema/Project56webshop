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

import { LoginPageComponent } from './LoginPage.component';

const routes: Routes = [
    { path: 'LoginPage', component: LoginPageComponent },
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//Tot hier copieren als je het wil gebruiken, daarna de Import {---} veranderen naar jou adress en de Route changen.
@Component({
    selector: 'AdminProducts',
    templateUrl: './AdminProducts.component.html'
})

export class AdminProductsComponent {
    public products: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public filteredproducts: any

    public sortType     = 'name'; // set the default sort type
    public sortReverse  = false;  // set the default sort order
    public searchFish   = '';     // set the default search/filter term
    ShowEditTable: boolean = false;
    EditRowID: any = '';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get('/api/ItemPage/GetAll').subscribe(data => {
        this.products = data;

        }, error => console.error(error));


    }

    SaveNewData(productID: any, productName: any, productPrice: any, productStock: any, productCategory: any, productTag: any){
        this.http.get('/api/AdminPage/SaveData/' + productID + '/' + productName + '/' + productPrice + '/' + productStock + '/' + productCategory + '/' + productTag + '/' ).subscribe(result => {
            if(result){
                location.href = "AdminProducts"
            }
        })
    }

    Edit(val:any){
        this.EditRowID = val;
    }
}