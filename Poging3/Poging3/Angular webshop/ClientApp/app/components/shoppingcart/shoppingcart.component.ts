import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cart.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';

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

    constructor( @Inject(PLATFORM_ID) private platformId: string, private shoppingCartService: ShoppingCartService) { }   

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
}