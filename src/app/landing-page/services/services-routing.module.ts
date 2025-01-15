import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'ethax-token',
    loadChildren: () =>
    import('./ethax-token/ethax-token.module').then((m) => m.EthaxTokenModule)
  },
  {
    path:'ethax-trader',
    loadChildren: () =>
    import('./ethax-trader/ethax-trader.module').then((m) => m.EthaxTraderModule)
  },
  {
    path:'ethax-dex',
    loadChildren:()=>
    import('./ethax-dex/ethax-dex.module').then((m) => m.EthaxDexModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
