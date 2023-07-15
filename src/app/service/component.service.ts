import { EventEmitter, Injectable, Output } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Color, Position, SpinnerType } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  @Output() showspinner: EventEmitter<any> = new EventEmitter();
  @Output() hidespinner: EventEmitter<any> = new EventEmitter();


  constructor(private toastController: ToastController, private alertController: AlertController) { }
  async showToaster(message: string, color = Color.primary, position = Position.bottom, duration: number = 2500, animated: boolean = false) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: position,
      buttons: [{ text: 'close', role: 'cancel' }],
      color: color,
      animated: animated
    });
    await toast.present();
  }
  // https://ionicframework.com/docs/api/spinner
  async showSpinner(spinnerType = SpinnerType.Lines, size: any = 'ion-medium', color = Color.dark, topMargin = '70%') {
    let spinner = {
      spinnerType: spinnerType,
      color: color,
      size: size,
      topMargin: topMargin

    }
    this.showspinner.emit(spinner)
  }
  async hideSpinner() {
    this.hidespinner.emit();
  }
  async showAlert(header: string, subHeader: string, msg: string, btn: any = [], input = [], duration = 0) {
    if (!duration) {
      btn = [{ text: 'Ok', role: 'cancel' }]
    }
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: msg,
      buttons: btn,
      inputs: input
    })
    await alert.present();
    if (duration) {
      setTimeout(() => {
        alert.dismiss();
      }, duration);
    }
  }
}
