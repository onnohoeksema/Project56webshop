﻿import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { LoginPageComponent } from './LoginPage.component';

const routes: Routes = [
    { path: 'LoginPage', component: LoginPageComponent },
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//Tot hier copieren als je het wil gebruiken, daarna de Import {---} veranderen naar jou adress en de Route changen.
@Component({
    selector: 'AdminDashBoard',
    templateUrl: './AdminDashBoard.component.html'
})

export class AdminDashBoardComponent {
    constructor(private router: Router) { }

    logout() {
        localStorage.removeItem('currentAdmin');
        this.router.navigate(['LoginPage']);
    }
}