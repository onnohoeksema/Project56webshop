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
    }, error => console.error(error))
   };

    UpdateComment(commentid: any, productName: any, userName: any, comment: any, rating: any, approved: any)
    {
        this.http.get('/api/AdminPage/UpdateComment/'+ commentid + '/' + productName + '/' + userName + '/' + comment + '/' + rating + '/' + approved + '/').subscribe(data =>     {
            if(data){
                
        }
    })
    }

    CommentApproved(commentid: any)
    {
        this.http.get('/api/AdminPage/CommentToApproved/' + commentid + '/').subscribe(data => { if(data){}
        })
        location.reload();
    }
        
    CommentNotApproved(commentid: any)
    {
        this.http.get('/api/AdminPage/CommentNotApproved/' + commentid + '/').subscribe(data => { if(data){}
        })
        location.reload();
    }

    Edit(val:any){
        this.EditRowID = val;
    }

}