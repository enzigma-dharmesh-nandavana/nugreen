import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DocumentUploadPage } from './document-upload.page';

describe('FolderPage', () => {
  let component: DocumentUploadPage;
  let fixture: ComponentFixture<DocumentUploadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentUploadPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
