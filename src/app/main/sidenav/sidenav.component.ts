import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Output() toggle = new EventEmitter();
  isAboutSubMenuOpen: boolean = false;
  isServicesSubMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {

  }
  close() {
    this.toggle.emit();
  }

  toggleAboutSubMenu(): void {
    this.isAboutSubMenuOpen = !this.isAboutSubMenuOpen;
  }

  toggleServicesSubMenu(): void {
    this.isServicesSubMenuOpen = !this.isServicesSubMenuOpen;
  }

}
