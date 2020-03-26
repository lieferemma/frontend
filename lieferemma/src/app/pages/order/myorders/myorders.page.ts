import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { OrderReply } from 'src/app/proto/lieferemma_api_pb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {
  orders = [
    {
      "orderId": 1,
      "visible": true,
      customer: {
        "name": "Emma Schmidt",
        "tel": "01601234567",
        "email": "emma.schmidt@web.de"
      },
      products: [
        {
          "title":"Kaisersemmel",
          "description":"Unser Klassiker, das Kaiserbrötchen. Macht sich immer gut entweder mit Nutella oder Marmelade.",
          "price":0.29,
          "link": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kaisersemmel-.jpg",
          "amount": 2 
        },
        {
          "title":"Laugenbrötchen",
          "description":"Lecker,lecker,lecker.. Das Laugenbrötchen",
          "price":0.49,
          "link": "assets/images/laugenbroetchen.png",
          "amount": 2
        }
      ],
      "total": 1.56

    },
    {
      "orderId": 2,
      "visible": true,
      customer: {
        "name": "Heide Schmidt",
        "tel": "016012342432",
        "email": "heide.schmidt@web.de"
      },
      products: [
        {
          "title":"Kaisersemmel",
          "description":"Unser Klassiker, das Kaiserbrötchen. Macht sich immer gut entweder mit Nutella oder Marmelade.",
          "price":0.29,
          "link": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kaisersemmel-.jpg",
          "amount": 1 
        },
        {
          "title":"Laugenbrötchen",
          "description":"Lecker,lecker,lecker.. Das Laugenbrötchen",
          "price":0.49,
          "link": "assets/images/laugenbroetchen.png",
          "amount": 1
        }
      ],
      "total": 0.78

    }
  ]

  constructor(private storage: Storage, public router: Router) { }
  orders_grpc : OrderReply[];
  ngOnInit() {

    this.storage.get('orders').then((orders) => {
      this.orders_grpc = orders;
    });
  }

  amountTimesPrice(amount,price) {
    return Number(amount)*Number(price);
  }
  fast_delay(index)  {
    return (500+Number(index) * 500);
  }

  deleteAlertConfirm(orderIndex, orderName) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Bestellung ' + orderName + ' abgeholt?';
    alert.message = 'Bitte bestätigen, der Abholcode ist nicht wiederherstellbar.';
    alert.buttons = [
      {
        text: 'Nein',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel:');
        }
      }, {
        text: 'Ja',
        handler: () => {
          //delete this.orders[orderIndex]
          //this.orders[orderIndex].visible = false;
          //document.getElementById(orderIndex).isDisplayed()).toBe(false);
          //document.getElementById(orderIndex).style.display = "none";
          //console.log('Confirm Okay')

          document.getElementById(orderIndex).classList.remove("fadeInRight");
          document.getElementById(orderIndex).classList.remove("fast_delay-500")
          document.getElementById(orderIndex).classList.remove("fast_delay-1000")
          document.getElementById(orderIndex).classList.remove("fast_delay-1500")

          document.getElementById(orderIndex).classList.add("fadeOutLeft");

          //document.getElementById(orderIndex).isDisplayed()).toBe(false);
          setTimeout(x => 
            {
              this.orders[orderIndex].visible = false;
              document.getElementById(orderIndex).style.display = "none";
              //TODO delete from storage
              //deleteFromOrders(orderName);
            }, 500);
          console.log('Confirm Okay')
        }
      }
    ];

    
  
    document.body.appendChild(alert);
    return alert.present();
  }

  hasOrders(){
    if (this.orders.length != 0) {
      return true;
    } else {
      return false;
    }
  }
}
