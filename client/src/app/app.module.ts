import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.routing";


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
