import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeListComponent } from './components/exchange-list/exchange-list.component';



@NgModule({
  declarations: [
    ExchangeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExchangeListComponent
  ]
})
export class MarketplaceModule { }
