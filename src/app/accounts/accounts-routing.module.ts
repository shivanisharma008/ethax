import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:()=>
    import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path:'forget',
    loadChildren:()=>
    import('./forget-password/forget-password.module').then((m) => m.ForgetPasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
