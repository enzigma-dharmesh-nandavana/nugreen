import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/models';

@Component({
  selector: 'documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})

export class DocumentsPage implements OnInit {
  company = new Company();
  ngOnInit() {
  }

}