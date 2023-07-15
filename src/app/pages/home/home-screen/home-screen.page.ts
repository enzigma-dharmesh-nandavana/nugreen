import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/models';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  company = new Company();
  constructor(private router: ActivatedRoute) { }
  ngOnInit() {
  }
}
