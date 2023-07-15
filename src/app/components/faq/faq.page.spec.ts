import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FaqPage } from './faq.page';

describe('FolderPage', () => {
  let component: FaqPage;
  let fixture: ComponentFixture<FaqPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
