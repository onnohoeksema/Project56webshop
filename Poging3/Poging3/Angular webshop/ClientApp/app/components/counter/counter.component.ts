import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public productID: number;
    public user: string;
    public rating: number;
    public comment: string;
    public loading: boolean;

    constructor(private http: HttpClient) { }

    public incrementCounter() {
        this.currentCount++;
    }

    public submitComment()
    {
        this.loading = true;
        this.http.get('/api/ItemPage/SubmitComment/' + this.productID + '/' + this.user + '/' + this.rating + '/' + this.comment +'/').subscribe(result => {
            if(result){
                location.href = "/Home";
            }
        })
    }

}
