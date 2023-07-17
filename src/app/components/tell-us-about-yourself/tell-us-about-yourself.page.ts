import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/models';

@Component({
  selector: 'tell-us-about-yourself',
  templateUrl: './tell-us-about-yourself.page.html',
  styleUrls: ['./tell-us-about-yourself.page.scss'],
})
export class TellUsAboutYourselfPage {
  @Input() contact = new Contact();
  @Output() data: EventEmitter<any> = new EventEmitter();
  countryCode = '';
  mobileNumber = '';

  firstNameControl: FormControl;
  lastNameControl: FormControl;
  companyNameControl: FormControl;
  preferredCommunicationControl: FormControl;
  phoneControl: FormControl;
  mobileControl: FormControl;
  recyclingCompanyControl: FormControl;

  constructor() {
    this.firstNameControl = new FormControl('', Validators.pattern(/^[a-zA-Z]+$/));
    this.lastNameControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]);
    this.companyNameControl = new FormControl('', Validators.required);
    this.preferredCommunicationControl = new FormControl('', Validators.required);
    this.phoneControl = new FormControl('', [Validators.pattern(/^\d+$/), Validators.minLength(10)]);
    this.mobileControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10)]);
    this.recyclingCompanyControl = new FormControl('', Validators.required);
  }
  ngOnInit() {
    console.log('CON : ', this.contact);
    if (this.contact.MobilePhone) {
      const [countryCode, mobileNumber] = this.contact.MobilePhone.split(' ');
      this.countryCode = countryCode;
      this.mobileNumber = mobileNumber;
    } else {
      this.countryCode = '+1';
    }
  }
  onNext() {
    if (
      this.firstNameControl.invalid ||
      this.lastNameControl.invalid ||
      this.companyNameControl.invalid ||
      this.preferredCommunicationControl.invalid ||
      this.mobileControl.invalid ||
      this.recyclingCompanyControl.invalid
    ) {
      this.firstNameControl.markAsDirty();
      this.lastNameControl.markAsDirty();
      this.companyNameControl.markAsDirty();
      this.preferredCommunicationControl.markAsDirty();
      this.mobileControl.markAsDirty();
      this.recyclingCompanyControl.markAsDirty();
    } else {
      this.contact.MobilePhone = this.countryCode + ' ' + this.mobileNumber;
      console.log(this.contact);
      this.data.emit(this.contact);
    }
  }
}
