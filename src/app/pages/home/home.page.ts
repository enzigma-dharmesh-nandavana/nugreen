import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/models';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  company: Company = new Company();

  constructor(private userService: UserService) {
    console.log('CONST HOME');
    // this.userService.getCompanyProfile();
    this.userService.onCompanyUpdated.subscribe((data: any) => {
      console.log('DATA HOME', data);
      this.company = data;
    });
  }
  ngOnInit() { }
}
