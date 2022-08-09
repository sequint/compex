import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
