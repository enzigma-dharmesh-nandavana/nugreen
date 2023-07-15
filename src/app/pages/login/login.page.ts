import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EngineService } from 'src/app/service/engine.service';
import { Contact, Result, User } from 'src/app/models/models';
import { ComponentService } from 'src/app/service/component.service';
import { Color, Position, SpinnerType } from 'src/app/models/enums';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword: boolean = false;
  user: User = new User();
  contact: Contact = new Contact();

  invalid: boolean = true;
  isMfaRequired: boolean = false;
  constructor(private router: Router,
    private engine: EngineService,
    private componentService: ComponentService,
    private cookie: CookieService
  ) { }

  ngOnInit() { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  verifyLogin() {
    this.componentService.showSpinner(undefined, undefined, Color.secondary);
    this.engine.login(this.user).then((result: Result) => {
      this.componentService.hideSpinner()
      if (result.success) {
        if (!result.data.isCodeRequired) {
          this.router.navigate(['/home']);
        }
        this.isMfaRequired = result.data.isCodeRequired;
        this.user.verificationCodeId = result.data.verificationCodeId;
        this.user.email = this.user.userName;
        //this.componentService.showToaster(result.message);
      } else {
        this.componentService.showToaster(result.message, Color.danger)
      }
    }).catch((result) => {
      this.componentService.hideSpinner()
      this.componentService.showToaster(result.message, Color.danger)
    })
  }

  checkValid($event: any) {
    if (this.user && this.user.userName && this.user.password) {
      this.invalid = false;
    }
  }

  getUserToken($event: any) {
    this.componentService.showSpinner()

    this.engine.getUserToken(this.user).then((result: Result) => {
      this.componentService.hideSpinner()
      if (result.success) {
        this.router.navigate(['/home']);
        this.cookie.set('userToken', result.data.userToken);
        this.cookie.set('sid', result.data.sid, Date.parse(result.data.expiresOn));
      } else {
        this.componentService.showToaster(result.message, Color.danger)
      }
    }).catch((ex) => {
      this.componentService.hideSpinner()
      this.componentService.showToaster(ex.message, Color.danger)
    })
  }

}
