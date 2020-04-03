import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DsgvoPage } from './dsgvo.page';

const routes: Routes = [
  {
    path: '',
    component: DsgvoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsgvoPageRoutingModule {}
