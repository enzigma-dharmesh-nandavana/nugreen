import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DocumentsPage } from './documents.page';

describe('FolderPage', () => {
  let component: DocumentsPage;
  let fixture: ComponentFixture<DocumentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentsPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
