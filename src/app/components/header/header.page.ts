import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result, Company } from 'src/app/models/models';
import { EngineService } from 'src/app/service/engine.service';

@Component({
  selector: 'nu-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class Header implements OnInit {

  company = new Company();
  showHamburger = false;
  currentPageUrl !: string;
  isRegistered = false;

  constructor(private router: Router, private engine: EngineService) { }
  ngOnInit() {
    // this.getCompanyProfile();
    this.currentPageUrl = this.router.url;
    if (this.currentPageUrl.includes('account-history')) {
      this.showHamburger = true;
    }
  }

  getCompanyProfile() {
    this.engine.getCompanyProfile().then((result: Result) => {
      if (this.company.isVerified) {
        this.company.Full_Legal_Name_Of_Business__c = 'Agile Recycling';
        this.company.Vendor_Number__c = 'DTX-007';
      }
    }).catch((result: Result) => {
      alert(result.message);
    })
  }
}
