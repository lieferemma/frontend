import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessmodalPage } from './successmodal.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessmodalPageRoutingModule {}
