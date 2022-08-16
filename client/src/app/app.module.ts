import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ExchangeGridComponent } from './exchange-grid/exchange-grid.component';
import { CompostDividerComponent } from './compost-divider/compost-divider.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeTitleComponent,
    SearchBarComponent,
    ExchangeGridComponent,
    CompostDividerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
