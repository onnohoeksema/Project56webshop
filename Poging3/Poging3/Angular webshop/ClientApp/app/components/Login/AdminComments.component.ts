import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { RouterModule, Routes } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core'; 

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
    selector: 'AdminComments',
    templateUrl: './AdminComments.component.html'
})

export class AdminCommentsComponent implements OnInit{
    ShowEditTable: boolean = false;
    EditRowID: any = '';
    public comments: any;
    
    constructor(private http: HttpClient) { }

   ngOnInit():void{
    this.http.get('/api/AdminPage/GetComments').subscribe(data => { this.comments = data;
    })
   }

    Edit(val:any){
        this.EditRowID = val;
    }

}