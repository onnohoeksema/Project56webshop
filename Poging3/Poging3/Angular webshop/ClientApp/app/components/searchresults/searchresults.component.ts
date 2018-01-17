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

import { PagerService } from '../../services/PagerService.service';


@Component({
    selector: 'searchresults',
    templateUrl: './searchresults.component.html'
})


export class SearchResultsComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient, private pagerService: PagerService) {}

    public searchItems : any
    public itemtosearch: any

    // pager object
    pager: any = {};
    pagedItems: any[];

    ngOnInit():void{

        if(isPlatformBrowser(this.platformId)){
            this.itemtosearch = localStorage.getItem('SearchItem');
        }

        this.http.get('/api/ItemCategories/GetSearch/' + this.itemtosearch + '/').subscribe(data => { this.searchItems = data ; 
            this.setPage(1);
            }, error => console.error(error));
    }

    GotoItem(chosenitem:any)
    {
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('currentItem', chosenitem);
            location.href = "itemspecifics";
        }
        
    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.searchItems.length, page);
 
        // get current page of items
        this.pagedItems = this.searchItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    //Sort functions
    NameSortAZ(){
        if(isPlatformBrowser(this.platformId)){
            this.itemtosearch = localStorage.getItem('SearchItem');
        }

        this.http.get('/api/ItemCategories/GetSearch/' + this.itemtosearch + '/').subscribe(data => { this.searchItems = data ; 
            this.setPage(1);
        }, error => console.error(error));

    }

    NameSortZA(){
        if(isPlatformBrowser(this.platformId)){
            this.itemtosearch = localStorage.getItem('SearchItem');
        }

        this.http.get('/api/ItemCategories/NameSortZA/' + this.itemtosearch + '/').subscribe(data => { this.searchItems = data ; 

            this.setPage(1);
        }, error => console.error(error));
    }

    PriceSortLH(){
        if(isPlatformBrowser(this.platformId)){
            this.itemtosearch = localStorage.getItem('SearchItem');
        }

        this.http.get('/api/ItemCategories/PriceSortLH/' + this.itemtosearch + '/').subscribe(data => { this.searchItems = data ; 

            this.setPage(1);
        }, error => console.error(error));
    }

    PriceSortHL(){
        if(isPlatformBrowser(this.platformId)){
            this.itemtosearch = localStorage.getItem('SearchItem');
        }

        this.http.get('/api/ItemCategories/PriceSortHL/' + this.itemtosearch + '/').subscribe(data => { this.searchItems = data ; 

            this.setPage(1);
        }, error => console.error(error));
    }
}
