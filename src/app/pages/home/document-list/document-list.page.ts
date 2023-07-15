import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'document-list',
  templateUrl: './document-list.page.html',
  styleUrls: ['./document-list.page.scss'],
})

export class DocumentListPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  constructor(private route: ActivatedRoute) { }

  isTaxIdDocumentVisible: boolean = false;
  isW9DocumentVisible: boolean = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const buttonClicked = params['buttonClicked'];
      if (buttonClicked === 'taxIdButton') {
        this.isTaxIdDocumentVisible = true;
        this.isW9DocumentVisible = false;
      } else if (buttonClicked == 'w9Button') {
        this.isW9DocumentVisible = true;
        this.isTaxIdDocumentVisible = false;
      }
    });
  }


}