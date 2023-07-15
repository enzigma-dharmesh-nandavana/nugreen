import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.page.html'
})
export class ResetPasswordPage {

  newPassword?: string;
  confirmPassword?: string;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  getNewPassword(event: any) {
    this.newPassword = event.target.value;
  }

  getConfirmPassword(event: any) {
    this.confirmPassword = event.target.value;
  }

  toggleNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  submit() {

  }
}
