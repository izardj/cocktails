import { Component } from '@angular/core';

import { Cocktail } from './cocktail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cocktail = new Cocktail('mojito');
}
