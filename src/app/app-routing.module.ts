import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  {
    path:'accounts',
    loadChildren:()=>
    import('./accounts/accounts.module').then((m) => m.AccountsModule)
  },
  {
    path:'shared',
    loadChildren:()=>
    import('./shared/shared.module').then((m) => m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ scrollPositionRestoration: 'top', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
