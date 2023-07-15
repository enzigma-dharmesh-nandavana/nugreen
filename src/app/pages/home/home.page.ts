import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/models';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  company = new Company();

  constructor() { }
  ngOnInit() {
  }
}
