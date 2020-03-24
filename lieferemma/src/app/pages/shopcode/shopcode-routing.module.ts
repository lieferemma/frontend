import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopcodePage } from './shopcode.page';

const routes: Routes = [
  {
    path: '',
    component: ShopcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopcodePageRoutingModule {}
