import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.page.html',
  styleUrls: ['./ordersummary.page.scss'],
})
export class OrdersummaryPage implements OnInit {

  constructor(public storage: Storage, public router: Router) { }

  station = {}
  price = 0
  products = []

  amountTimesPrice(amount,price) {
    return Number(amount)*Number(price);
  }

  ngOnInit() {
    this.storage.get("station").then( result => {
      if (!result) {
      console.log("Failed to load station")
      } else {
        var station = result;
        console.log("Staion is:")
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

pay() {
  this.router.navigateByUrl('/trackorder');
}
}