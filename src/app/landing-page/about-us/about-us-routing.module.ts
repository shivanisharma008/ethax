import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
  {
    path: '', component: AboutUsComponent
  },
  {
    path: 'discover-ethax',
    loadChildren: () =>
      import('../about-us/discover-ethax/discover-ethax.module').then((m) => m.DiscoverEthaxModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./faqs/faqs.module').then((m) => m.FaqsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
