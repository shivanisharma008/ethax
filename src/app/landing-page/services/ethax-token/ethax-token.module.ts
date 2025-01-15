import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthaxTokenComponent } from './ethax-token.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EthaxTokenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component:EthaxTokenComponent}])
  ]
})
export class EthaxTokenModule { }
