import { NgModule } from '@angular/core';
import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { isPlatformBrowser } from '@angular/common/';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";



@Component({
    selector: "location",
    templateUrl: "./location.component.html",
    styleUrls: ['location.component.css']
})

export class LocationComponent implements OnInit {


    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient, private ngZone: NgZone) {}

    title: string = "Our Company's location";
    lat: number = 52.0038988;
    lng: number = 4.380904299999997;
    ngOnInit(): void{

    }

  }