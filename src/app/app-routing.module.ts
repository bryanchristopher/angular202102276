import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent},
  { path: "dashboard", component: DashboardComponent},
  { path: "dashboard2", component: Dashboard2Component},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "",redirectTo: "login", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
