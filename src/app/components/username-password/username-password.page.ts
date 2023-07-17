import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/models';

@Component({
  selector: 'username-password',
  templateUrl: './username-password.page.html',
  styleUrls: ['./username-password.page.scss'],
})
export class UsernamePasswordPage implements OnInit {

  @Input() user = new User();
  @Output() register: EventEmitter<any> = new EventEmitter();
  @Output() onBack: EventEmitter<any> = new EventEmitter();
  passwordControl = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]);
  disable?: boolean = true
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  displayHelpMessage: boolean = false;
  helpMessage: string = 'Password should contain 8 characters and alphanumeric with a capital letter and special character';
  errormessage = ''
  passwordMessage = '';
  confirmPassword = '';
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  constructor() { }
  ngOnInit() {
    this.displayHelpMessage = false;
  }
  setUserData($event: any, fieldName: string) {
    (this.user as any)[fieldName] = $event.target.value;
  }
  handleBack() {
    this.onBack.emit();
  }
  onRegister() {
    this.register.emit(this.user);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleHelpMessage() {
    this.displayHelpMessage = !this.displayHelpMessage;
  }
  checkPassword() {
    if (!this.passwordRegex.test(this.user.password as string)) {
      this.passwordMessage = 'Password format is invalid'
      this.errormessage = ''
      this.disable = true
    }
    else if (this.confirmPassword && this.confirmPassword != this.user.password) {
      this.disable = true;
      this.errormessage = 'Password does not match'
      this.passwordMessage = '';
    }
    else {
      this.passwordMessage = '';
      this.disable = false
      this.errormessage = ''
    }
  }
}
