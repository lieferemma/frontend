import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from "@ionic/angular";
import { Router } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { Http } from '@angular/http';
import { NavigationExtras } from '@angular/router';
import { ApiclientService } from '../../services/apiclient.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MobileShop } from 'src/app/proto/lieferemma_api_pb';
import { ErrorAlertService} from 'src/app/services/error-alert.service'
import { AlertController } from '@ionic/angular';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  error_alert : ErrorAlertService;
  api : ApiclientService;
  loading_spinner: LoadingSpinnerService;

  constructor(public http: Http,
    public plt: Platform,
    public router: Router,
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
      this.error_alert = new ErrorAlertService(alertCtrl);
      this.api = new ApiclientService();
      this.loading_spinner = new LoadingSpinnerService(loadingCtrl);
    }

    async ngAfterViewInit() {
      await this.loading_spinner.presentLoading("Lade Emmastationen");
      this.plt.ready().then(() => {
      this.geolocation.getCurrentPosition().then((data) => {
        this.api.getDeliveryPoints(data.coords.latitude,data.coords.longitude).then(
          (pickup_shops: MobileShop[]) => this.initMap(data.coords.latitude,data.coords.longitude,pickup_shops)
        ).catch(e => {
          this.loading_spinner.dismiss();
          this.error_alert.presentAlert("Fehler","Fehler beim Laden von mobilen Stationen: ").then(
            (alert) => {
              alert.onDidDismiss().then(
                  (data) => {
                      console.log("Reload page")
                      location.reload();
                  }
              )
            }
          )
      });
       }).catch(e => {
        this.loading_spinner.dismiss();
        this.error_alert.presentAlert("Fehler","Deine Position konnte nicht ermittelt werden. Überprüfe die Berechtigungen").then(
          (alert) => {
            alert.onDidDismiss().then(
                (data) => {
                    console.log("Reload page")
                    location.reload();
                }
            )
          }
        )
      });
    }).catch(e => {
      this.loading_spinner.dismiss();
      console.log(e);
  });
  }

  initMap(latitude,longitude,stations: MobileShop[]) {

    console.log(stations);
  
    const map = new L.Map('map').setView([latitude,longitude], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = L.icon({
      iconUrl: 'assets/images/store.png',
      iconSize: [64, 64], 
      popupAnchor: [0, -20]
    });

    const locationMarkerIcon = L.icon({
      iconUrl: 'assets/images/location.png',
      iconSize: [40, 65], 
      popupAnchor: [0, -20]
    });

    var cluster = L.markerClusterGroup();
    L.marker([latitude, longitude], {icon: locationMarkerIcon}).addTo(map);
    
    stations.forEach((station) => {
      var marker = L.marker([station.getCurrentPosition().getLatitude(), station.getCurrentPosition().getLongitude()], {icon: customMarkerIcon})
      .bindPopup(`<b>${station.getTitle()}</b>`, { autoClose: false })
      .on('click', () => this.showStation(station))
      cluster.addLayer(marker);
    });
    map.addLayer(cluster);
    this.loading_spinner.dismiss();
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
