import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeListComponent } from './components/exchange-list/exchange-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ExchangeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ExchangeListComponent
  ]
})
export class MarketplaceModule { }
