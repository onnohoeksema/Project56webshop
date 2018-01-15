import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { RouterModule, Routes } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core'; 
import { isPlatformBrowser } from '@angular/common';

import { UserDashBoardComponent } from './UserDashBoard.component';

const routes: Routes = [
    { path: 'UserDashBoard', component: UserDashBoardComponent }
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

@Component({
    selector: 'AccountSettings',
    templateUrl: './AccountSettings.component.html'
})

export class AccountSettingsComponent implements OnInit {

    public city: string;
    public email: string;
    public password: string;
    public street: string;
    public housenumber: number;
    public userdata: any; //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public filteredwishlists: any;
    public loggedinuser: any;
    testBrowser: boolean;
    public productID: any;
    public user: string;

    constructor(@Inject(PLATFORM_ID) private platformId: string, private http: HttpClient) { }

    ngOnInit(): void
    {
        this.testBrowser = isPlatformBrowser(this.platformId);
        if (this.testBrowser) {
        this.loggedinuser = localStorage.getItem('nameofUser')
        }
        this.http.get('/api/UserPage/GetUserData/'+ this.loggedinuser + '/' ).subscribe(data => {
        this.userdata = data;

        }, error => console.error(error));
    }

    ChangeMail()
    {
        this.http.get('/api/UserPage/ChangeMail/'+ this.email + '/' + this.loggedinuser + '/').subscribe(data => {});
        location.reload();
        alert("Email Address has been changed");
    }

    ChangePassword()
    {
        this.http.get('/api/UserPage/ChangePassword/'+ this.password +'/' + this.loggedinuser + '/').subscribe(data => {});
        location.reload();
        alert("Password has been changed");
    }

    ChangeAddress()
    {
        this.http.get('/api/UserPage/ChangeAddress/'+ this.street + '/' + this.loggedinuser + '/').subscribe(data => {});
        location.reload();
        alert("Home Address has been changed");
    }

    ChangeHousenumber()
    {
        this.http.get('/api/UserPage/ChangeHousenumber/' + this.housenumber + '/' + this.loggedinuser + '/').subscribe(data => {});
        location.reload();
        alert("House number has been changed");
    }
    ChangeCity()
    {
        this.http.get('/api/UserPage/ChangeHousenumber/' + this.city + '/' + this.loggedinuser + '/').subscribe(data => {});
        location.reload();
        alert("City has been changed");
    }
}