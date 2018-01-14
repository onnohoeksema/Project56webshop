import { NgModule } from '@angular/core';
import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { UserDashBoardComponent } from './UserDashBoard.component';
import { RegisterComponent } from './Register.component';

const routes: Routes = [
    { path: 'UserDashBoard', component: UserDashBoardComponent },
    { path: 'Register', component: RegisterComponent }
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//Tot hier copieren als je het wil gebruiken, daarna de Import {---} veranderen naar jou adress en de Route changen.
@Component({
    selector: 'LoginPage',
    templateUrl: './LoginPage.component.html'
})

export class LoginPageComponent implements OnInit {
    username: string;
    password: string;
    res: any;
    loading: boolean = false;
    testBrowser: boolean;

    constructor(private http: Http, @Inject(PLATFORM_ID) private platformId: string) { }

    ngOnInit(): void {
        this.testBrowser = isPlatformBrowser(this.platformId);
        if (this.testBrowser) {
            this.isLoggedIn();
        }
    }

    public login() {
        // Loading animation lol
         this.loading = true;

        // User
        this.http.get('/api/Login/GetUser/' + this.username + '/' + this.password).subscribe(
            result => {
                if (result) {
                    location.href = "UserDashBoard";
                    localStorage.setItem('currentUser', JSON.stringify(result));
                    localStorage.setItem('nameofUser', this.username);
                }
            }
        )

        // Admin
        if (this.username == "admin" && this.password == "admin") {
            location.href = "AdminDashBoard";

        }

        // Redirects to login page when incorrect credentials
        else {
            location.href = "LoginPage";
            // Missing error message
        }
    }

    isLoggedIn() {
        if (localStorage.getItem('currentUser')) {
            this.currentLogin = "YES"
        }
        else {
            this.currentLogin = "NO"
        }
    }

    public currentLogin = ""
}

