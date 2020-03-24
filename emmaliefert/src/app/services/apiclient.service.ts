import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
//import { } from '@improbable-eng/grpc-web';
import { CustomerInterestRequest, Position } from '../proto/lieferemma_api_pb';
import { EndCustomer, EndCustomerClient } from '../proto/lieferemma_api_pb_service';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  baseUrl = "https://lieferemma.de/api/"
  root = {}

  constructor() { 

  }

  public getDeliveryPoints() {

    var endcustomerclient = new EndCustomerClient("");
    var request = new CustomerInterestRequest();

    var pos = new Position();
    pos.setLatitude(9.23);
    pos.setLongitude(58.2);
    request.setRadiusInMeter(2000);
    request.setPositionOfInterest(pos);

  }


}
