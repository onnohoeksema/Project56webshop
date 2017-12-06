import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserDashBoardComponent } from './UserDashBoard.component';

@NgModule({
    declarations: [
        UserDashBoardComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'UserDashBoard', component: UserDashBoardComponent }
            
        ])
    ]
    
})


@Component({
    selector: 'LoginPage',
    templateUrl: './LoginPage.component.html'
})

export class LoginPageComponent {
}

