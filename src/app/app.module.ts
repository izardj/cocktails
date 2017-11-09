import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { AppRouting } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule } from './cocktail-container/cocktail.module';
import { cocktailRouting } from './cocktail-container/cocktail.routing';
import { SharedModule } from './shared/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    CocktailModule,
    cocktailRouting,
    SharedModule
  ],
  providers: [
    PanierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
