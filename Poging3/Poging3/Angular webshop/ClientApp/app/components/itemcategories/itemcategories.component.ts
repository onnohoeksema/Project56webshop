import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';



@Component({
    selector: "itemcategories",
    templateUrl: "./itemcategories.component.html"
})
/*
export class ItemPageComponent implements OnInit {

    results: string[];
    // HttpClient needs to be implemented, probably the database connection
    //HttpClient has been implemented
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<ItemsResponse>(baseUrl + '/api/TestMania/GetAll').subscribe(data => {
                this.results = data.results;
            },
            err => { console.log('Something went wrong!'); }
        );
    }
    
    ngOnInit(): void {
        this.http.get('/api/TestMania/GetAll').subscribe(data => {
            this.results = (data as any)['results']; 
            
        });

    }
}
*/

export class ItemCategoriesComponent implements OnInit {

    public categories: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    mycategory = this.categories;
    public filteredproducts: any
    category: string;
    public items: any
    constructor(private http: HttpClient) {}

    onClickMe()
    {
        //this.category = this.categories.toString();
        
        this.http.get('/api/ItemCategories/GetProducts/' + String(this.category) + '/').subscribe(data => { this.filteredproducts = data ; 
        
        }, error => console.error(error));
    }

    ClickBooks()
    {
        this.http.get('/api/ItemCategories/GetBooks/').subscribe(data => { this.items = data ; 
        
        }, error => console.error(error));
        
    }

    ClickAccessories()
    {
        this.http.get('/api/ItemCategories/GetAccessories/').subscribe(data => { this.items = data ; 
        
        }, error => console.error(error));
    }

    ClickDice()
    {
        this.http.get('/api/ItemCategories/GetDice/').subscribe(data => { this.items = data ; 
        
        }, error => console.error(error)); 
    }

    ClickExtras()
    {
        this.http.get('/api/ItemCategories/GetExtras/').subscribe(data => { this.items = data ; 
        
        }, error => console.error(error));
    }

    ClickMiniatures()
    {
        this.http.get('/api/ItemCategories/GetMiniatures/').subscribe(data => { this.items = data ; 
        
        }, error => console.error(error));
    }



    ngOnInit(): void {

        this.http.get('/api/ItemCategories/GetCategories').subscribe(data => { this.categories = data ; 
        
        }, error => console.error(error));

        //this.http.get('/api/ItemCategories/GetProducts/{name}').subscribe(data => { this.categories = data ; 
        
        //}, error => console.error(error));
    }
    myCategory = this.categories;
}


interface ItemsResponse {
    productID: number;
    productName: string;
    productPrice: number;
    productStock: number;
    productCategory: string;
    productTag: string; 
    
}