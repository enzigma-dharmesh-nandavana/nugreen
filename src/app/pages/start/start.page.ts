import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignUpPage } from '../signup/signup.page';

@Component({
  selector: 'start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  getStarted = StartPage
  login = SignUpPage
  constructor() { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
