import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverDeliveryPage } from './driver-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: DriverDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverDeliveryPageRoutingModule {}
