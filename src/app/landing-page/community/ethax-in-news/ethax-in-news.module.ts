import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthaxInNewsComponent } from './ethax-in-news.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EthaxInNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:EthaxInNewsComponent}])
  ]
})
export class EthaxInNewsModule { }
