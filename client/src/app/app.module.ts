import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeTitleComponent } from './pages/home/components/home-title/home-title.component';
import { ExchangeGridComponent } from './pages/home/components/exchange-grid/exchange-grid.component';
import { CompostDividerComponent } from './pages/home/components/compost-divider/compost-divider.component';
import { HomePage } from './pages/home/home.component';
import { MarketplacePage } from './pages/marketplace/marketplace.component';
import { ExchangeListComponent } from './pages/marketplace/components/exchange-list/exchange-list.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeTitleComponent,
    ExchangeGridComponent,
    CompostDividerComponent,
    ExchangeListComponent,
    SearchBarComponent,
    HomePage,
    MarketplacePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'marketplace', component: MarketplacePage },
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
