import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccountHistoryPage } from './account-history.page';

describe('FolderPage', () => {
  let component: AccountHistoryPage;
  let fixture: ComponentFixture<AccountHistoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountHistoryPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
