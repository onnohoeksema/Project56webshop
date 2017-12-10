import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';



@Component({
    selector: "itempage",
    templateUrl: "./itempage.component.html"
})

export class ItemPageComponent {
    public forecasts: WeatherForecast[];
    public items: ItemInfo[];
/*
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        }, error => console.error(error));
    }
    */

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/GetAll').subscribe();
    }
  


}
interface ItemInfo {
    productID: number;
    productName: string;
    productPrice: number;
    productStock: number;
    productCategory: string;
    productTag: string;

}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
