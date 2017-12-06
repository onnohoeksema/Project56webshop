import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { DiceCustomizerComponent } from './components/DiceCustomizer/DiceCustomizer.component';
import { LoginPageComponent } from './components/Login/LoginPage.component';
<<<<<<< HEAD
import { UserDashBoardComponent } from './components/Login/UserDashBoard.component';

=======
import { ItemPageComponent } from './components/itempage/itempage.component';
import { ShoppingCartComponent } from './components/shoppingcart/shoppingcart.component';
import { PaymentRedirectComponent } from './components/paymentredirect/paymentredirect.component';
>>>>>>> b6fc98793baaf91bc0842780986c2d30c4c74294

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        DiceCustomizerComponent,
        HomeComponent,
        LoginPageComponent,
<<<<<<< HEAD
        UserDashBoardComponent
=======
        ItemPageComponent,
        ShoppingCartComponent,
        PaymentRedirectComponent
>>>>>>> b6fc98793baaf91bc0842780986c2d30c4c74294
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'DiceCustomizer', component: DiceCustomizerComponent },
            { path: 'LoginPage', component: LoginPageComponent },
<<<<<<< HEAD
            { path: 'UserDashBoard', component: UserDashBoardComponent },
=======
            { path: 'itempage', component: ItemPageComponent },
            { path: 'shoppingcart', component: ShoppingCartComponent },
            { path: 'paymentredirect', component: PaymentRedirectComponent },
>>>>>>> b6fc98793baaf91bc0842780986c2d30c4c74294
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
