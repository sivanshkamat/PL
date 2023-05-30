import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login-page/login/login.component';
import { SignupComponent } from './login-page/signup/signup.component';

const routes: Routes = [
{
  path: 'login',
  pathMatch: 'full',
  component: LoginComponent,
},
{
  path: 'signup',
  pathMatch: 'full',
  component: SignupComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
