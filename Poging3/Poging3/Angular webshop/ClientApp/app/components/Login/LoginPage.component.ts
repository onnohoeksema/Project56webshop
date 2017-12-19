import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
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
    selector: 'LoginPage',
    templateUrl: './LoginPage.component.html'
})

export class LoginPageComponent implements OnInit {
    username: string;
    password: string;
    res: any;

    constructor(private http: Http) { }

    ngOnInit(): void { }

    public login() {
        this.http.get('/api/Login/GetUser/' + this.username + '/' + this.password).subscribe(data =>
            this.res = data.toString()
        )

        if (this.username == "admin" && this.password == "admin") {
            location.href = "AdminDashBoard";
        }
        else if (this.res != null && this.res.length > 0) {
            location.href = "UserDashBoard";
        }
    }
}

