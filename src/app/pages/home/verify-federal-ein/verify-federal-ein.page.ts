import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/models';

@Component({
  selector: 'verify-federal-ein',
  templateUrl: './verify-federal-ein.page.html',
  styleUrls: ['./verify-federal-ein.page.scss'],
})
export class VerifyFederalEin {
  company = new Company();

  federalEinInvalid: boolean = false;
  federalEinRequired: boolean = false;
  showEinScreen: boolean = true;
  showDuplicateScreen: boolean = false;
  showDuplicateScreenYes: boolean = false;
  showDuplicateScreenNo: boolean = false;
  disableSubmit : boolean = true;
  errormessage = '';
  einControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{9}$/)
  ]);

  constructor(private router: Router) { }
  onSubmit() { }

  checkEin() {
    this.disableSubmit = true;
    if (this.einControl && this.einControl.hasError('pattern')) {
      this.errormessage = 'Invalid EIN'
    }
    else if (this.einControl.invalid) {
      
    } else {
      this.errormessage = ''
      this.disableSubmit = false;
    }
  }


  handleFederalEin($event: any) {
    this.company.Federal_EIN__c = $event.target.value;
    console.log('FederalEin', this.company.Federal_EIN__c);
  }

  submitEin() {
    console.log("Submit form", this.company.Federal_EIN__c);

    if (String(this.company.Federal_EIN__c) == '' || this.company.Federal_EIN__c == undefined || this.company.Federal_EIN__c == null) {
      this.federalEinRequired = true;
      this.federalEinInvalid = false;
    }
    else if (String(this.company.Federal_EIN__c).length !== 9) {
      this.federalEinRequired = false;
      this.federalEinInvalid = true;
    }    
    else if (this.company.Federal_EIN__c == 123456789) {   // This will check if it already exists in our Database.
      console.log("Duplicate");
      this.showDuplicateScreen = true;
      this.showEinScreen = false;
      this.showDuplicateScreenNo = false;
      this.showDuplicateScreenYes = false;
      this.federalEinRequired = false;
      this.federalEinInvalid = false;
    }
    else {
      console.log("OK");
      this.router.navigate(['/home/company-profile']);
    }
  }

  onYesClick(){
    this.showDuplicateScreenYes = true;
    this.showDuplicateScreenNo = false;
    this.showEinScreen = false;
    this.showDuplicateScreen = false;
  }
  onNoClick(){
    this.showDuplicateScreenNo = true;
    this.showEinScreen = false;
    this.showDuplicateScreenYes = false;
    this.showDuplicateScreen = false;
  }
}
