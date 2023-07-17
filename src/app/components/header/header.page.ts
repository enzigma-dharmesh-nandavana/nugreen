import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/models';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'nu-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class Header implements OnInit {
  company = new Company();
  showHamburger = false;
  currentPageUrl !: string;

  constructor(private router: Router, private userService: UserService) { }
  ngOnInit() {
    this.userService.onCompanyUpdated.subscribe(() => {
      this.company = this.userService.company;
    });
    this.currentPageUrl = this.router.url;
    if (this.currentPageUrl.includes('account-history')) {
      this.showHamburger = true;
    }else{
      this.showHamburger = false;
    }
  }
}
