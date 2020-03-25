import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClientModule } from '@angular/common/http'
//import { } from '@improbable-eng/grpc-web';
import { MobileShop, CustomerInterestRequest, Position, OrderRequest, DeliveryPoint, Currency, OrderReply, AvailableProductRequest } from '../proto/lieferemma_api_pb';
import { EndCustomer, EndCustomerClient } from '../proto/lieferemma_api_pb_service';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  endcustomerclient = new EndCustomerClient("http://localhost:8080")
  constructor() { 
  }

  public placeOrder() {

  }

  public getOrderStatus() {
    
  }

  public getAvailableProducts(uuid: string) {
    var request = new AvailableProductRequest();
    //request.SetDeliveryPointUuid(uuid);
    var promise = new Promise((resolve, reject) => {
      this.endcustomerclient.availableProducts(request, null, function(err, response) {
        if (err) {
          reject(response);
        }  
        else {
          resolve(response);
        }
      });
    });
    return promise;
  }

  public getDeliveryPoints(latitude,longitude): Promise<any> {

    var request = new CustomerInterestRequest();
    var pos = new Position();

    pos.setLatitude(latitude);
    pos.setLongitude(longitude);
    request.setRadiusInMeter(2000);
    request.setPositionOfInterest(pos);

    return new Promise((resolve, reject) => {
      var stream = this.endcustomerclient.registerCustomerInterest(request, null);
      var mobile_shops = [];
      stream.on('data', function(response) {
        mobile_shops.push(response);
      });
      stream.on('status', function(status) {
        if (status.code !== 0) {
          reject(new Error(status.details));
        }
      });
      stream.on('end', function(end) {
        if (end.code !== 0) {
          reject(end.details);
        } else {
          resolve(mobile_shops);
          console.log("Finished getting drop off points");
        }
      });
    });
  }
}
