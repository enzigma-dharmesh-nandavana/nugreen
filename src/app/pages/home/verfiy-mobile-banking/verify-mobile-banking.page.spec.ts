import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { VerifyMobileBankingPage } from './verify-mobile-banking.page';

describe('FolderPage', () => {
  let component: VerifyMobileBankingPage;
  let fixture: ComponentFixture<VerifyMobileBankingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyMobileBankingPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyMobileBankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
