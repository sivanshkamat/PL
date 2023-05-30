import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login-page/login/login.component';
import { SignupComponent } from './login-page/signup/signup.component';
import { PointsTableComponent } from './points-table/points-table.component';

const routes: Routes = [
{
  path: 'login',
  pathMatch: 'full',
  component: LoginComponent,
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'signup',
  pathMatch: 'full',
  component: SignupComponent,
},
{
  path: 'home',
  pathMatch: 'full',
  component: PointsTableComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
