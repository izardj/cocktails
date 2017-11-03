import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail = new Cocktail('Mojito', 'https://assets.epicurious.com/photos/560d78877b55306961bf340c/1:1/w_600%2Ch_600/242527.jpg', 'Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.');

  constructor() { }

  ngOnInit() {
  }

}
