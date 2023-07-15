import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'verification-successful',
  templateUrl: './verification-successful.page.html',
  styleUrls: ['./verification-successful.page.scss'],
})
export class VerificationSuccessfulPage implements OnInit {
  constructor(private router: Router) { }

  next(){
    this.router.navigate(['/tell-us-about-yourself']);
  }
  ngOnInit() {
  }
}
