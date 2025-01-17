import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-popup',
  templateUrl: './banner-popup.component.html',
  styleUrls: ['./banner-popup.component.scss']
})
export class BannerPopupComponent {
  showPopup = true;

  confirmAccess() {
    this.showPopup = false;
    // Store confirmation in local storage to avoid repeated prompts
    localStorage.setItem('bannerConfirmed', 'true');

    localStorage.removeItem('bannerConfirmed')
  }

  ngOnInit() {
    // Check if the user has already confirmed
    if (localStorage.getItem('bannerConfirmed') === 'true') {
      this.showPopup = false;
    }
  }

}
