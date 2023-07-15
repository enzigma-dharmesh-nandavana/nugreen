import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserAgreementsPage } from './user-agreements.page';

describe('UserAgreementsPage', () => {
  let component: UserAgreementsPage;
  let fixture: ComponentFixture<UserAgreementsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAgreementsPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAgreementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
