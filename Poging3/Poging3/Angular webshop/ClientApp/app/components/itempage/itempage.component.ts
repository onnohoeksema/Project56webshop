import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { isPlatformBrowser } from '@angular/common/';


@Component({
    selector: "itempage",
    templateUrl: "./itempage.component.html"
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

export class ItemPageComponent implements OnInit {

    public products: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public filteredproducts: any
    category: string
    //currentcategory = localStorage.currentCategory;
    currentcategory: any
    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient) {}

    ngOnInit(): void {
        /*
        this.http.get('/api/ItemPage/GetAll').subscribe(data => { this.products = data ; 
        
        }, error => console.error(error));
        */
        if(isPlatformBrowser(this.platformId)){
            this.currentcategory = localStorage.getItem('currentCategory');
        }

        this.http.get('/api/ItemPage/GetProducts/' + this.currentcategory + '/').subscribe(data => { this.filteredproducts = data ; 
        
        }, error => console.error(error));
        
    }

    GotoItem(chosenitem:any)
    {
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('currentItem', chosenitem);
            location.href = "itemspecifics";
        }
        
        
        
    }
    
}

//Did not test if this was actually nescesary
interface ItemsResponse {
    productID: number;
    productName: string;
    productPrice: number;
    productStock: number;
    productCategory: string;
    productTag: string; 
    
}