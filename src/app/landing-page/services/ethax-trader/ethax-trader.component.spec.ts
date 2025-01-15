import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthaxTraderComponent } from './ethax-trader.component';

describe('EthaxTraderComponent', () => {
  let component: EthaxTraderComponent;
  let fixture: ComponentFixture<EthaxTraderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthaxTraderComponent]
    });
    fixture = TestBed.createComponent(EthaxTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
