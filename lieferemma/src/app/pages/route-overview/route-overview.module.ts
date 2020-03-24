import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteOverviewPageRoutingModule } from './route-overview-routing.module';

import { RouteOverviewPage } from './route-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouteOverviewPageRoutingModule
  ],
  declarations: [RouteOverviewPage]
})
export class RouteOverviewPageModule {}
