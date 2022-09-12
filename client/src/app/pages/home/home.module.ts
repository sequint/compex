import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { ExchangeGridComponent } from './components/exchange-grid/exchange-grid.component';
import { CompostDividerComponent } from './components/compost-divider/compost-divider.component';



@NgModule({
  declarations: [
    HomeTitleComponent,
    ExchangeGridComponent,
    CompostDividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeTitleComponent,
    ExchangeGridComponent,
    CompostDividerComponent
  ]
})
export class HomeModule { }
