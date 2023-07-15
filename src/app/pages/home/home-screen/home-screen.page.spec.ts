import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomeScreenPage } from './home-screen.page';

describe('FolderPage', () => {
  let component: HomeScreenPage;
  let fixture: ComponentFixture<HomeScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeScreenPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
