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

    public userdata: any //this used to be string[] //= ["Test1", "Test2", "Test3"];
    public filteredwishlists: any
    public loggedinuser: any
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

}