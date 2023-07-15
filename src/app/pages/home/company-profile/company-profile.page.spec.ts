import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CompanyProfilePage } from './company-profile.page';

describe('FolderPage', () => {
  let component: CompanyProfilePage;
  let fixture: ComponentFixture<CompanyProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyProfilePage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
