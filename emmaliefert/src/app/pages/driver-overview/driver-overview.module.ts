import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverOverviewPageRoutingModule } from './driver-overview-routing.module';

import { DriverOverviewPage } from './driver-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverOverviewPageRoutingModule
  ],
  declarations: [DriverOverviewPage]
})
export class DriverOverviewPageModule {}
