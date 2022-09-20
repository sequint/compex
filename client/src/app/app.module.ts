import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { MarketplaceModule } from './pages/marketplace/marketplace.module';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.component';
import { MarketplacePage } from './pages/marketplace/marketplace.component';
import { CompostPage } from './pages/compost/compost.component';
import { InventoryPage } from './pages/inventory/inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MarketplacePage,
    InventoryPage,
    CompostPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    HomeModule,
    MarketplaceModule,
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'marketplace', component: MarketplacePage },
      { path: 'compost', component: CompostPage },
      { path: 'inventory', component: InventoryPage }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
