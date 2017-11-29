import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'DiceCustomizer',
    templateUrl: './DiceCustomizer.component.html'
})

export class DiceCustomizerComponent {
  
    public diceType = ["D4", "D6", "D8", "D10", "D12", "D20"];
    public diceColor = ["Red", "Green", "Blue", "Orange", "White"];
    public numberColor = ["Red", "Green", "Blue", "Black", "Pink"];
    public dicePattern = ["Gucci", "Panther", "None"];

}

