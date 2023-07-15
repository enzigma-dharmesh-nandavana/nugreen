import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'filter',
  templateUrl: './filter.page.html',
})
export class FilterPage implements OnInit {

  showTradeDate: boolean = false;
  showAmount: boolean = false;
  startDate: Date | undefined;
  endDate: Date| undefined;
  priceRange: any = {
    lower: 0,
    upper: 100
  };
  status: any = {
    open: false,
    inProgress: false,
    completed: false
  };

  constructor() {}

  ngOnInit() {
    this.status = {
      open: false,
      inProgress: false,
      completed: false,
    };
  }

   toggleTradeDate() {
    this.showTradeDate = !this.showTradeDate;
  }

  toggleAmount() {
    this.showAmount = !this.showAmount;
  }
}
