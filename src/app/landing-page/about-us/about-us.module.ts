import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutUsRoutingModule,
    RouterModule.forChild([{path:'', component: AboutUsComponent}])
  ]
})
export class AboutUsModule { }
