import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart.model';

export class ShoppingCartService {
    public totalPrice: number = 0;
    public cart: Array<Product>;
    public shoppingCart: Array<CartItem>;

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    // Empty shopping cart
    empty() {
        // New cart
        const newCart = new Array<CartItem>();
        // Save cart
        this.saveNew(newCart);
    }

    ///OLD///
    // Add product to shopping cart
    addProduct(product: Product): void {
        // Retrieve shopping cart
        this.cart = this.retrieve();

        // Add product to array this.cart
        this.cart.push(product);

        // Save cart
        this.save(this.cart);
    }
    ///NEW///
    addProductNew(product: Product, quantity: number) {
        // Retrieve shopping cart
        this.shoppingCart = this.retrieveNew();

        // Add product to array this.cart
        let item = this.shoppingCart.find((p) => p.product.productID == product.productID && p.product.productName == product.productName);
        if (item == undefined) {
            item = new CartItem();
            item.product = product;
            this.shoppingCart.push(item);
        }
        item.quantity += quantity;
        this.shoppingCart = this.shoppingCart.filter((p) => p.quantity > 0)

        // Save cart
        this.saveNew(this.shoppingCart);
    }
    trashProduct(product: Product) {
        // Retrieve shopping cart
        this.shoppingCart = this.retrieveNew();

        let item = this.shoppingCart.find((p) => p.product.productID == product.productID);
        if (item == undefined) {
            item = new CartItem();
            item.product = product;
        }
        item.quantity = 0;

        // Filter products with zero quantity
        this.shoppingCart = this.shoppingCart.filter((p) => p.quantity > 0)

        // Save cart
        this.saveNew(this.shoppingCart);
    }

    ///OLD///
    // Remove product from shopping cart
    removeProduct(product: Product) {
        //// Retrieve shopping cart
        //this.cart = this.retrieve()

        //var index: number = this.productInCart(product);
        //if (index > -1) {
        //    // Remove product from shopping cart
        //    this.cart.splice(index, 1);

        //    // Save cart
        //    this.save(this.cart);
        //}
    }

    ///OLD///
    // Retrieve stored shopping cart
    retrieve(): Array<Product> {
        let cart = new Array<Product>();
        if (isPlatformBrowser(this.platformId)) {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                cart = JSON.parse(storedCart);
            }
        }
        return cart;
    }
    ///NEW///
    retrieveNew(): Array<CartItem> {
        let cart = new Array<CartItem>();
        if (isPlatformBrowser(this.platformId)) {
            const storedCart = localStorage.getItem('shoppingCart');
            if (storedCart) {
                cart = JSON.parse(storedCart);
            }
        }
        return cart;
    }

    // Save shopping cart
    save(products: Array<Product>) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('cart', JSON.stringify(products))
        }
    }
    saveNew(products: Array<CartItem>) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('shoppingCart', JSON.stringify(products))
        }
    }

    // Returns calculated total price in cart
    calculateCart(): number {
        let totalPrice = this.totalPrice;
        this.cart = this.retrieve();

        this.cart.forEach(function (price) {
            totalPrice += price.productPrice; 
        })

        return totalPrice;
    }   

    // Returns product's index in shopping cart, and -1 otherwise
    productInCart(product: Product): boolean {
        ///OLD///
        //var index: number = -1;
        //this.cart.forEach(function (cartP, ind) {
        //    if (cartP.productName == product.productName) {
        //        // Set index to the product's index
        //        index = ind;
        //    }
        //})
        //return index;
        this.shoppingCart = this.retrieveNew();

        for (var i = 0; i < this.shoppingCart.length; i++) {
            if (this.shoppingCart[i].product.productID == product.productID) {
                return true;
            }
        }
        return false;
    }
}