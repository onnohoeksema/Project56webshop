import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { RouterModule, Routes } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core'; 
import { isPlatformBrowser } from '@angular/common';

import { UserDashBoardComponent } from './UserDashBoard.component';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';

const routes: Routes = [
    { path: 'UserDashBoard', component: UserDashBoardComponent },
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//Tot hier copieren als je het wil gebruiken, daarna de Import {---} veranderen naar jou adress en de Route changen.
@Component({
    selector: 'AdminOrderStatus',
    templateUrl: './AdminOrderStatus.component.html'
})

export class AdminOrderStatusComponent {
    public adminorderstatuses: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public filteradminorderstatuses: any
    public loggedinuser: any
    testBrowser: boolean;
    public productID: any;
    public statustypes: any;
    public user: string;

      // Shopping cart //
      public itemCount: number;
      public totalPrice: number;
      public cart: Array<Product>;

    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient, private shoppingCartService: ShoppingCartService) { }

    ngOnInit(): void {

        this.testBrowser = isPlatformBrowser(this.platformId);
        if (this.testBrowser) {
        this.loggedinuser = localStorage.getItem('nameofUser')
        }
        this.http.get('/api/AdminPage/GetOrderStatus/').subscribe(data => {
        this.adminorderstatuses = data;

        }, error => console.error(error));

        this.http.get('/api/AdminPage/GetStatustypes/').subscribe(data => {
            this.statustypes = data;
        })
    }

    ChangeStatus(orderid: any)
    {
        this.http.get('/api/AdminPage/ChangeOrderStatus/' + orderid + '/').subscribe(data => {
            
    
            })
            location.reload();

    }
        /// SHOPPING CART ///


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
    //productInCart(product: Product): number{
    //    return this.shoppingCartService.productInCart(product);
    //}

    // Update cart
    updateCart() {
        // Retrieve stored cart in order to update the rest
        this.cart = this.shoppingCartService.retrieve();

        // Set item count
        this.itemCount = this.cart.length;

        // Set total price
        this.totalPrice = this.shoppingCartService.calculateCart();
    }
}