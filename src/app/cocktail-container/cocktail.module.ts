import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
  declarations: [
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  exports: []
})
export class CocktailModule {}
