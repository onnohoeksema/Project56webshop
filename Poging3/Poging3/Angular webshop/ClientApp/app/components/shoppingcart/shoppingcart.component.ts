import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';

@Component({
    selector: 'shoppingcart',
    templateUrl: './shoppingcart.component.html'
})

export class ShoppingCartComponent implements OnInit {
    public cart: Array<Product>;
    public totalPrice: number;
    public itemCount: number;
    public productQuantity: number;

    constructor( @Inject(PLATFORM_ID) private platformId: string, private shoppingCartService: ShoppingCartService) { }   

    ngOnInit() {
        // Update cart
        if (isPlatformBrowser(this.platformId)) {
            this.updateCart();
        }
    }

    // Add product to cart
    addProduct(product: Product): void {
        // Add product to shopping cart
        this.shoppingCartService.addProduct(product);

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
    productInCart(product: Product): number {
        return this.shoppingCartService.productInCart(product);
    }

    // Update cart
    updateCart() {
        // Get cart from shopping cart sevice
        this.cart = this.shoppingCartService.retrieve();

        // Set total price
        this.totalPrice = this.shoppingCartService.calculateCart();

        // Get total items
        this.itemCount = this.cart.length;
    }

    // Cart is empty show spaghet
    cartIsEmpty(): boolean {
        if (isPlatformBrowser(this.platformId)) {
            if (this.cart.length > 0) {
                return false;
            }
        }
        return true;
    }
}