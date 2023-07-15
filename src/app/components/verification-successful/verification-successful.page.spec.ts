import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { VerificationSuccessfulPage } from './verification-successful.page';

describe('VerificationSuccessfulPage', () => {
  let component: VerificationSuccessfulPage;
  let fixture: ComponentFixture<VerificationSuccessfulPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificationSuccessfulPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationSuccessfulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
