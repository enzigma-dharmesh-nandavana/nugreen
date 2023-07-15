import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { VerificationPage } from './verification.page';

describe('FolderPage', () => {
  let component: VerificationPage;
  let fixture: ComponentFixture<VerificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificationPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
