import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'ethax-in-news',
  //   loadChildren:()=>
  //   import('./ethax-in-news/ethax-in-news.module').then((m) => m.EthaxInNewsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
