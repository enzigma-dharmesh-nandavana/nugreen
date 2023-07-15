import { Component, OnInit } from '@angular/core';
import { Result, Company } from 'src/app/models/models';
import { EngineService } from 'src/app/service/engine.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'company-profile',
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],

})
export class CompanyProfilePage implements OnInit {
  company = new Company();
  editMode: boolean = false;

  constructor(private engine: EngineService) { }
  ngOnInit() {
    // this.getCompanyProfile();
    if (this.company.isVerified) {
      this.company.Full_Legal_Name_Of_Business__c = 'Agile Recycling';
      this.company.Doing_Business_As__c = 'Agile Corporation';
      this.company.Organization_Type__c = 'OEM';
      this.company.Phone = 9876785647;
      this.company.Do_you_have_loading_dock__c = false;
      this.company.State_of_Incorporation__c = 'TX';
      this.company.Sales_Tax_Number__c = 73456786;
      this.company.Federal_EIN__c = 789654321;
      this.company.Vendor_Number__c = 'DTX-002';
    }
    else {
      this.company.Federal_EIN__c = 789654321;
    }
  }

  onClickSubmit(result: { username: string; }) {
    console.log("You have entered : " + result.username);
  }

  getCompanyProfile() {
    this.engine.getCompanyProfile().then((result: Result) => {
        // ASSIGN ALL COMPANY FIELDS HERE FROM RESULT.
    }).catch((result:Result) => {
      // ASSIGN ALL COMPANY FIELDS HERE FROM RESULT.
    }).catch((result: Result) => {
      alert(result.message);
    })
  }

  handleBusinessName($event: any) {
    this.company.Bank_Name__c = $event.target.value;
  }
  handleDba($event: any) {
    this.company.Doing_Business_As__c = $event.target.value;
  }
  handleOrgType($event: any) {
    this.company.Organization_Type__c = $event.target.value;
  }
  handlePhone($event: any) {
    this.company.Phone = $event.target.value;
  }
  handleLoadingDock($event: any) {
    this.company.Do_you_have_loading_dock__c = $event.target.value;
  }
  handleStateInc($event: any) {
    this.company.State_of_Incorporation__c = $event.target.value;
  }
  handleSalesTaxNumber($event: any) {
    this.company.Sales_Tax_Number__c = $event.target.value;
  }

  onSubmit() {
    console.log("COMPANY DETAILS : " + JSON.stringify(this.company));
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onSave() {
    this.editMode = !this.editMode;
    console.log("COMPANY DETAILS : " + this.company);
  }
}
