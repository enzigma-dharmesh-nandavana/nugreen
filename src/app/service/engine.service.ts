import { Injectable } from '@angular/core';
import { Callout } from '../helper/callout';
import { Result, User } from '../models/models';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { EngineMock } from './engine.mock';
import MockAdapter from 'axios-mock-adapter';
import { Contact } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  callout: Callout;
  isMock: boolean = false;
  constructor() {
    if (this.isMock) {
      var mock = new MockAdapter(axios);
      EngineMock.register(mock)
    }
    this.callout = new Callout(environment.baseURL);
  }
  // auth
  async login(user: User): Promise<Result> {
    return await this.callout.post('auth/login', user);
  }

  async getUserToken(user: User): Promise<Result> {
    return await this.callout.post('auth/userToken', user);
  }

  async getSession(user: User): Promise<Result> {
    return await this.callout.get(`auth/session?code=${user.code}&verificationId=${user.verificationCodeId}`);
  }

  async logout(user: User): Promise<Result> {
    return await this.callout.get('user/logout');
  }

  // user
  async userExists(email: string): Promise<Result> {
    return await this.callout.get(`user/emailExists?email=${email}`);
  }
  async sendCode(email: string): Promise<Result> {
    let user = { email: email }
    return await this.callout.post('auth/sendCode', user);
  }
  async verifyCode(user: User): Promise<Result> {
    return await this.callout.post('user/verify', user);
  }

  async register(user: User, contact: Contact): Promise<Result> {
    let payload = { user, contact }
    return await this.callout.post('user/register', payload);
  }

  async forgotPassword(user: User): Promise<Result> {
    return await this.callout.post('user/forgotPassword', user);
  }
  async updatePassword(user: User): Promise<Result> {
    return await this.callout.post('user/updatePassword', user);
  }
  async userInfo(user: User): Promise<Result> {
    return await this.callout.get('user/userInfo');
  }
  async updateUserInfo(contact: Contact): Promise<Result> {
    return await this.callout.put('user/userInfo', contact);
  }
  async changePassword(user: User): Promise<Result> {
    return await this.callout.put('user/changePassword', user);
  }

  //Company
  async getCompanyProfile(): Promise<Result> {
    return await this.callout.get('company');
  }

  //Trade
  async getTradeList(): Promise<Result> {
    return await this.callout.post('trade/list', {});
  }
}
