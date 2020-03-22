# Frontend

This project contains the frontend of `LIEFEREMMA`. The frontend is divided into two parts. 

## Customer 

The customer frontend is built for the customer, who wants to get products shipped to his neighborhood. He starts by selecting a drop off point, where he can order products from his local shop. After purchasing the products via `PayPal`, the user can simply wait for a push notification he receives from the system, once the local shop has arrived on the drop off point. During the purchase process, the customer received a unique order ID, which he has to show the local shop in order to verify himself.

### Customer Journey

The following chart shows the customer journey of the customer role.

![Customer Journey](./res/customer_journey.png "Customer Journey")

## Driver

The driver registers by entering his shop code into the client. After entering, he receives an overview of the available routes. Once he selects a route, the driver can commission his products into his delivery vehicle. After he finished, he gets the geolocation of the first drop off point. He can simply navigate to it using `Google Maps` or `Apple Maps`. 

### Driver Journey

The following chart shows the customer journey of the driver role.

![Driver Journey](./res/driver_journey.png "Driver Journey")
