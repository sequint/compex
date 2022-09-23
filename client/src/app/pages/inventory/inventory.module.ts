import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryItemComponent } from './components/inventory-item/inventory-item.component';
import { InventoryListCardComponent } from './components/inventory-list-card/inventory-list-card.component';


@NgModule({
  declarations: [
    InventoryListCardComponent,
    InventoryItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InventoryListCardComponent,
    InventoryItemComponent
  ]
})
export class InventoryModule { }
