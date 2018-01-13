import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../models/product.model';

export class ShoppingCartService {
    public totalPrice: number = 0;
    public cart: Array<Product>;

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    // Empty shopping cart
    empty() {
        // New cart
        const newCart = new Array<Product>();
        // Save cart
        this.save(newCart);
    }

    // Add product to shopping cart
    addProduct(product: Product): void {
        // Retrieve shopping cart
        this.cart = this.retrieve();

        // Add product to array this.cart
        this.cart.push(product);

        // Save cart
        this.save(this.cart);
    }

    // Remove product from shopping cart
    removeProduct(product: Product) {
        // Retrieve shopping cart
        this.cart = this.retrieve()

        var index: number = this.productInCart(product);
        if (index > -1) {
            // Remove product from shopping cart
            this.cart.splice(index, 1);

            // Save cart
            this.save(this.cart);
        }
    }

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

    // Save shopping cart
    save(products: Array<Product>) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('cart', JSON.stringify(products))
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
    productInCart(product: Product): number {
        var index: number = -1;
        this.cart.forEach(function (cartP, ind) {
            if (cartP.productName == product.productName) {
                // Set index to the product's index
                index = ind;
            }
        })
        return index;
    }
}