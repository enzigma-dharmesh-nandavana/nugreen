import { Component } from '@angular/core';
import { StartPage } from '../start/start.page';
import { Contact, Result, User } from 'src/app/models/models';
import { EngineService } from 'src/app/service/engine.service';
import { ComponentService } from 'src/app/service/component.service';
import { Color, Position } from 'src/app/models/enums';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.page.html',
})
export class SignUpPage {
  constructor(private engine: EngineService,
    private componentService: ComponentService,
    private router: Router,
    public cookie: CookieService) { }
  start = StartPage;
  page = 'email';
  errormessage?: string;
  user = new User();
  contact = new Contact();

  ngOnInit() {}

  async verifyCode(data: any) {
    this.componentService.showSpinner()
    this.engine.verifyCode(this.user).then(async (result: Result) => {
      if (result.success) {
        this.componentService.hideSpinner()
        await this.componentService.showToaster(result.message, Color.success).then(() => {
          setTimeout(() => {
            this.page = 'userData';
          }, 1000);
        })
      } else {
        this.componentService.hideSpinner()
        this.componentService.showToaster(result.message, Color.danger)
      }
    }).catch((ex) => {
      this.componentService.hideSpinner()
      this.componentService.showToaster(ex.message, Color.danger)
    })
  }

  checkEmailIsExist(data: any) {
    this.componentService.showSpinner()
    this.engine.userExists(this.contact.Email as string).then((result: Result) => {
      if (result.success) {
        this.componentService.hideSpinner()
        this.componentService.showToaster(result.message, Color.danger)
      } else {
        this.engine.sendCode(this.contact.Email as string).then((result: Result) => {
          if (result.success) {
            this.user.email = this.contact.Email;
            this.componentService.hideSpinner()
            this.componentService.showToaster(result.message, Color.success).then(() => {
              setTimeout(() => {
                this.page = 'verification';
              }, 1000);
            })
            this.user.verificationCodeId = result.data.verificationCodeId;
            this.user.email = this.contact.Email;
          } else {
            this.componentService.hideSpinner()
            this.componentService.showToaster(result.message, Color.danger)
          }
        }).catch((ex) => {
          this.componentService.hideSpinner()
          this.componentService.showToaster(ex.message, Color.danger)
        })
      }
    })
  }
  setUserData(event: any, fieldName: string) {
    this.user.userName = this.contact.Email;
    this.page = fieldName;
  }

  backTo(fieldName: string) {
    this.page = fieldName;
  }

  onRegister() {
    this.componentService.showSpinner();
    this.engine.register(this.user, this.contact).then((result: Result) => {
      if (result.success) {
        this.cookie.set('userToken', result.data.userToken);
        this.cookie.set('sid', result.data.sid, Date.parse(result.data.expiresOn));
        this.componentService.hideSpinner();
        this.componentService.showToaster(result.message, Color.success, Position.bottom)
        this.page='userAgreements';
      } else {
        this.componentService.hideSpinner();
        this.componentService.showToaster(result.message, Color.danger, Position.bottom)
      }
    }).catch((ex) => {
      this.componentService.hideSpinner();
      this.componentService.showToaster(ex.message, Color.danger, Position.bottom)
    })
  }

  onSubmit() {
    this.componentService.showSpinner();
    this.engine.updateUserInfo(this.contact).then((result: Result) => {
      this.componentService.hideSpinner();
      if (result.success) {
        this.router.navigate(['/login']);
        this.componentService.showToaster(result.message, Color.success);
      }
      else {
        this.componentService.showToaster(result.message, Color.danger);
      }
    }).catch(err => {
      this.componentService.hideSpinner();
      this.componentService.showToaster(err.message,);
    })
  }
  reSendCode() {
    this.componentService.showSpinner()
    this.engine.sendCode(this.contact.Email as string).then((result: Result) => {
      if (result.success) {
        this.user.email = this.contact.Email;
        this.user.verificationCodeId = result.data.verificationCodeId;
        this.user.email = this.contact.Email;
        this.componentService.showAlert('We have send you a code again', 'Please check your email', '')
      } else {
        this.componentService.showToaster(result.message, Color.danger)
      }
      this.componentService.hideSpinner()
    }).catch((ex) => {
      this.componentService.hideSpinner()
      this.componentService.showToaster(ex.message, Color.danger)
    })
  }
}
