import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccountHistoryDetailsPage } from './account-history-details.page';

describe('FolderPage', () => {
  let component: AccountHistoryDetailsPage;
  let fixture: ComponentFixture<AccountHistoryDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountHistoryDetailsPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountHistoryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
