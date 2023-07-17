import { EventEmitter, Injectable } from '@angular/core';
import { Company, Result, User } from '../models/models';
import { EngineService } from './engine.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  company: Company = new Company();
  onCompanyUpdated: EventEmitter<any> = new EventEmitter<any>();

  user: User = new User();
  onUserUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor(private engine: EngineService) { }
  getCompanyProfile() {
    this.engine.getCompanyProfile().then((result: Result) => {
      if (result.success) {
        this.company = result.data;
        this.onCompanyUpdated.emit(this.company);
        // this.emitCompany();
      }
    }).catch((result: Result) => {
      alert(result.message);
    })
  }
  emitCompany() {
    if (this.company) {
      this.onCompanyUpdated.emit(this.company);
    } else {
      this.engine.getCompanyProfile().then((result: Result) => {
        if (result.success) {
          this.company = result.data;
          this.onCompanyUpdated.emit(this.company);
        }
      }).catch((result: Result) => {
        alert(result.message);
      })
    }
  }
}
