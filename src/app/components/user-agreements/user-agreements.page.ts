import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/models';

@Component({
  selector: 'user-agreements',
  templateUrl: './user-agreements.page.html',
  styleUrls: ['./user-agreements.page.scss'],
})
export class UserAgreementsPage {
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Input() contact = new Contact() as any;
  agreementMap: { [key: string]: { title: string, value: boolean, content: string, apiName : string } } =
    {
      'Is_Communication_Opt_In__c': {
        title: 'Communication Opt-In', value: false, content: 'Communication Opt In Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.Communication Opt In Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.Communication Opt In Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.Communication Opt In Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.', apiName :'Is_Communication_Opt_In__c'
      },
      'Is_Terms_And_Conditions__c': {
        title: 'Terms & Conditions', value: false, content: 'Terms and Conditions Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.Terms and Conditions Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.', apiName :'Is_Terms_And_Conditions__c'
      },
      'Is_Vendor_Agreement__c': {
        title: 'Vendor Agreement', value: false, content: 'Vendor Agreement Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.Vendor Agreement Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum lacus, ac venenatis sem pellentesque at. Integer eu ligula faucibus, placerat mi a, dignissim tortor. Donec aliquam, velit nec tempus facilisis, metus massa convallis lorem, ac lobortis turpis dolor nec sapien. Phasellus nec justo in enim commodo tincidunt. Nullam dignissim auctor diam, sed dignissim elit finibus id. Etiam hendrerit ultricies sem, eu commodo nulla efficitur sed. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem. Sed non libero velit. Vivamus rutrum felis ac arcu viverra, at sagittis justo consequat. Suspendisse potenti. Curabitur tincidunt, risus at aliquet fermentum, tellus mauris iaculis enim, non cursus lorem libero eu sem.', apiName :'Is_Vendor_Agreement__c'
      }
    };

    agreements: { title: string, value: boolean, content: string, apiName : string }[] = Object.values(this.agreementMap);
    currentIndex = 0;
    currentAgreement = this.agreements[this.currentIndex];
    showErrorMessage: boolean = false;
    disableNext: boolean = false;
  
    goBack() {
      this.currentIndex--;
      this.currentAgreement = this.agreements[this.currentIndex];
      this.showErrorMessage = false;
      if(this.currentIndex !=0){
        this.disableNext = true;
      }else{
        this.disableNext=false;
      }
    }
  
    checkValue($event: any, currentIndex: number) {
      if(currentIndex != 0){
        let selectedOption = $event.detail.value;
        if (selectedOption === 'false') {
          this.showErrorMessage = true;
          this.disableNext = true;
        } else {
          this.showErrorMessage = false;
          this.disableNext = false;
        }
      }
    }

    goNext(currentIndex:number) {
      if(currentIndex != 0){
        this.disableNext = true;
      }
      if(currentIndex != 2){
        this.currentIndex++;
        this.currentAgreement = this.agreements[this.currentIndex];
        this.disableNext = true;
      }
      if(currentIndex == 2){
        this.submit.emit(this.contact);
      }
    }
}

