import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { CartItem } from '../../models/cart.model';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';


@Component({
    selector: 'DiceCustomizer',
    templateUrl: './DiceCustomizer.component.html'
})

export class DiceCustomizerComponent implements OnInit {
    
        public dcdicetypes: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
        public dcdicetypesoutofstock: any
        public dcdicecolors: any
        public dcnumbercolors: any
        public dcdicepatterns: any
        public dcdicecolorsoutofstock: any
        public dcnumbercolorsoutofstock: any
        public dcdicepatternsoutofstock: any
        public shoppingCart: Array<CartItem>;

        constructor(private http: HttpClient, private shoppingCartService: ShoppingCartService) { }

        ngOnInit(): void {

            this.http.get('/api/DiceCustomizer/GetdcDiceTypes').subscribe(data => { this.dcdicetypes = data ; 
                
                }, error => console.error(error));
                this.http.get('/api/DiceCustomizer/GetdcDiceTypesOutOfStock').subscribe(data => { this.dcdicetypesoutofstock = data ; 
                
                }, error => console.error(error));

                this.http.get('/api/DiceCustomizer/GetdcDiceColors').subscribe(data1 => { this.dcdicecolors = data1 ; 
                    
                    }, error => console.error(error));
                this.http.get('/api/DiceCustomizer/GetdcDiceColorsOutOfStock').subscribe(data1 => { this.dcdicecolorsoutofstock = data1 ; 
                
                }, error => console.error(error));
                this.http.get('/api/DiceCustomizer/GetdcNumberColors').subscribe(data2 => { this.dcnumbercolors = data2 ; 
                        
                    }, error => console.error(error));
                this.http.get('/api/DiceCustomizer/GetdcNumberColorsOutOfStock').subscribe(data2 => { this.dcnumbercolorsoutofstock = data2 ; 
                        
                    }, error => console.error(error));
                this.http.get('/api/DiceCustomizer/GetdcDicePatterns').subscribe(data3 => { this.dcdicepatterns = data3 ; 
                        
                    }, error => console.error(error));
                this.http.get('/api/DiceCustomizer/GetdcDicePatternsOutOfStock').subscribe(data3 => { this.dcdicepatternsoutofstock = data3 ; 
                        
                }, error => console.error(error));

                this.shoppingCart = this.shoppingCartService.retrieveNew();
        }
        mydcDiceType = this.dcdicetypes;
        mydcDiceColor = this.dcdicecolors;
        mydcNumberColor = this.dcnumbercolors;
        mydcDicePattern = this.dcdicepatterns;

        addDice() {
            var item = new CartItem();
            item.product = {
                productID: 0,
                productName: 'Custom Dice: ' + this.mydcDiceType + ', ' + this.mydcDiceColor + ', ' + this.mydcNumberColor + ', ' + this.mydcDicePattern,
                productPrice: 1.49,
                productStock: 69,
                productCategory: 'Dice',
                productTag: this.mydcDiceType
            };

            this.shoppingCartService.addProductNew(item.product, 1);

            this.mydcDiceType = undefined;
            this.mydcDiceColor = undefined;
            this.mydcNumberColor = undefined;
            this.mydcDicePattern = undefined;
        }
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