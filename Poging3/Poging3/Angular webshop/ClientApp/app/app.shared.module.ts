import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { DiceCustomizerComponent } from './components/DiceCustomizer/DiceCustomizer.component';
import { LoginPageComponent } from './components/Login/LoginPage.component';
import { RegisterComponent } from './components/Login/Register.component';
import { UserDashBoardComponent } from './components/Login/UserDashBoard.component';
import { MyOrderComponent } from './components/Login/MyOrder.component';
import { PurchaseHistoryComponent } from './components/Login/PurchaseHistory.component';
import { ItemPageComponent } from './components/itempage/itempage.component';
import { ShoppingCartComponent } from './components/shoppingcart/shoppingcart.component';
import { PaymentRedirectComponent } from './components/paymentredirect/paymentredirect.component';
import { WishlistComponent } from './components/Login/Wishlist.component';
import { AccountSettingsComponent } from './components/Login/AccountSettings.component';
import { AdminDashBoardComponent } from './components/Login/AdminDashBoard.component';
import { AdminUsersComponent } from './components/Login/AdminUsers.component';
import { AdminProductsComponent } from './components/Login/AdminProducts.component';
import { AdminStatisticsComponent } from './components/Login/AdminStatistics.component';
import { AdminCommentsComponent } from './components/Login/AdminComments.component';
import { ItemCategoriesComponent } from './components/itemcategories/itemcategories.component';
import { ItemSpecificsComponent } from './components/itemspecifics/itemspecifics.component';
import { SearchResultsComponent } from './components/searchresults/searchresults.component';
import { LocationComponent } from './components/location/location.component';

import { AuthGuardAd } from './guards/auth.guard.admin';
import { AuthGuard } from './guards/auth.guard';
import { ShoppingCartService} from './services/shoppingcart.service';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        DiceCustomizerComponent,
        HomeComponent,
        LoginPageComponent,
        RegisterComponent,
        UserDashBoardComponent,
        PurchaseHistoryComponent,
        MyOrderComponent,
        ItemPageComponent,
        ShoppingCartComponent,
        PaymentRedirectComponent,
        WishlistComponent,
        AccountSettingsComponent,
        AdminDashBoardComponent,
        AdminUsersComponent,
        AdminProductsComponent,
        AdminStatisticsComponent,
        AdminCommentsComponent,
        ItemCategoriesComponent,
        ItemSpecificsComponent,
        SearchResultsComponent,
        LocationComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDfLHLvsm822_pI3gw8xaV4zEMgpGtdj-Y'
          }),
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        HttpModule,
        //HttpClient,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'DiceCustomizer', component: DiceCustomizerComponent },
            { path: 'LoginPage', component: LoginPageComponent },
            { path: 'Register', component: RegisterComponent },
            { path: 'UserDashBoard', component: UserDashBoardComponent, canActivate: [AuthGuard] },
            { path: 'AdminDashBoard', component: AdminDashBoardComponent, canActivate: [AuthGuardAd] },
            { path: 'MyOrder', component: MyOrderComponent },
            { path: 'PurchaseHistory', component: PurchaseHistoryComponent },
            { path: 'itempage', component: ItemPageComponent },
            { path: 'shoppingcart', component: ShoppingCartComponent },
            { path: 'paymentredirect', component: PaymentRedirectComponent },
            { path: 'Wishlist', component: WishlistComponent },
            { path: 'AccountSettings', component: AccountSettingsComponent },
            { path: 'AdminUsers', component: AdminUsersComponent },
            { path: 'AdminProducts', component: AdminProductsComponent },
            { path: 'AdminStatistics', component: AdminStatisticsComponent },
            { path: 'AdminComments', component: AdminCommentsComponent},
            { path: 'itemcategories', component: ItemCategoriesComponent },
            { path: 'itemspecifics', component: ItemSpecificsComponent },
            { path: 'searchresults', component: SearchResultsComponent},
            { path: 'location', component: LocationComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        AuthGuard,
        AuthGuardAd,
        ShoppingCartService
    ]
})
export class AppModuleShared {
}
