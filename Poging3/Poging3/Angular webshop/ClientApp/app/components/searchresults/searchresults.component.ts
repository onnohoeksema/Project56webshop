import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { isPlatformBrowser } from '@angular/common/';
import { errorHandler } from '@angular/platform-browser/src/browser';




@Component({
    selector: 'searchresults',
    templateUrl: './searchresults.component.html'
})


export class SearchResultsComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient) {}

    public searchItems : any
    public itemtosearch: any

    ngOnInit():void{

        if(isPlatformBrowser(this.platformId)){
            this.itemtosearch = localStorage.getItem('SearchItem');
        }

        this.http.get('/api/ItemCategories/GetSearch/' + this.itemtosearch + '/').subscribe(data => { this.searchItems = data ; 
            
            }, error => console.error(error));
    }

    
}
