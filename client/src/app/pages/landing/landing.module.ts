import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from './landing.component';




@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
