import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClientModule } from '@angular/common/http'
//import { } from '@improbable-eng/grpc-web';
import { MobileShop, CustomerInterestRequest, Position, OrderRequest, DeliveryPoint, Currency, OrderReply } from '../proto/lieferemma_api_pb';
import { EndCustomer, EndCustomerClient } from '../proto/lieferemma_api_pb_service';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  baseUrl = "https://lieferemma.de/api/"
  root = {}

  constructor() { 


  }

  // getDeliveryPoints(latidude: Double, longitude: Double): Observable<any> {
  //   return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
  //     map(results => results['Search'])
  //   );
  // }


  public getDeliveryPoints(latitude,longitude) {

    var endcustomerclient = new EndCustomerClient("http://localhost:8080");

    var request = new CustomerInterestRequest();
    var pos = new Position();

    pos.setLatitude(latitude);
    pos.setLongitude(longitude);
    request.setRadiusInMeter(2000);
    request.setPositionOfInterest(pos);

    var promise = new Promise((resolve, reject) => {
      var stream = endcustomerclient.registerCustomerInterest(request, null);
      var mobile_shops = [];
      stream.on('data', function(response) {
        mobile_shops.push(response);
      });
      stream.on('status', function(status) {
        console.log(status.code);
        console.log(status.details);
        console.log(status.metadata);
      });
      stream.on('end', function(end) {
        resolve(mobile_shops);
        console.log("Finished getting drop off points");
      });
    });
    return promise;
  }
}
