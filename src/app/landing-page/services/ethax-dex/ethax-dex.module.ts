import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthaxDexComponent } from './ethax-dex.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EthaxDexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:EthaxDexComponent}])
  ]
})
export class EthaxDexModule { }
