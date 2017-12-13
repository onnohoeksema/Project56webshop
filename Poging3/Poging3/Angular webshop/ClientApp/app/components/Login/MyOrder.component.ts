import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { UserDashBoardComponent } from './UserDashBoard.component';

const routes: Routes = [
    { path: 'UserDashBoard', component: UserDashBoardComponent }
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//Tot hier copieren als je het wil gebruiken, daarna de Import {---} veranderen naar jou adress en de Route changen.
@Component({
    selector: 'MyOrder',
    templateUrl: './MyOrder.component.html'
})

export class MyOrderComponent {
}