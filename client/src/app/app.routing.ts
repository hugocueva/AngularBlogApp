import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component'; 


export const AppRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({  
    imports: [
      RouterModule.forRoot(AppRoutes)
    ], exports: [RouterModule]
  })
  export class AppRoutingModule { }
  