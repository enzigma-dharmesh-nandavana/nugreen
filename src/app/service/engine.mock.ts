import { Result } from '../models/models';
import { environment } from 'src/environments/environment';
import { AxiosRequestConfig } from 'axios';
import * as MockAdapter from 'axios-mock-adapter';
import { StatusCode } from '../models/enums';
export class EngineMock {
  static register(mock: MockAdapter) {

    let baseUrl = environment.baseURL
    mock.onPost(baseUrl + '/auth/login').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.userName == 'user@nugreen.com' && body.password == 'nugreen@1234') {
        return [200, Result.success({ sid: 'testsession' }, 'Login called successfully', StatusCode.success)];
      }
      else {
        return [202, Result.error('Username or password are incorrect')]
      }
    });

    mock.onGet(baseUrl + '/user/emailExists?email=user@nugreen.com').reply((configRequest: AxiosRequestConfig) => {
      return [200, Result.error('', 'Email is not Exist', StatusCode.success)];
    });

    mock.onPost(baseUrl + '/auth/sendCode').reply((configRequest: AxiosRequestConfig) => {
      return [200, Result.success(1234, 'code send Suuessfully', StatusCode.success)];
    });

    mock.onPost(baseUrl + '/user/verify').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.code == '1234') {
        return [200, Result.success(true, 'Verification Successfully', StatusCode.success)];
      }
      else {
        return [201, Result.error('please enter the valid Code')]
      }
    });

    mock.onPost(baseUrl + '/user/register').reply((configRequest: AxiosRequestConfig) => {
      if (configRequest.data) {
        let body = JSON.parse(configRequest.data);
        return [200, Result.success(true, 'User is Create successfully', StatusCode.success)];
      }
      else {
        return [201, Result.error('User data is not avaliable')]
      }
    });

    mock.onPost(baseUrl + '/user/forgotPassword').reply((configRequest: AxiosRequestConfig) => {
      if (configRequest.data == 'user@nugreen.com') {
        return [200, Result.success(true, 'Please check your email you have recive a link', StatusCode.success)];
      }
      else {
        return [201, Result.error('User data is not avaliable')]
      }
    });

    mock.onPut(baseUrl + '/user/updatePassword').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.userName == 'user@nugreen.com' && body.oldPassword == 'nugreen@1234') {
        return [200, Result.success(true, 'Password update successfully', StatusCode.success)];
      }
      else {
        return [202, Result.error('Username or old password are incorrect')]
      }
    });

    mock.onGet(baseUrl + '/user/userInfo').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.userToken == 'something1234') {
        return [200, Result.success(true, 'Fetch user data successfully', StatusCode.success)];
      }
      else {
        return [202, Result.error('UserToken or sid is expired')]
      }
    });

    mock.onPut(baseUrl + '/user/userInfo').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.userToken == 'something1234') {
        return [200, Result.success(true, 'Update user data successfully', StatusCode.success)];
      }
      else {
        return [202, Result.error('UserToken or sid is expired')]
      }
    });
    mock.onPut(baseUrl + '/user/changePassword').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.userName == 'user@nugreen.com' && body.oldPassword == 'nugreen@1234') {
        return [200, Result.success(true, 'Password changePassword successfully', StatusCode.success)];
      }
      else {
        return [202, Result.error('Username or old password are incorrect')]
      }
    });

    mock.onGet(baseUrl + '/user/getSession').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.userToken == 'something1234') {
        return [200, Result.success({ sid: '987765f66367t' }, 'session', StatusCode.success)];
      }
      else {
        return [202, Result.error('Username or old password are incorrect')]
      }

    });

    mock.onGet(baseUrl + '/user/logout').reply((configRequest: AxiosRequestConfig) => {
      let body = JSON.parse(configRequest.data)
      if (body.userName == 'user@nugreen.com' && body.password == 'nugreen@1234') {
        return [200, Result.success(true, 'Log Out  Successfully', StatusCode.success)];
      }
      else {
        return [202, Result.error('Username or password are incorrect')]
      }
    });
  }
}
