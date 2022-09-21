import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeListComponent } from './components/exchange-list/exchange-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExchangeListTabsComponent } from './components/exchange-list-tabs/exchange-list-tabs.component';


@NgModule({
  declarations: [
    ExchangeListTabsComponent,
    ExchangeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ExchangeListTabsComponent,
    ExchangeListComponent
  ]
})
export class MarketplaceModule { }
