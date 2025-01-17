import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MainModule } from '../main/main.module';
import { BannerPopupComponent } from './banner-popup/banner-popup.component';


@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MainModule
  ]
})
export class SharedModule { }
