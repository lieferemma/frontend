import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteOverviewPage } from './route-overview.page';

const routes: Routes = [
  {
    path: '',
    component: RouteOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteOverviewPageRoutingModule {}
