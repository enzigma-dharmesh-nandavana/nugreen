import { Company, Result, Trade } from '../models/models';
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

    mock.onGet(baseUrl + '/company').reply((configRequest: AxiosRequestConfig) => {
      let company = new Company();
      company.Verified__c = true;
      if(company.Verified__c){
        company.Full_Legal_Name_Of_Business__c = 'MI Inc';
        company.Vendor_Number__c = 'INY-007';
        company.Doing_Business_As__c = 'MI Corp';
        company.Organization_Type__c = 'recycler';
        company.Phone = 9999990007;
        company.Do_you_have_loading_dock__c = true;
        company.Federal_EIN__c = 777777007;
        company.Sales_Tax_Number__c = 888880007;
        company.State_of_Incorporation__c = 'CA';
        company.Bank_Name__c = 'Silicon Valley Bank';
        company.Account_Holder_Name__c = 'John Doe';
        company.Account_Number__c = '1234567890';
        company.Routing_Number__c = '999999999';
        company.Payment_Method__c = 'ACH';
      }
      return [200, Result.success(company, 'Company Details fetched successfully', StatusCode.success)];
    });

    mock.onPost(baseUrl + '/trade/list').reply((configRequest: AxiosRequestConfig) => {
      let trades: Trade[] = [
        {
          Name: "Trade - Invoice 101",
          Representative_Name__c: "Remington Brake",
          createdDate: "16-05-2023",
          Number_of_Items__c: 3,
          Total_Weight__c: 563,
          Total_Amount__c: 1700,
          Status__c: "Paid",
          shipmentDetails: "3 Shipments - (By Client)"
        },
        {
          Name: "Trade - Invoice 102",
          Representative_Name__c: "Jane Smith",
          createdDate: "16-05-2023",
          Number_of_Items__c: 3,
          Total_Weight__c: 563,
          Total_Amount__c: 1700,
          Status__c: "Rejected",
          shipmentDetails: "Pickup by Nugreen"
        },
        {
          Name: "Trade - Invoice 103",
          Representative_Name__c: "James Bond",
          createdDate: "16-05-2023",
          Number_of_Items__c: 3,
          Total_Weight__c: 563,
          Total_Amount__c: 1700,
          Status__c: "Accepted",
          shipmentDetails: "2 Shipments - (By Client)"
        },
        {
          Name: "Trade - Invoice 104",
          Representative_Name__c: "Tommy Shelby",
          createdDate: "16-05-2023",
          Number_of_Items__c: 3,
          Total_Weight__c: 563,
          Total_Amount__c: 1700,
          Status__c: "Rejected",
          shipmentDetails: "Pickup by Nugreen"
        }
      ];
      return [200, Result.success(trades, 'Trades fetched successfully', StatusCode.success)];
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
