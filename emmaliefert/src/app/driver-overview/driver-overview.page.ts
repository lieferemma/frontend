import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-overview',
  templateUrl: './driver-overview.page.html',
  styleUrls: ['./driver-overview.page.scss'],
})
export class DriverOverviewPage implements OnInit {

  constructor() { }
  station =  {
      "position": {
        "lat": 48.775845,
        "lgn": 9.182932
      },
      "title": "Bäckerei Maier"
    }

  price = 0;

  orders = [
    {
      "orderId": 1,
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

  amountTimesPrice(amount,price) {
    return Number(amount)*Number(price);
  }

  ngOnInit() {
  }

  presentAlertConfirm(orderId) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Bestellung ' + orderId + ' eingeladen?';
    alert.message = 'Bitte bestätigen.';
    alert.buttons = [
      {
        text: 'Nein',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Ja',
        handler: () => {
          console.log('Confirm Okay')
        }
      }
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }
}

