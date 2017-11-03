import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'https://assets.epicurious.com/photos/560d78877b55306961bf340c/1:1/w_600%2Ch_600/242527.jpg', 'Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.'),
    new Cocktail('Margarita', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Margarita.jpg/150px-Margarita.jpg', 'A margarita is a cocktail consisting of tequila, triple sec, and lime or lemon juice, often served with salt or sugar on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.'),
    new Cocktail('Sour', 'https://cdn.liquor.com/wp-content/uploads/2009/11/italian-grape-sour.jpg', 'A sour is a traditional family of mixed drinks. Common examples of sours are the margarita and the sidecar. Sours belong to one of the old families of original cocktails and are described by Jerry Thomas in his 1862 book How to Mix Drinks.')
  ];

  constructor() { }

  ngOnInit() {
  }

}
