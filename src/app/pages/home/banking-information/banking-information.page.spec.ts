import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BankingInformationPage } from './banking-information.page';

describe('FolderPage', () => {
  let component: BankingInformationPage;
  let fixture: ComponentFixture<BankingInformationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingInformationPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BankingInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
