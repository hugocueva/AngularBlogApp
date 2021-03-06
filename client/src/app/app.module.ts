import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { RootComponent } from './root/root.component'; 
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component'; 
import { ShowPostComponent } from './show-post/show-post.component'; 

import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [
    RootComponent, LoginComponent, HomeComponent, ShowPostComponent
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
