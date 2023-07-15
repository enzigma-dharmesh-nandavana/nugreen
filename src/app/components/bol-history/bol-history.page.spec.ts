import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BolHistoryPage } from './bol-history.page';

describe('FolderPage', () => {
  let component: BolHistoryPage;
  let fixture: ComponentFixture<BolHistoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BolHistoryPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BolHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
