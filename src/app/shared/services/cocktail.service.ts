import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.initCocktails();
  }

  initCocktails(): void {
    this.http.get<Cocktail[]>('https://cocktails-525d8.firebaseio.com/cocktails.json').subscribe( cocktails => {
      this.cocktails.next(cocktails);
    });
  }

  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails
      .filter(cocktails => cocktails != null)
      .map((cocktails: Cocktail[]) => cocktails[index]);
  }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push(new Cocktail(
      cocktail.name,
      cocktail.img,
      cocktail.desc,
      cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))
    ));
    this.cocktails.next(cocktails);
  }

  editCocktail(editCocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map( c => c.name ).indexOf(editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
  }

}
