import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    public featureditem: any

    constructor(private http: HttpClient) {}

    ngOnInit(): void
    {
        this. http.get('/api/ItemPage/GetRandomItem/').subscribe(data => { this.featureditem = data ;
        }, error => console.error(error));
    }
}
