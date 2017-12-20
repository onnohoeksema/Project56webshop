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
    
        public dcdicetypes: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
        public dcdicecolors: any
        public dcnumbercolors: any
        public dcdicepatterns: any

        constructor(private http: HttpClient) {}
        
       
        
        ngOnInit(): void {

            this.http.get('/api/DiceCustomizer/GetdcDiceTypes').subscribe(data => { this.dcdicetypes = data ; 
                
                }, error => console.error(error));
    
                this.http.get('/api/DiceCustomizer/GetdcDiceColors').subscribe(data1 => { this.dcdicecolors = data1 ; 
                    
                    }, error => console.error(error));
                
                this.http.get('/api/DiceCustomizer/GetdcNumberColors').subscribe(data2 => { this.dcnumbercolors = data2 ; 
                        
                    }, error => console.error(error));
    
                this.http.get('/api/DiceCustomizer/GetdcDicePatterns').subscribe(data3 => { this.dcdicepatterns = data3 ; 
                        
                    }, error => console.error(error));
        }
        mydcDiceType = this.dcdicetypes;
        mydcDiceColor = this.dcdicecolors;
        mydcNumberColor = this.dcnumbercolors;
        mydcDicePattern = this.dcdicepatterns;
    }
    
    
    interface ItemsResponse {
        dcdicetypeID: number;
        dcdicetypeName: string;
        dcdicetypeStock: number;
        
        dcdicecolorID: number;
        dcdicecolorName: string;
        dcdicecolorStock: number;

        dcnumbercolorID: number;
        dcnumbercolorName: string;
        dcnumbercolorStock: number;
        
        dcdicepatternID: number;
        dcdicepatternName: string;
        dcdicepatternStock: number;
    }