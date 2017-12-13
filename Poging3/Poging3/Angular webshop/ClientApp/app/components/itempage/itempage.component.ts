import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';

@Component({
    selector: "itempage",
    templateUrl: "./itempage.component.html"
})

export class ItemPageComponent implements OnInit {

    results: string[];
    // HttpClient needs to be implemented, probably the database connection
    //HttpClient has been implemented
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<ItemsResponse>(baseUrl + '/api/SampleData/GetAll').subscribe(data => {
                this.results = data.results;
            },
            err => { console.log('Something went wrong!'); }
        );
    }
    
    ngOnInit(): void {
        this.http.get('/api/SampleData/GetAll').subscribe(data => {
            this.results = (data as any)['results']; 
            
        });

    }
}
/*

export class ItemPageComponent implements OnInit {

    results: string[];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<ItemsResponse>('/api/TestMania/GetAll').subscribe(data => { this.results = data.results });
    }
    
}
*/
interface ItemsResponse {
    results: string[];
}