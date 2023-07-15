import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payment-history',
  templateUrl: './payment-history.page.html'
})
export class PaymentHistoryPage implements OnInit {

  public transactions: any[] = [
    { name: 'Shipment 1', amount: '$100', date: 'May 1, 2022', invoiceImage: '/assets/images/sampleInvoice.png', showInvoice: false },
    { name: 'Shipment 2', amount: '$200', date: 'May 1, 2022', invoiceImage: '/assets/images/sampleInvoice.png', showInvoice: false },
    { name: 'Shipment 3', amount: '$150', date: 'May 2, 2022', invoiceImage: '/assets/images/sampleInvoice.png', showInvoice: false },
    { name: 'Shipment 4', amount: '$300', date: 'May 2, 2022', invoiceImage: '/assets/images/sampleInvoice.png', showInvoice: false },
  ];

  public transactionGroups: { [key: string]: any[] } = {};
  public transactionDates: string[] = [];

  constructor() {
    this.groupTransactionsByDate();
  }

  groupTransactionsByDate() {
    this.transactions.forEach((transaction: any) => {
      const date = transaction.date;
      if (!this.transactionGroups[date]) {
        this.transactionGroups[date] = [];
        this.transactionDates.push(date);
      }
      this.transactionGroups[date].push(transaction);
    });
  }

  toggleInvoice(transaction: any) {
    transaction.showInvoice = !transaction.showInvoice;
  }

  ngOnInit() {
  }
}
