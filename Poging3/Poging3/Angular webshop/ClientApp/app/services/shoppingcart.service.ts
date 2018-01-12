import { Product } from '../models/product.model';

export class ShoppingCartService {
    public totalPrice: number = 0;
    public cart: Array<Product>;

    constructor() { }

    // Empty shopping cart
    empty() {
        // New cart
        const newCart = new Array<Product>();
        // Save cart
        this.save(newCart);
    }

    // Retrieve stored shopping cart
    retrieve(): Array<Product> {
        let cart = new Array<Product>();
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }

        return cart;
    }

    // Save shopping cart
    save(products: Array<Product>) {
        localStorage.setItem('cart', JSON.stringify(products))
    }

    calculateCart(): number {
        let totalPrice = this.totalPrice;
        this.cart = this.retrieve();

        this.cart.forEach(function (price) {
            totalPrice += price.productPrice; 
        })

        return totalPrice;
    }   
}