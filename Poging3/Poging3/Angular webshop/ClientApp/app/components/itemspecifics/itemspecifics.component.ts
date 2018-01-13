import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { isPlatformBrowser } from '@angular/common/';

import {Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';

@Component({
    selector: "itemspecifics",
    templateUrl: "./itemspecifics.component.html"
})

export class ItemSpecificsComponent implements OnInit {
    //Item page
    public products: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public finalitem: any
    public itemcomments: any
    chosenitem: any
    public productID: any;
    public user: string;
    public rating: number;
    public comment: string;
    public loading: boolean;

    // Shopping cart //
    public itemCount: number;
    public totalPrice: number;
    public cart: Array<Product>;


    constructor( @Inject(PLATFORM_ID) private platformId: string, private http: HttpClient, private shoppingCartService: ShoppingCartService) { }

    ngOnInit(): void {
        // Item page
        /*
        this.http.get('/api/ItemPage/GetAll').subscribe(data => { this.products = data ; 
        
        }, error => console.error(error));
        */
        if(isPlatformBrowser(this.platformId)){
            this.chosenitem = localStorage.getItem('currentItem');
        }

        this.http.get('/api/ItemPage/GetItem/' + this.chosenitem + '/').subscribe(data => { this.finalitem = data ; 
        
        }, error => console.error(error));

        this.http.get('/api/ItemPage/GetItemComments/' + this.chosenitem + '/').subscribe(data => { this.itemcomments = data ; 
        
        }, error => console.error(error));


        // Shopping cart //
        // Somebody toucha my spaghet!
        this.cart = this.shoppingCartService.retrieve();
        this.itemCount = this.cart.length;
        this.totalPrice = this.shoppingCartService.calculateCart();
    }

    public submitComment()
    {
        this.productID = localStorage.getItem('currentItem');
        this.loading = true;
        this.http.get('/api/ItemPage/SubmitComment/' + this.productID + '/' + this.user + '/' + this.rating + '/' + this.comment +'/').subscribe(result => {
            if(result){
                location.href = "/Home";
            }
        })
    }

    GoToItem(chosenitem:any)
    {
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('currentItem', chosenitem);
            location.href = "itemspecifics";
        }
            
    }

    /// SHOPPING CART ///

    // Add product to cart
    addProduct(product: Product): void {
        // Add product to array this.cart
        this.cart.push(product);

        // Save cart
        this.shoppingCartService.save(this.cart);

        // Update cart
        this.updateCart();
    }

    // Remove product from cart
    removeProduct(product: Product) {
        var index: number = this.productInCart(product);
        if (index > -1) {
            // Remove product from shopping cart
            this.cart.splice(index, 1);

            // Save cart
            this.shoppingCartService.save(this.cart);
        }

        //// Update cart
        this.updateCart();
    }

    // View shopping cart
    viewCart() {
        location.href = "shoppingcart";
    }

    // Empty shopping cart
    emptyCart() {
        // Empty shopping cart
        this.shoppingCartService.empty();

        // Update cart
        this.updateCart();
    }

    // Show/hide remove from cart button
    productInCart(product: Product): number{
        // Let's check if product is in this.cart
        var index: number = -1;
        this.cart.forEach(function (findYo, eyoo) {
            if (findYo.productName == product.productName) {
                // Set index to the product's index
                index = eyoo;
            }
        })
        return index;
    }

    // Update cart
    updateCart() {
        // Get cart from shopping cart sevice
        this.cart = this.shoppingCartService.retrieve();

        // Set item count
        this.itemCount = this.cart.length;

        // Set total price
        this.totalPrice = this.shoppingCartService.calculateCart();
    }
    
}