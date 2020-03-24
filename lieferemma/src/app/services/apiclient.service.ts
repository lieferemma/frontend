import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
//import { } from '@improbable-eng/grpc-web';
import { MobileShop, CustomerInterestRequest, Position, OrderRequest, DeliveryPoint, Currency } from '../proto/lieferemma_api_pb';
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

    /* just playing around with grpc at the moment */
    var endcustomerclient = new EndCustomerClient("http://localhost:8080");

    var request = new CustomerInterestRequest();
    var order_request = new OrderRequest();
    var pos = new Position();

    pos.setLatitude(9.23);
    pos.setLongitude(58.2);
    request.setRadiusInMeter(2000);
    request.setPositionOfInterest(pos);

    var del_point = new DeliveryPoint();
    del_point.setDeliveryPointUuid("");
    del_point.setDepartureTime();
    del_point.setPosition(pos);
    del_point.setScheduledTime();

    order_request.setShopUuid("123456");
    order_request.setPickUpPoint(del_point);
    order_request.setCurrency(Currency.DEFAULT);

  
     endcustomerclient.placeOrder(order_request, function(err, response) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(response.getOrderId());
      }
    });


    /*
    var call = endcustomerclient.registerCustomerInterest();
    call.on('data', function(MobileShop) {
      console.log(`${MobileShop} ==> ${MobileShop}`);
      });
      */


  }


}
