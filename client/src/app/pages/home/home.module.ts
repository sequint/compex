import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { ExchangeGridComponent } from './components/exchange-grid/exchange-grid.component';
import { CompostDividerComponent } from './components/compost-divider/compost-divider.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeTitleComponent,
    ExchangeGridComponent,
    CompostDividerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeTitleComponent,
    ExchangeGridComponent,
    CompostDividerComponent
  ]
})
export class HomeModule { }
