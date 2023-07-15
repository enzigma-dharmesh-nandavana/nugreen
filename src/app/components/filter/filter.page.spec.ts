import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FilterPage } from './filter.page';

describe('FolderPage', () => {
  let component: FilterPage;
  let fixture: ComponentFixture<FilterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
