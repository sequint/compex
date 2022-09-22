import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';


@NgModule({
  declarations: [
    InventoryListComponent
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
