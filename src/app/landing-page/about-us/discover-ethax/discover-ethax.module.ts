import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverEthaxComponent } from './discover-ethax.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DiscoverEthaxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: DiscoverEthaxComponent}])
  ]
})
export class DiscoverEthaxModule { }
