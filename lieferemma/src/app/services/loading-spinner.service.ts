import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  constructor(public loadingController: LoadingController) {}

  async presentLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 0
    })
    await loading.present();
  }

  dismiss() {
    this.loadingController.dismiss();
  }

}