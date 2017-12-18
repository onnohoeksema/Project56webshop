import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { RouterModule, Routes } from '@angular/router';

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
    selector: 'AdminUsers',
    templateUrl: './AdminUsers.component.html'
})

export class AdminUsersComponent {


    public User: any //this used to be string[] //= ["Test1", "Test2", "Test3"];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get('/api/Login/GetUsers').subscribe(data => {
            this.User = data;

        }, error => console.error(error));

    }

    
}

interface UserResponds {
    UserId: number;
    Username: string;
    Password: string;

}