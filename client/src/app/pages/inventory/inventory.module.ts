import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryItemComponent } from './components/inventory-item/inventory-item.component';


@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InventoryListComponent
  ]
})
export class InventoryModule { }
