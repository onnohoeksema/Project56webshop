import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

@Component({
    selector: 'AdminComments',
    templateUrl: './AdminComments.component.html'
})

export class AdminCommentsComponent implements OnInit{
  
    constructor(private http: HttpClient) { }

   ngOnInit():void{

   }



}