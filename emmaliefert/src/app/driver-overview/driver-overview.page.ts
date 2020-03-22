import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-driver-overview',
  templateUrl: './driver-overview.page.html',
  styleUrls: ['./driver-overview.page.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('0.6s cubic-bezier(.4, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'translateY(-10in)', opacity: 0, height: '*' }),
        animate('0.4s cubic-bezier(.4, -0.6, 0.2, 0.6)', 
         style({ 
           transform: 'scale(0.5)', opacity: 0, 
           height: '0px', margin: '0px' 
         })) 
      ])
    ])
  ]
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
  route = { 
    "route_uuid":"32131esajapdjpsjfea",
    delivery_points: [{
        "uuid":"dsaffasd",
        "position": {
          latitude: 48.7859251,
          longitude: 9.1928313
        },
        "scheduled_time": "05:30",
        "parking_time": "06:00",
        orders: [
          {
            "orderId": "LS3AJ1",
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
                "amount": 1 
              },
              {
                "title":"Laugenbrötchen",
                "description":"Lecker,lecker,lecker.. Das Laugenbrötchen",
                "price":0.49,
                "link": "assets/images/laugenbroetchen.png",
                "amount": 6
              }
            ],
            "total": 6.13
      
          },
          
          {
            "orderId": "KQ1OL2",
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

      },
      {
        "uuid":"4p32j443232okpjp34",
        "position": {
          latitude: 48.755845,
          longitude: 9.162932
        },
        "scheduled_time": "07:30",
        "parking_time": "08:00",
        orders: [
          {
            "orderId": "A52OLR",
            "visible": true,
            customer: {
              "name": "Peter Schmidt",
              "tel": "01601234567",
              "email": "peter.schmidt@web.de"
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
            "orderId": "OJ3BH4",
            "visible": true,
            customer: {
              "name": "Hans Schmidt",
              "tel": "016012342432",
              "email": "hans.schmidt@web.de"
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

      },
    ],
    route_points: []
  }
  
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

  amountTimesPrice(amount,price) {
    return Number(amount)*Number(price);
  }

  ngOnInit() {

    //combineorders
    this.orders = [];
    this.route.delivery_points.forEach(delivery => {
      delivery.orders.forEach(order =>{
        this.orders.push(order);
      })
      }
    )

  }

  presentAlertConfirm(orderIndex, orderName) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Bestellung ' + orderName + ' eingeladen?';
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
          //delete this.orders[orderIndex]

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
            }, 500);
          console.log('Confirm Okay')
        }
      }
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }

  ordersInvisible(orders){
    let returnbool = true;
    this.orders.forEach(order => {
      if (order.visible) {
        returnbool = false;
        return returnbool;
      }
    });
    return returnbool;

  }
  startTour() {
    // intent to start gmaps;
    if  ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPad") != -1) || 
     (navigator.platform.indexOf("iPod") != -1)) {
    window.open("maps://maps.google.com/maps?daddr="+this.route.delivery_points[0].position.latitude+","+this.route.delivery_points[0].position.longitude+"&amp;ll=");

     }
    else /* else use Google */
    window.open("https://maps.google.com/maps?daddr="+this.route.delivery_points[0].position.latitude+","+this.route.delivery_points[0].position.longitude+"&amp;ll=");
  }

  fast_delay(index)  {
    return (500+Number(index) * 500);
  }
}

