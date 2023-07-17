import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/models';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'company-profile',
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],

})
export class CompanyProfilePage implements OnInit {
  company = new Company();
  editMode: boolean = false;

  fullLegalNameBusinessControl: FormControl;
  dbaControl: FormControl;
  organizationTypeControl: FormControl;
  businessPhoneControl: FormControl;
  loadingDockControl: FormControl;
  stateOfIncorporationControl: FormControl;
  salesTaxNumberControl: FormControl;

  constructor(private userService: UserService, private router: Router) {
    this.fullLegalNameBusinessControl = new FormControl('', Validators.pattern(/^[a-zA-Z\s]+$/));
    this.dbaControl = new FormControl('', Validators.pattern(/^[a-zA-Z\s]+$/));
    this.organizationTypeControl = new FormControl('', Validators.required);
    this.loadingDockControl = new FormControl('', Validators.required);
    this.stateOfIncorporationControl = new FormControl('', Validators.pattern(/^[a-zA-Z]+$/));
    this.businessPhoneControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10)]);
    this.salesTaxNumberControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10)]);
  }
  ngOnInit() {
    console.log('INIT COMPANY');
    this.userService.onCompanyUpdated.subscribe((data: any) => {
      console.log('DATA COMPANY ', data);
      this.company = data;
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Route changed:', event);
        this.userService.emitCompany();
      });
  }

  onSubmit() {
    console.log("COMPANY DETAILS : " + JSON.stringify(this.company));
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onSave() {
    this.editMode = !this.editMode;
    console.log("COMPANY DETAILS : " + this.company);
  }
}
