import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { OrderReply, Currency } from 'src/app/proto/lieferemma_api_pb';
import { NavController, Platform } from "@ionic/angular";

declare var window: any;
declare var paypal: any;

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.page.html',
  styleUrls: ['./ordersummary.page.scss'],
})
export class OrdersummaryPage implements OnInit {

  constructor(public navCtrl: NavController, public storage: Storage, public router: Router) {   }

  station = {} 
  price = 0
  products = []


  amountTimesPrice(amount,price) {
    return Number(amount)*Number(price);
  }

  ngOnInit() {
    console.log('resolving promise...');
    this.loadScript("https://www.paypal.com/sdk/js?client-id=AWrOQBrGnWYrk4wzT8yGbCGNJqcIyyieIL_J0320wg0jcp1G2eiMdQ1wEJ4ePFo6Lzou8ILEvVX6cspc&currency=EUR");
    console.log("loaded paypal")
    this.storage.get("station").then( result => {
      if (!result) {
      console.log("Failed to load station")
      } else {
        this.station = result;
      }
  })
  this.storage.get("finalPrice").then( result => {
    if (!result) {
    console.log("Failed to load price")
    } else {
      this.price = result;
    }
  })
  this.storage.get("products").then( result => {
    if (!result) {
    console.log("Failed to load products")
    } else {
      this.products = result;
    }
  })
}

pay(shop_ID) {
  var payPalConfig = {
    env: 'sandbox',
    client: {
      sandbox: shop_ID,
    },
    commit: false,
    createOrder: (data, actions)=> {
      return actions.order.create({
        purchase_units: [{
          amount: {
            currency_code: "EUR",
            value: this.price
          }
        }]
      });
    },
    onApprove: ()=>{
      this.navCtrl.navigateForward(['successmodal']);
    },
  }
  paypal.Buttons(payPalConfig).render('#paypal-button');

 
}

public loadScript(url) {

  console.log('preparing to load...')
  let node = document.createElement('script');
  node.src = url;
  node.type = 'text/javascript';
  node.async = true;
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
  }

}