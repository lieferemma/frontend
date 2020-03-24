import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from "@ionic/angular";

@Component({
  selector: 'app-successmodal',
  templateUrl: './successmodal.page.html',
  styleUrls: ['./successmodal.page.scss'],
})
export class SuccessmodalPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(x => 
      {
        this.navCtrl.navigateForward(['trackorder']);
      }, 2000);
  }

}
