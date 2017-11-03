import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
