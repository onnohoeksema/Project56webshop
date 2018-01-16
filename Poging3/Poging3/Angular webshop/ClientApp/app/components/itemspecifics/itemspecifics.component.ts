import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { isPlatformBrowser } from '@angular/common/';

import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cart.model';
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
    public averagerating: any
    public currentLogin = ""
    public loggedinuser: any
    testBrowser: boolean;

    // Shopping cart //
    public itemCount: number;
    public totalPrice: number;
    public cart: Array<Product>;
    public shoppingCart: Array<CartItem>;


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

        this.http.get('/api/ItemPage/AverageRating/' + this.chosenitem + '/').subscribe(data => {this.averagerating = data ;
        }, error => console.error(error));

        // Shopping cart //
        // Somebody toucha my spaghet!
        //this.cart = this.shoppingCartService.retrieve();
        //this.itemCount = this.cart.length;
        //this.totalPrice = this.shoppingCartService.calculateCart();

        ///TEST///
        this.updateCart();
        this.http.get('/api/ItemPage/GetAll').subscribe(data => { this.products = data; })
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
    addProduct(product: Product, quantity: number): void {
        this.shoppingCartService.addProductNew(product, quantity);
        
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
    productInCart(product: Product): boolean{
        return this.shoppingCartService.productInCart(product);
    }

    // Update cart
    updateCart() {
        // Retrieve stored cart in order to update the rest
        this.shoppingCart = this.shoppingCartService.retrieveNew();

        //// Set item count
        this.itemCount = this.shoppingCart.map((x) => x.quantity).reduce((p, n) => p + n, 0);

        // Set total price
        this.totalPrice = this.shoppingCart.map((p) => p.quantity * p.product.productPrice).reduce((p,c)=>p+c,0);
    }
        // Add to wishlist
    addtoWishlist(productID: any){

        this.testBrowser = isPlatformBrowser(this.platformId);
        if (this.testBrowser) {
        this.loggedinuser = localStorage.getItem('nameofUser')
        }

        this.http.get('/api/Itempage/AddToWishlist/'+ productID + '/' + this.loggedinuser + '/').subscribe(result => {
            if (result){}

        })
        location.reload()
    }

    isLoggedIn() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    }

}