import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'verify-mobile-banking',
  templateUrl: './verify-mobile-banking.page.html',
  styleUrls: ['./verify-mobile-banking.page.scss'],
})
export class VerifyMobileBankingPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(){}

  registeredEmailMobile!:string;

  onSubmit() {
    console.log('registeredEmailMobile := ' + this.registeredEmailMobile);
    const editBanking = true;
    this.router.navigate(['/home/banking-information'], { queryParams: { flag: editBanking } });
  }
}
