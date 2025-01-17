import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MainModule } from '../main/main.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import { BannerPopupComponent } from '../shared/banner-popup/banner-popup.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    BannerPopupComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MainModule,
    MatSidenavModule
  ]
})
export class LandingPageModule { }
