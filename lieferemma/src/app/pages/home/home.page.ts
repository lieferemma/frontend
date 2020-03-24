import { Component } from '@angular/core';
import { NavController, Platform, IonSlides } from "@ionic/angular";
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiclientService } from '../../services/apiclient.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MobileShop } from 'src/app/proto/lieferemma_api_pb';

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
    public storage: Storage,
    private geolocation: Geolocation) {

    }

    api = new ApiclientService();

    ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.geolocation.getCurrentPosition().then((data) => {
        console.log(data.coords.latitude);
        console.log(data.coords.longitude);
        this.api.getDeliveryPoints(data.coords.latitude,data.coords.longitude).then(
          (pickup_shops: MobileShop[]) => this.initMap(data.coords.latitude,data.coords.longitude,pickup_shops)
        );
       }).catch((error) => {
         alert("Error getting location: " +error.message);
       });
    });
  }

  initMap(latitude,longitude,stations: MobileShop[]) {

    console.log(stations);
  
    const map = new Map('map').setView([latitude,longitude], 15);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = icon({
      iconUrl: 'assets/images/store.png',
      iconSize: [64, 64], 
      popupAnchor: [0, -20]
    });

    stations.forEach((station) => {
      marker([station.getCurrentPosition().getLatitude(), station.getCurrentPosition().getLongitude()], {icon: customMarkerIcon})
      .bindPopup(`<b>${station.getTitle()}</b>`, { autoClose: false })

      .on('click', () => this.showStation(station))
      .addTo(map);
    });
  }

  showStation(station) {
    let navigationExtras: NavigationExtras = {
      state: {
          station: station
      }
    };
    this.router.navigateByUrl('/order', navigationExtras);
  }
}
