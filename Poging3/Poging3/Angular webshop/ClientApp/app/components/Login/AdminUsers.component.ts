﻿import { NgModule } from '@angular/core';
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
    ShowEditTable: boolean = false;
    EditRowID: any = '';

    public users: any //this used to be string[] //= ["Test1", "Test2", "Test3"];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get('/api/AdminPage/GetUsers').subscribe(data => {
            this.users = data;

        }, error => console.error(error));

    }

    ChangeUserData(UserID: any, Password: any, UserName: any, Email: any, FirstName: any, LastName: any, Street: any, ZipCode: any, City: any)
    {
        this.http.get('/api/AdminPage/ChangeUserData/' + UserID + '/' + Password + '/' + UserName + '/' + Email + '/' + FirstName + '/' + LastName + '/' + Street + '/' + ZipCode + '/' + City + '/').subscribe(result => {
            if(result){
               
            }
            alert("User has been modified")
            location.reload();
        })
    }
    
    Edit(val:any){
        this.EditRowID = val;
    } 
}

interface UserResponds {
    UserId: number;
    Username: string;
    Password: string;

}