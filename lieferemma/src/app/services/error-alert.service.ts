import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorAlertService {

  constructor(public alertController: AlertController) {}

  async presentAlert(title,msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'Neu laden',
          role: 'reload',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    await alert.present();
    return alert;
  }

  async presentAlertConfirm(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            alert.dismiss();
          }
        }, {
          text: 'Neu laden',
          role: 'reload',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    await alert.present();
    return alert;
  }



}