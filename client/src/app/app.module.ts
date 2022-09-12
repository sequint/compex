import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HomeModule } from './pages/home/home.module';
import { HomePage } from './pages/home/home.component';
import { MarketplacePage } from './pages/marketplace/marketplace.component';
import { MarketplaceModule } from './pages/marketplace/marketplace.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MarketplacePage,
    NavBarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    MarketplaceModule,
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'marketplace', component: MarketplacePage },
    ])
  ],
  exports: [
    RouterModule,
    NavBarComponent,
    SearchBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
