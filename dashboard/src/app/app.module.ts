import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlansFilterComponent } from './plans-filter/plans-filter.component';
import { PlansListComponent } from './plans-list/plans-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlansFilterComponent,
    PlansListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
