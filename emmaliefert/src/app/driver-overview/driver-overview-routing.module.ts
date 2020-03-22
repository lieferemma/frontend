import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverOverviewPage } from './driver-overview.page';

const routes: Routes = [
  {
    path: '',
    component: DriverOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverOverviewPageRoutingModule {}
