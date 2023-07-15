import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ContactYourRepPage } from './contact-your-rep.page';

describe('FolderPage', () => {
  let component: ContactYourRepPage;
  let fixture: ComponentFixture<ContactYourRepPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactYourRepPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactYourRepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
