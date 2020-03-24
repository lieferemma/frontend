import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersummaryPage } from './ordersummary.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersummaryPageRoutingModule {}
