import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/models';
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

  constructor(private router: Router, private engine: EngineService) { }
  ngOnInit() {
    this.getCompanyProfile();
    this.currentPageUrl = this.router.url;
    if (this.currentPageUrl.includes('account-history')) {
      this.showHamburger = true;
    }
  }

  // ngAfterContentChecked() {
  //   this.currentPageUrl = this.router.url;
  //   console.log(this.router.url, 'ngAfter');
  //   if (this.currentPageUrl.includes('account-history')) {
  //     this.showHamburger = true;
  //   }
  //   else{
  //   }
  // }

  getCompanyProfile() {
    //  this.engine.getCompanyProfile().then((result: AbxResult) => {
      if (this.company.isVerified) {
        this.company.Full_Legal_Name_Of_Business__c = 'Agile Recycling';
        this.company.Vendor_Number__c = 'DTX-007';
      }
    // }).catch((result: AbxResult) => {
    //   alert(result.message);
    // })
   }
}
