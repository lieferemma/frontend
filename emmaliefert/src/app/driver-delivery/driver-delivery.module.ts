import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverDeliveryPageRoutingModule } from './driver-delivery-routing.module';

import { DriverDeliveryPage } from './driver-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverDeliveryPageRoutingModule
  ],
  declarations: [DriverDeliveryPage]
})
export class DriverDeliveryPageModule {}
