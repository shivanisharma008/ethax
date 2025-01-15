import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path:'',
    component:SharedComponent,
    children:[
      {
        path:'buy-ethax',
        loadChildren:()=>
        import('./buy-ethax/buy-ethax.module').then((m) => m.BuyEthaxModule)
      },
      {
        path:'privacy-policy',
        loadChildren:()=>
        import('./privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule)
      },
      {
        path:'terms-conditions',
        loadChildren:()=>
        import('./terms-conditions/terms-conditions.module').then((m) => m.TermsConditionsModule)
      },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
