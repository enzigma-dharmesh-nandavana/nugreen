import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/models';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  company = new Company();

  constructor(private userService: UserService) {
    console.log('INIT HOME-SCREEN');
    this.userService.emitCompany();
    this.userService.onCompanyUpdated.subscribe((data: any) => {
      console.log('DATA HOME-SCREEN ', data);
      this.company = data;
    });
  }
  ngOnInit() { }
}
