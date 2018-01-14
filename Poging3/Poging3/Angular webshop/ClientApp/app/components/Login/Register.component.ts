import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LoginPageComponent } from './LoginPage.component';

const routes: Routes = [
    { path: 'LoginPage', component: LoginPageComponent },
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

@Component({
    selector: 'Register',
    templateUrl: './Register.component.html'
})

export class RegisterComponent {
    loading: boolean = false;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    street: string;
    housenumber: string;
    zipcode: string;
    city: string;

    constructor(private http: HttpClient) { }

    public register() {
        // Loading animation lol
        this.loading = true;

        this.http.get('/api/Login/CreateUser/' + this.email + '/' + this.username + '/' + this.password + '/' + this.firstname + '/' + this.lastname + '/' + this.street + '/' + this.housenumber + '/' + this.zipcode + '/' + this.city + '/').subscribe(result => {
            if(result){
                alert("Your registration is succesful")
            }
            location.href = "LoginPage"
        })

    

        
    }
}