import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common/';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})



export class HomeComponent implements OnInit{

    public featureditem: any
    public SearchItem: any 

    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient) {}
    
    ngOnInit(): void
    {
        this. http.get('/api/ItemPage/GetRandomItem/').subscribe(data => { this.featureditem = data ;
        }, error => console.error(error));
    }


    search(searchitem : any){
        
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('SearchItem', searchitem);
            location.href = "searchresults";
            
            
        }
    }

    GotoItem(chosenitem:any){
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('currentItem', chosenitem);
            location.href = "itemspecifics";
        }
    }
}
