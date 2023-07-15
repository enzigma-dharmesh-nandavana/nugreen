import { Component, EnvironmentInjector } from '@angular/core';
import { ComponentService } from './service/component.service';
import { Color } from './models/enums';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/signup', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  showSpinner: boolean = false
  spinnerType: any
  color = Color.primary;
  duration: number = 86400000;
  size: any;
  topMargin: string = '100%' + '!important'
  constructor(public environmentInjector: EnvironmentInjector, private componenetService: ComponentService) { }
  ngOnInit() {
    this.componenetService.showspinner.subscribe((spinner) => {
      this.spinnerType = spinner.spinnerType
      this.color = spinner.color
      this.duration = spinner.duration
      this.size = spinner.size
      this.topMargin = spinner.topMargin + '!important'
      this.showSpinner = true
    })
    this.componenetService.hidespinner.subscribe(() => {
      this.showSpinner = false

    })
  }
}
