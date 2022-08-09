import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
