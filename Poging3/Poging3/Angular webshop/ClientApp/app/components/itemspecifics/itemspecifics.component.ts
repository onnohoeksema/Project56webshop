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
    selector: "itemspecifics",
    templateUrl: "./itemspecifics.component.html"
})

export class ItemSpecificsComponent implements OnInit {

    public products: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public finalitem: any
    chosenitem: any

    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient) {}

    ngOnInit(): void {
        /*
        this.http.get('/api/ItemPage/GetAll').subscribe(data => { this.products = data ; 
        
        }, error => console.error(error));
        */
        if(isPlatformBrowser(this.platformId)){
            this.chosenitem = localStorage.getItem('currentItem');
        }

        this.http.get('/api/ItemPage/GetItem/' + this.chosenitem + '/').subscribe(data => { this.finalitem = data ; 
        
        }, error => console.error(error));
        
    }

    GoToItem(chosenitem:any)
    {
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('currentItem', chosenitem);
            location.href = "itemspecifics";
        }
        
        
        
    }
    
}