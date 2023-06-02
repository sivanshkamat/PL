import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsTableComponent } from './points-table/points-table.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
},
{
  path: 'home',
  pathMatch: 'full',
  component: PointsTableComponent,
},
{
  path: "auth", loadChildren: () => import('./authentication/authentication.module')
.then(module => module.AuthenticationModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
