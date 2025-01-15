import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent,
    children:[

    {
      path: '',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'home',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'about-us',
      loadChildren: () =>
        import('./about-us/about-us.module').then((m) => m.AboutUsModule),
    },
    {
      path: 'services',
      loadChildren: () =>
        import('./services/services.module').then((m) => m.ServicesModule),
    },
    {
      path:'community',
      loadChildren:()=>
      import('./community/community.module').then((m) => m.CommunityModule)
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
