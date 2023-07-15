import { Component, OnInit } from '@angular/core';
import { Company, Shipment, TradeItem } from 'src/app/models/models';

@Component({
  selector: 'account-history-details',
  templateUrl: './account-history-details.page.html',
  styleUrls: ['./account-history-details.page.scss'],
})

export class AccountHistoryDetailsPage implements OnInit {
  company = new Company();
  itemList: TradeItem[] = [];
  shipingList: Shipment[] = [];
  constructor(){}

  ngOnInit() {
    this.itemList = [
      { Name: 'Laptop', quantity: 30 },
      { Name: 'Mobiles', quantity: 40 },
      { Name: 'Screens', quantity: 10 },
    ];

    this.shipingList = [
      { Name: 'Shipment 1', loadingDockNo: 13, Carrier_Name__c: 'Fedex', Tracking_Number__c: 1236789, Shipping_Date__c: '15-06-2023' },
      { Name: 'Shipment 2', loadingDockNo: 10, Carrier_Name__c: 'DHL', Tracking_Number__c: 34543546, Shipping_Date__c: '10-06-2023' },
      { Name: 'Shipment 3', loadingDockNo: 13, Carrier_Name__c: 'Fedex', Tracking_Number__c: 2343545, Shipping_Date__c: '07-06-2023' },
    ];
  }
}
