import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPopupComponent } from './banner-popup.component';

describe('BannerPopupComponent', () => {
  let component: BannerPopupComponent;
  let fixture: ComponentFixture<BannerPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPopupComponent]
    });
    fixture = TestBed.createComponent(BannerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
