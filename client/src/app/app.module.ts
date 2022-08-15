import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { ExchangeGridComponent } from './exchange-grid/exchange-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeTitleComponent,
    ExchangeGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
