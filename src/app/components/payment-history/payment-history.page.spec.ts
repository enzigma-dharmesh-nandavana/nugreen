import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PaymentHistoryPage } from './payment-history.page';

describe('FolderPage', () => {
  let component: PaymentHistoryPage;
  let fixture: ComponentFixture<PaymentHistoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentHistoryPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
