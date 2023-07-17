import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/models';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-banking-information',
  templateUrl: './banking-information.page.html',
  styleUrls: ['./banking-information.page.scss'],
})
export class BankingInformationPage implements OnInit {
  company = new Company();
  editMode = false;

  bankNameControl: FormControl;
  accountHolderNameControl: FormControl;
  paymentMethodControl: FormControl;
  routingNumberControl: FormControl;
  accountNumberControl: FormControl;
  constructor(private router: Router,private userService: UserService) {
    this.bankNameControl = new FormControl('', Validators.pattern(/^[a-zA-Z\s]+$/));
    this.accountHolderNameControl = new FormControl('', Validators.pattern(/^[a-zA-Z\s]+$/));
    this.paymentMethodControl = new FormControl('', Validators.required);
    this.routingNumberControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(9), Validators.maxLength(9)]);
    this.accountNumberControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(8), Validators.maxLength(12)]);
  }
  ngOnInit() {
    console.log('INIT BANKING');
    this.userService.emitCompany();
    this.userService.onCompanyUpdated.subscribe((data : any) => {
      console.log('DATA BANKING ',data);
      this.company = data;
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.router.navigate(['home/verify-mobile-banking']);
    }
  }

  onNext() {
    this.router.navigate(['/home']);
  }
  onBack() {
    console.log('on back');
    
    this.editMode = false;
      this.router.navigate(['home/company-profile'])
  }
  onSave(){
    console.log('On Save', this.company); 
    this.editMode = false;
  }
}
