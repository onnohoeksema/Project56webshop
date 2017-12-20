import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';


@Component({
    selector: 'DiceCustomizer',
    templateUrl: './DiceCustomizer.component.html'
})

export class DiceCustomizerComponent implements OnInit {
    
        public dicetypes: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    
        constructor(private http: HttpClient) {}
        
        onClickMe(){
            this.http.get('/api/DiceCustomizer/GetDiceTypes').subscribe(data => { this.dicetypes = data ; 
            
            }, error => console.error(error));
        }
        ngOnInit(): void {
    
        }
        myDiceType = this.dicetypes;
    }
    
    
    interface ItemsResponse {
        dicetypeID: number;
        dicetypeName: string;
        dicetypeStock: number;
        
        dicecolorID: number;
        dicecolorName: string;
        dicecolorStock: number;

        numbercolorID: number;
        numbercolorName: string;
        numbercolorStock: number;
        
        dicepatternID: number;
        dicepatternName: string;
        dicepatternStock: number;
    }