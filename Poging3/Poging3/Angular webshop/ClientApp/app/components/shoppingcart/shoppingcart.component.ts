import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cart.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'shoppingcart',
    templateUrl: './shoppingcart.component.html'
})

export class ShoppingCartComponent implements OnInit {
    public cart: Array<Product>;
    public shoppingCart: Array<CartItem>;
    public totalPrice: number;
    public productPrice: number;
    public itemCount: number;
    public productQuantity: number;
    public cartcontents: string;

    constructor( @Inject(PLATFORM_ID) private platformId: string, private http: HttpClient, private shoppingCartService: ShoppingCartService) { }   
    //retrieving userdata
    public loggedinuser: any
    testBrowser: boolean;

    ngOnInit() {
        // Update cart
        if (isPlatformBrowser(this.platformId)) {
            this.updateCart();
        }
    }

    // Add product to cart
    addProduct(product: Product, quantity: number): void {
        // Add product to shopping cart
        this.shoppingCartService.addProductNew(product, quantity);

        // Update cart
        this.updateCart();
    }

    // Trash product from shopping cart
    trashProduct(product: Product) {
        this.shoppingCartService.trashProduct(product);

        // Update cart
        this.updateCart();
    }

    // Remove product from shopping cart
    removeProduct(product: Product) {
        // Remove product from shopping cart
        this.shoppingCartService.removeProduct(product);

        //// Update cart
        this.updateCart();
    }

    // Show/hide remove from cart button
    //productInCart(product: Product): number {
    //    return this.shoppingCartService.productInCart(product);
    //}

    // Update cart
    updateCart() {
        // Get cart from shopping cart sevice
        this.shoppingCart = this.shoppingCartService.retrieveNew();

        // Set product's price
        this.productPrice = this.shoppingCart.map((p) => p.quantity * p.product.productPrice).reduce((p, n) => p + n, 0);

        // Set total price
        this.totalPrice = this.shoppingCart.map((p) => p.quantity * p.product.productPrice).reduce((p, c) => p + c, 0);

        // Get total items
        this.itemCount = this.shoppingCart.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    }
    calcProdCost(product: CartItem): number {
        let index: number;
        index = this.shoppingCart.indexOf(product);

        return this.shoppingCart[index].quantity * this.shoppingCart[index].product.productPrice;
    }

    // Cart is empty show spaghet
    cartIsEmpty(): boolean {
        if (isPlatformBrowser(this.platformId)) {
            if (this.shoppingCart.length > 0) {
                return false;
            }
        }
        return true;
    }

    //Order items
    OrderItems()
    {
        //drie dingen nodig: username, producten en datum. Datum komt vanuit Controller
        //Username komt uit de ingelogde user > localstorage
        //producten komen uit shopping cart
        // Backend is klaar nu
        //Here we go

        this.testBrowser = isPlatformBrowser(this.platformId);
        if (this.testBrowser) {
            this.loggedinuser = localStorage.getItem('nameofUser')
        }
        this.cartcontents = JSON.stringify(this.shoppingCart);


        // Send to database
        this.http.get('/api/ShoppingCart/OrderItems/' + this.loggedinuser + '/' + this.cartcontents + '/').subscribe(data => { })
        alert("Your order has been placed")

        // Empty chopping cart when ordered
        this.shoppingCartService.empty();
        this.updateCart();
    }
}