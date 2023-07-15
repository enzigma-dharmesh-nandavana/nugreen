import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/models';

@Component({
  selector: 'verify-federal-ein',
  templateUrl: './verify-federal-ein.page.html',
  styleUrls: ['./verify-federal-ein.page.scss'],
})
export class VerifyFederalEin implements OnInit {
  company = new Company();

  federalEinInvalid: boolean = false;
  federalEinRequired: boolean = false;
  showEinScreen: boolean = true;
  showDuplicateScreen: boolean = false;
  showDuplicateScreenYes: boolean = false;
  showDuplicateScreenNo: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  form!: FormGroup;
  ngOnInit() { 
    this.form = this.formBuilder.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Field 1 value:', this.form.value.field1);
      console.log('Field 2 value:', this.form.value.field2);
      console.log('Field 3 value:', this.form.value.field3);
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
