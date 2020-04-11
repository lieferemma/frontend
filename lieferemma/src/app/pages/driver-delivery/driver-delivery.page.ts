import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-delivery',
  templateUrl: './driver-delivery.page.html',
  styleUrls: ['./driver-delivery.page.scss'],
})
export class DriverDeliveryPage implements OnInit {

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
                "amount": 11 
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
  delivery : any 
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
  
  items = [];
  deliverypoint = 0;

  amountTimesPrice(amount,price) {
    return Number(amount)*Number(price);
  }

  ngOnInit() {

    
    // get orders from deliverypoint with index above (e.g. form some function)
    this.orders = [];
    this.delivery = this.route.delivery_points[this.deliverypoint];

    console.log(this.delivery);
    
    this.delivery.orders.forEach(order =>{
        this.orders.push(order);
        this.items.push(order.orderId);
    })
  
    const searchbar = document.querySelector('ion-searchbar');
    
    searchbar.addEventListener('ionInput', (event => {
      const query = (event.target as HTMLTextAreaElement).value.toLowerCase();
      requestAnimationFrame(() => {
        let i = 0;        
        this.items.forEach(item => {
          const shouldShow = item.toString().toLowerCase().indexOf(query) > -1;
          if (this.orders[i].visible) {
            document.getElementById(i.toString()).style.display = shouldShow ? 'block' : 'none';
          }
          i++;
        });
      });
    })
    );
  }

  presentAlertConfirm(orderIndex, orderName) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Bestellung ' + orderName + ' abgeholt?';
    alert.message = 'Bitte bestätigen.';
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
            }, 500);
          console.log('Confirm Okay')
        }
      }
    ];

    
  
    document.body.appendChild(alert);
    return alert.present();
  }

  fast_delay(index)  {
    return (500+Number(index) * 500);
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
  
  continueTour(orders) {
    if (this.ordersInvisible(orders)) {
      this.nextTour(); 
    } else {
      document.querySelector('ion-searchbar').value = "";

      let i = 0;
      this.orders.forEach(order => {        
        if (order.visible) {
          document.getElementById(i.toString()).style.display = 'block';
        }
        i++;
      });
      const alert = document.createElement('ion-alert');
      alert.header = 'Offene Bestellungen';
      alert.message = 'Es wurde nicht alles abgeholt, bist du dir sicher?';
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
            this.nextTour(); 
          }
        }
      ];
    
      document.body.appendChild(alert);
      return alert.present();
    }
    
    
  }

  nextTour() {

    var lat = this.lastTourCheck() ? this.station.position.lat : this.route.delivery_points[this.deliverypoint+1].position.latitude;
    var lon = this.lastTourCheck() ? this.station.position.lgn : this.route.delivery_points[this.deliverypoint+1].position.longitude;
    
    // intent to start gmaps;
    if  ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPad") != -1) || 
     (navigator.platform.indexOf("iPod") != -1)) {
    window.open("maps://maps.google.com/maps?daddr="+lat+","+lon+"&amp;ll=");

     }

    else /* else use Google */
    window.open("https://maps.google.com/maps?daddr="+lat+","+lon+"&amp;ll=");
  }

  lastTourCheck(){
    if ((this.deliverypoint +1) == this.route.delivery_points.length) {
      return true;
    } else {
      return false;
    }
  }
}