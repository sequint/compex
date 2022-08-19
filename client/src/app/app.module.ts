import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeTitleComponent } from './pages/home/components/home-title/home-title.component';
import { ExchangeGridComponent } from './pages/home/components/exchange-grid/exchange-grid.component';
import { CompostDividerComponent } from './pages/home/components/compost-divider/compost-divider.component';
import { Home } from './pages/home/home.component';
import { Marketplace } from './pages/marketplace/marketplace.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeTitleComponent,
    ExchangeGridComponent,
    CompostDividerComponent,
    Home,
    Marketplace
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: Home },
      { path: 'marketplace', component: Marketplace },
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
