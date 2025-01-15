import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyEthaxComponent } from './buy-ethax.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BuyEthaxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:BuyEthaxComponent}])
  ]
})
export class BuyEthaxModule { }
