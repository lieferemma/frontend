import { Component, OnInit } from '@angular/core';
import { NavController, Platform, IonSlides } from "@ionic/angular";
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.page.html',
  styleUrls: ['./trackorder.page.scss'],
})
export class TrackorderPage{

  constructor(public http: Http,
    public plt: Platform,
    public router: Router,
    public navCtrl: NavController) {

    }

    ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
      .pipe(map(res => res.json()))
      .subscribe(stations => this.initMap(stations));
    });
  }

  initMap(stations) {
    stations = [      
      {
        "position": {
          "lat": 48.768320,
          "lgn": 9.247510
        },
        "title": "Dein Abholpunkt"
      }
    ]

    var driver = [      
      {
        "position": {
          "lat": 48.768320,
          "lgn": 9.227510
        },
        "title": "Deine Emma"
      }      
    ]
    var midlat = (driver[0].position.lat + stations[0].position.lat)/2;
    var midlgn = (driver[0].position.lgn + stations[0].position.lgn)/2;
    const map = new Map('emmamap').setView([midlat, midlgn], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = icon({
      iconUrl: 'assets/images/store.png',
      iconSize: [64, 64], 
      popupAnchor: [0, -20]
    });

    const driverIcon = icon({
      iconUrl: 'https://unpkg.com/ionicons@5.0.0/dist/svg/bus.svg',
      iconSize: [64, 64], 
      popupAnchor: [0, -20]
    });

    stations.forEach((station) => {
      marker([station.position.lat, station.position.lgn], {icon: customMarkerIcon})
      .bindPopup(`<b>${station.title}</b>`, { autoClose: false })
      .addTo(map).openPopup();
    });

    driver.forEach((station) => {
      marker([station.position.lat, station.position.lgn], {icon: driverIcon})
      .bindPopup(`<b>${station.title}</b>`, { autoClose: false })
      .addTo(map).openPopup();
    });

  }

}
