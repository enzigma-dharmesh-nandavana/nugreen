import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'document-upload',
  templateUrl: './document-upload.page.html',
  styleUrls: ['./document-upload.page.scss'],
})

export class DocumentUploadPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router) {}
  ngOnInit() {
  }

  fileChosen: boolean = false;

  onFileSelected(event: any) {
    // Check if a file has been chosen
    this.fileChosen = event.target.files && event.target.files.length > 0;
  }
}