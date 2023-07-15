import { StatusCode } from "./enums";


export class User {
    code?: string
    verificationCodeId?: string
    email?: string;
    userName?: string;
    password?: string;
    codeInt: any;
    constructor() {
    }
}

export class Contact {

    Salutation?: string;
    FirstName?: string;
    LastName?: string;

    Are_you_a_recycling_company__c?: string;
    Email?: string;
    How_can_we_help__c?: string;
    Preferred_Method_of_Communication__c?: string;
    Company_Name__c?: string;  // AccountID
    Phone?: string;
    MobilePhone?: string;
    Is_Communication_Opt_In__c?: boolean;
    Is_Terms_And_Conditions__c?: boolean;
    Is_Vendor_Agreement__c?: boolean;

    constructor() {
    }
}
export class Result {
    constructor(
        public data?: any,
        public message: string = '',
        public statusCode: StatusCode = StatusCode.success,
        public success: boolean = false,
    ) { }

    public static success(data?: any, message?: string, statusCode: StatusCode = StatusCode.success): any {
        return new Result(data, message, statusCode, true);
    }

    public static error(message: string, data?: any, statusCode: StatusCode = StatusCode.serverError): any {
        return new Result(data, message, statusCode, false);
    }
}

export class Company {
    Full_Legal_Name_Of_Business__c?: string;
    Vendor_Number__c?: string;

    Doing_Business_As__c?: string;
    Organization_Type__c?: string;
    Phone?: number;
    Do_you_have_loading_dock__c?: boolean;
    Federal_EIN__c?: number;
    Stage__c?: string;
    Sales_Tax_Number__c?: number;
    State_of_Incorporation__c?: string;

    Bank_Name__c?: string;
    Account_Holder_Name__c?: string;
    Account_Number__c?: string;
    Routing_Number__c?: string;
    Payment_Method__c?: string;

    isVerified = false;
    underVerification = false;
    documentRejected = false;
}

export class Trade {
    Name?: string;
    Representative_Name__c?: string;
    createdDate?: string;
    Number_of_Items__c?: number;
    Total_Amount__c?: number;
    Total_Weight__c?: number;
    Status__c?: string;
    shipmentDetails?: string;

    Received_Date__c?: Date;
    Shipping_Date__c?: Date;
    Total_Quantity__c?: number;
}

export class TradeItem {
    Name?: string;
    Price__c?: number;
    Material_option__c?: string;
    quantity?: number;
}

export class Shipment {
    Name?: string;
    Carrier_Name__c?: string;
    Tracking_Number__c?: Number;
    Shipping_Date__c?: string;

    loadingDockNo?: Number;
}
