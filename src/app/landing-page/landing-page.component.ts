import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  @ViewChild('drawer', { static: false }) drawer: ElementRef | undefined;
 
  constructor() { }


  ngOnInit(): void {
   
  }
}
