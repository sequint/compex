import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavBarComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
