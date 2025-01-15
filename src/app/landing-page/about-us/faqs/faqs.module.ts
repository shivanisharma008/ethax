import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs.component';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: FaqsComponent}]),
    MatExpansionModule
    
  ]
})
export class FaqsModule { }
