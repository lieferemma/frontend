import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { stat } from 'fs';
import { MobileShop } from 'src/app/proto/lieferemma_api_pb';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit{

  station: MobileShop
  station_title : string


  constructor(public storage: Storage, public router: Router) {

    if (this.router.getCurrentNavigation().extras.state) {
      this.station = this.router.getCurrentNavigation().extras.state.station;
    }

   }
  
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
      this.station_title = this.station.getTitle();
  }

  checkout() {
    this.storage.set("finalPrice", this.finalPrice);
    this.storage.set("products",this.products);
    this.router.navigateByUrl('/ordersummary');
  }

  fast_delay(index)  {
    return (500+Number(index) * 500);
  }
}
