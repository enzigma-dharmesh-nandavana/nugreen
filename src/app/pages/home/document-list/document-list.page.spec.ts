import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DocumentListPage } from './document-list.page';

describe('FolderPage', () => {
  let component: DocumentListPage;
  let fixture: ComponentFixture<DocumentListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentListPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
