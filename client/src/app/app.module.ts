import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { RootComponent } from './root/root.component'; 
import { LoginComponent } from './login/login.component'; 

import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [
    RootComponent, LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
