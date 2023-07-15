import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/models';

@Component({
  selector: 'app-banking-information',
  templateUrl: './banking-information.page.html',
  styleUrls: ['./banking-information.page.scss'],
})
export class BankingInformationPage implements OnInit {
  company = new Company();
  editMode = false;

  constructor(private router: Router) {}
  ngOnInit() {
    if (this.company.isVerified) {
      this.company.Bank_Name__c = 'Silicon Valley Bank';
      this.company.Account_Holder_Name__c = 'John Doe';
      this.company.Account_Number__c = '1234567890';
      this.company.Routing_Number__c = '999999999';
      this.company.Payment_Method__c = 'ACH';
      this.editMode = false;
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.router.navigate(['home/verify-mobile-banking']);
    }
  }

  handleBankName($event: any) {
    this.company.Bank_Name__c = $event.target.value;
  }
  handleAccountHolderName($event: any) {
    this.company.Account_Holder_Name__c = $event.target.value;
  }
  handleAccountNumber($event: any) {
    this.company.Account_Number__c = $event.target.value;
  }
  handleRoutingNumber($event: any) {
    this.company.Routing_Number__c = $event.target.value;
  }
  handlePaymentMethod($event: any) {
    this.company.Payment_Method__c = $event.target.value;
  }

  onSubmit() {
    console.log('Submit button clicked');
    console.log('Banking Name = ', this.company.Bank_Name__c);
    console.log('Account_Holder_Name__c = ', this.company.Account_Holder_Name__c);
    console.log('Account_Number__c  = ', this.company.Account_Number__c);
    console.log('Routing_Number__c  = ', this.company.Routing_Number__c);
    console.log('Payment_Method__c  = ', this.company.Payment_Method__c);
    this.editMode = false;
    this.company.underVerification = true;
    this.router.navigate(['/home']);
  }
  onBack() {
    this.editMode = false;
  }
}
