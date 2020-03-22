import { Component } from '@angular/core';
import { NavController, Platform, IonSlides } from "@ionic/angular";
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: Http,
    public plt: Platform,
    public router: Router,
    public navCtrl: NavController,
    public storage: Storage) {

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
          "lat": 48.775845,
          "lgn": 9.182932
        },
        "title": "Bäckerei Maier"
      },
      {
        "position": {
          "lat": 48.768320,
          "lgn": 9.247510
        },
        "title": "Aramark"
      },
      {
        "position": {
          "lat": 48.765020,
          "lgn": 9.251710
        },
        "title": "Restaurant Anam"
      }
    ]
    
    const map = new Map('map').setView([48.775845, 9.182932], 15);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = icon({
      iconUrl: 'assets/images/store.png',
      iconSize: [64, 64], 
      popupAnchor: [0, -20]
    });

    

    stations.forEach((station) => {
      marker([station.position.lat, station.position.lgn], {icon: customMarkerIcon})
      .bindPopup(`<b>${station.title}</b>`, { autoClose: false })

      .on('click', () => this.showStation(station))
      .addTo(map).openPopup();
    });

  }
  showStation(station) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          station: JSON.stringify(station)
      }
    };
    this.storage.ready().then(() => {
      this.storage.set("station", station);
      this.router.navigateByUrl('/order', navigationExtras);

    });
  }


}
