import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  constructor(private router: Router, private engine: EngineService) { }
  ngOnInit() {
    //  this.getTradeList();
    this.trades = [
      {
        "Name": "Trade - Invoice 101",
        "Representative_Name__c": "Remington Brake",
        "createdDate": "16-05-2023",
        "Number_of_Items__c": 3,
        "Total_Weight__c": 563,
        "Total_Amount__c": 1700,
        "Status__c": "Paid",
        "shipmentDetails": "3 Shipments - (By Client)"
      },
      {
        "Name": "Trade - Invoice 102",
        "Representative_Name__c": "Jane Smith",
        "createdDate": "16-05-2023",
        "Number_of_Items__c": 3,
        "Total_Weight__c": 563,
        "Total_Amount__c": 1700,
        "Status__c": "Rejected",
        "shipmentDetails": "Pickup by Nugreen"
      },
      {
        "Name": "Trade - Invoice 103",
        "Representative_Name__c": "James Bond",
        "createdDate": "16-05-2023",
        "Number_of_Items__c": 3,
        "Total_Weight__c": 563,
        "Total_Amount__c": 1700,
        "Status__c": "Accepted",
        "shipmentDetails": "2 Shipments - (By Client)"
      },
      {
        "Name": "Trade - Invoice 104",
        "Representative_Name__c": "Tommy Shelby",
        "createdDate": "16-05-2023",
        "Number_of_Items__c": 3,
        "Total_Weight__c": 563,
        "Total_Amount__c": 1700,
        "Status__c": "Rejected",
        "shipmentDetails": "Pickup by Nugreen"
      }
    ];
  }

  getTradeList(): void {
    this.engine.getTradeList().then((result: Result) => {
      if (result.success) {
        this.trades = result.data;
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
    // Not Working
    const navigationExtras: NavigationExtras = {
      state: {
        trade: trade
      }
    };
    this.router.navigate(['/home/account-history-details'], navigationExtras);
  }
}
