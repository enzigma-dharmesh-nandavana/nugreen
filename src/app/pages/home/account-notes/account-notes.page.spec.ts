import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccountNotesPage } from './account-notes.page';

describe('FolderPage', () => {
  let component: AccountNotesPage;
  let fixture: ComponentFixture<AccountNotesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountNotesPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
