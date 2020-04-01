import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { OrdersummaryPageRoutingModule } from './ordersummary-routing.module';

import { OrdersummaryPage } from './ordersummary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    OrdersummaryPageRoutingModule
  ],
  declarations: [OrdersummaryPage]
})
export class OrdersummaryPageModule {}
