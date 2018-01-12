import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';

@Component({
    selector: 'shoppingcart',
    templateUrl: './shoppingcart.component.html'
})

export class ShoppingCartComponent implements OnInit {
    public cart: Array<Product>;

    constructor(private shoppingCartService: ShoppingCartService) { }   

    ngOnInit() {
        // Retrieve shopping cart
        this.cart = this.shoppingCartService.retrieve();
    }

    // Remove product from shopping cart
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

    // Show/hide remove from cart button
    productInCart(product: Product): number {
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

        //// Set item count
        //this.itemCount = this.cart.length;

        //// Set total price
        //this.totalPrice = this.shoppingCartService.calculateCart();
    }

    // Cart is empty show spaghet
    cartIsEmpty(): boolean {
        if (this.cart.length > 0) {
            return false;
        }
        return true;
    }
}