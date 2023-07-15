import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HowCanWeHelpPage } from './how-can-we-help.page';

describe('HowCanWeHelpPage', () => {
  let component: HowCanWeHelpPage;
  let fixture: ComponentFixture<HowCanWeHelpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowCanWeHelpPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HowCanWeHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
