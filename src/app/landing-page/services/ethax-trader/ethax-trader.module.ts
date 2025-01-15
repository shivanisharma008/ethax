import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthaxTraderComponent } from './ethax-trader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EthaxTraderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:EthaxTraderComponent}])
  ]
})
export class EthaxTraderModule { }
