import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit{

  constructor(public storage: Storage, public router: Router) { }
  
  public station = {}

  public products = [
    {
      "title":"Kaisersemmel",
      "description":"Unser Klassiker, das Kaiserbrötchen. Macht sich immer gut entweder mit Nutella oder Marmelade.",
      "price":0.29,
      "link": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kaisersemmel-.jpg",
      "amount": 0 
    },
    {
      "title":"Laugenbrötchen",
      "description":"Lecker,lecker,lecker.. Das Laugenbrötchen",
      "price":0.49,
      "link": "assets/images/laugenbroetchen.png",
      "amount": 0
    }
  ]

  public order = []

  public finalPrice = 0

  public increase(item) {
    item.amount++;
    this.finalPrice = this.finalPrice + item.price
  }
  public decrease(item) {
    item.amount--;
    this.finalPrice = this.finalPrice - item.price
  }

  ngOnInit() {
    this.storage.get("station").then( result => {
      if (!result) {
      console.log("Failed to load station")
      } else {
        var station = result;
        console.log("Staion is:")
        this.station = result;
        this.products = this.products;
      }
  })
  }

  checkout() {
    this.storage.set("finalPrice", this.finalPrice);
    this.storage.set("products",this.products);
    this.router.navigateByUrl('/ordersummary');
  }

}
