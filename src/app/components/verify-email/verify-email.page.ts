import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/models';

@Component({
  selector: 'verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage{
  @Input() errormessage?: string;
  @Input() contact: Contact = new Contact();
  @Output() data: EventEmitter<any> = new EventEmitter();
  disableNext: boolean = true;
  emailControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
  ]);

  checkEmail() {
    this.disableNext = true;
    if (this.emailControl && this.emailControl.hasError('pattern')) {
      this.errormessage = 'Please enter valid email'
    }
    else if (this.emailControl.invalid) {
      this.errormessage = 'Please enter email';
    } else {
      this.errormessage = ''
      this.disableNext = false;
    }
  }

  onNext($event: any) {
    if (this.emailControl && !this.emailControl.hasError('pattern')) {
      this.data.emit(this.emailControl.value);
    }
  }
}