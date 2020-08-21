import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";

export const AppRoutes: Routes = [
    {path: '', component: LoginComponent}
];

@NgModule({  
    imports: [
      RouterModule.forRoot(AppRoutes)
    ], exports: [RouterModule]
  })
  export class AppRoutingModule { }
  