import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class PanierService {
  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);

  constructor() { }

  addIngredients(ingredients: Ingredient[]): void {
    const currentValue = this.panier.value;
    if (currentValue && currentValue.length) {
      const panier = currentValue.map(ing => {
        return {
          savedIng: ing,
          addedIng: ingredients.find(i => i.name === ing.name)
        };
      });
      const untouchedPanierIngredients = panier
        .filter(ing => ing.addedIng == null)
        .map(el => el.savedIng);

      const addedIngredients = panier
        .filter(ing => ing.addedIng != null)
        .map(ing => {
          return {
            name: ing.savedIng.name,
            quantity: ing.savedIng.quantity + ing.addedIng.quantity
          };
        });

        const newIngredients = ingredients.filter( ing => {
          return currentValue.find(i => i.name === ing.name) == null;
        });


      this.panier.next([...untouchedPanierIngredients, ...addedIngredients, ...newIngredients]);
    } else {
      this.panier.next(ingredients);
    }
  }

}
