import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result, Trade } from 'src/app/models/models';
import { EngineService } from 'src/app/service/engine.service';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';

@Component({
  selector: 'account-history',
  templateUrl: './account-history.page.html',
  styleUrls: ['./account-history.page.scss'],
  providers: [SearchFilterPipe]
})

export class AccountHistoryPage implements OnInit {
  searchText !: string;
  trades: Trade[] = [];
  Fields: string[] = ['Name', 'createdDate', 'Representative_Name__c', 'Number_of_Items__c', 'Total_Weight__c', 'Total_Amount__c', 'Status__c', 'shipmentDetails'];
  tradeDetailsMap: { label: string; field: keyof Trade }[] = [
    { label: 'Created On', field: 'createdDate' },
    { label: 'Number of items', field: 'Number_of_Items__c' },
    { label: 'Total Weight', field: 'Total_Weight__c' },
    { label: 'Total amount (excl. taxes)', field: 'Total_Amount__c' },
    { label: 'Status', field: 'Status__c' },
    { label: 'Shipment Details', field: 'shipmentDetails' }
  ];

  constructor(private router: Router, private engine: EngineService) { }
  ngOnInit() {
    this.getTradeList();
  }

  getTradeList(): void {
    this.engine.getTradeList().then((result: Result) => {
      if (result.success) {
        this.trades = result.data;
        console.log('Trade', this.trades);
        
      } else {
        alert(result.message);
      }
    }).catch((result: Result) => {
      alert(result.message);
    });
  }

  onSearch($event: any) {
    this.searchText = $event.target.value;
  }

  handleTradeCardClick(trade: Trade) {
  }
}
