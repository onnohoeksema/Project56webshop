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
import { UserDashBoardComponent } from './components/Login/UserDashBoard.component';
import { MyOrderComponent } from './components/Login/MyOrder.component';
import { PurchaseHistoryComponent } from './components/Login/PurchaseHistory.component';
import { ItemPageComponent } from './components/itempage/itempage.component';
import { ShoppingCartComponent } from './components/shoppingcart/shoppingcart.component';
import { PaymentRedirectComponent } from './components/paymentredirect/paymentredirect.component';
import { WatchListComponent } from './components/Login/WatchList.component';
import { AccountSettingsComponent } from './components/Login/AccountSettings.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        DiceCustomizerComponent,
        HomeComponent,
        LoginPageComponent,
        UserDashBoardComponent,
        PurchaseHistoryComponent,
        MyOrderComponent,
        ItemPageComponent,
        ShoppingCartComponent,
        PaymentRedirectComponent,
        WatchListComponent,
        AccountSettingsComponent
    ],
    imports: [
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
            { path: 'UserDashBoard', component: UserDashBoardComponent },
            { path: 'MyOrder', component: MyOrderComponent },
            { path: 'PurchaseHistory', component: PurchaseHistoryComponent },
            { path: 'itempage', component: ItemPageComponent },
            { path: 'shoppingcart', component: ShoppingCartComponent },
            { path: 'paymentredirect', component: PaymentRedirectComponent },
            { path: 'WatchList', component: WatchListComponent },
            { path: 'AccountSettings', component: AccountSettingsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
