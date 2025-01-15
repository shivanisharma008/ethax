import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthaxDexComponent } from './ethax-dex.component';

describe('EthaxDexComponent', () => {
  let component: EthaxDexComponent;
  let fixture: ComponentFixture<EthaxDexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthaxDexComponent]
    });
    fixture = TestBed.createComponent(EthaxDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
