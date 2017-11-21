import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'DiceCustomizer',
    templateUrl: './DiceCustomizer.component.cshtml'
})
export class FetchDataComponent {
    public DiceCustomizer: dicecustomizer[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/dicecustomizer').subscribe(result => {
            this.DiceCustomizer = result.json() as dicecustomizer[];
        }, error => console.error(error));
    }
}

interface dicecustomizer {
    chickenNuggets69: string
}