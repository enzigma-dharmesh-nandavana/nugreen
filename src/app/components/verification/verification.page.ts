import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/models';
import { ComponentService } from 'src/app/service/component.service';

@Component({
  selector: 'verification',
  templateUrl: './verification.page.html'
})
export class VerificationPage {
  constructor(private componentService: ComponentService) { }

  errormessage?: string;
  @Input() user = new User();
  @Output() data: EventEmitter<any> = new EventEmitter();
  @Output() onBack: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<any> = new EventEmitter();
  codeControl = new FormControl('', Validators.required);

  ngOnInit() { }

  onVerify() {
    if (this.user.codeInt) {
      this.user.code = this.user.codeInt + '';
      this.data.emit(this.user.code);
      //this.user.codeInt = undefined
    }
  }
  reSendCode() {
    this.componentService.showAlert('We have send you a code again', 'Please check your email', '')
  }

  handleBack() {
    this.onBack.emit();
  }
  handleNext() {
    this.onNext.emit();
  }
}
