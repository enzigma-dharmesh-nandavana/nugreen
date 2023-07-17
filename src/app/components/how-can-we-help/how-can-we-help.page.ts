import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/models';

@Component({
  selector: 'how-can-we-help',
  templateUrl: './how-can-we-help.page.html'
})
export class HowCanWeHelpPage {
  @Input() contact: Contact = new Contact();
  @Output() data: EventEmitter<any> = new EventEmitter();
  @Output() onBack: EventEmitter<any> = new EventEmitter();

  selectedOptions: string[] = ["sell"];
  errorMessage: string = '';

  

  setData(event: any, fieldName: string) {
    this.errorMessage = "";
    if (event.detail.checked) {
      this.selectedOptions.push(fieldName);
    } else {
      const index = this.selectedOptions.indexOf(fieldName);
      if (index > -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
    this.contact.How_can_we_help__c = this.selectedOptions.join(';');
  }

  handleBack() {
    this.onBack.emit();
  }
  handleNext() {
    if (this.selectedOptions.length == 0) {
      this.errorMessage = "Please select at least one option to continue";
    } else {
      if(!this.contact.How_can_we_help__c){
        this.contact.How_can_we_help__c = 'sell';
      }
      console.log('CON : ', this.contact);
      this.data.emit(this.contact);
    }
  }
}
