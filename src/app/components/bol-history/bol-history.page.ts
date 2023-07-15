import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'bol-history',
  templateUrl: './bol-history.page.html',
})
export class BolHistoryPage implements OnInit {

  filteredRecords: any[] = [
    {
      date: new Date(2023, 5, 18), // Sample date
      bols: ['BOL-001', 'BOL-002'] // Sample BOLs for the same date
    },
    {
      date: new Date(2023, 5, 17), // Sample date
      bols: ['BOL-003'] // Sample BOL for a different date
    },
    // Add more sample records as needed
  ];
  ngOnInit() {
  }
}
