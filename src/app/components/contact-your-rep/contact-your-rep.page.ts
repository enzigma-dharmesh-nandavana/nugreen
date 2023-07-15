import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'contact-your-rep',
  templateUrl: './contact-your-rep.page.html',
})
export class ContactYourRepPage implements OnInit {

  showCallOptions: boolean = false;

  constructor() { }

  toggleCallOptions() {
    this.showCallOptions = !this.showCallOptions;
  }
  
  ngOnInit() {
  }
}
