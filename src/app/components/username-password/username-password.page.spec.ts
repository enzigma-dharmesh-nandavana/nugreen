import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UsernamePasswordPage } from './username-password.page';

describe('UsernamePasswordPage', () => {
  let component: UsernamePasswordPage;
  let fixture: ComponentFixture<UsernamePasswordPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsernamePasswordPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UsernamePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
