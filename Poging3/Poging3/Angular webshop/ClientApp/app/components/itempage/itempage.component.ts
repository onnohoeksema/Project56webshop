import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';


@NgModule({
    imports: [
        BrowserModule,
        // Include it under 'imports' in your application module
        // after BrowserModule.
        HttpClientModule,
    ],
})

@Component({
    selector: "itempage",
    templateUrl: "./itempage.component.html"
})

export class ItemPageComponent implements OnInit {

    results: string[];
    // HttpClient needs to be implemented, probably the database connection
    
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<ItemsResponse>(baseUrl + '/api/SampleData/GetAll').subscribe(data => {
                this.results = data.results;
            },
            err => { console.log('Something went wrong!'); }
        );
    }
    
    ngOnInit(): void {
        this.http.get('/api/SampleData/GetAll').subscribe(data => {
            this.results = data['results']; 
            
        });

    }
}

interface ItemsResponse {
    results: string[];
}