import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackorderPageRoutingModule } from './trackorder-routing.module';

import { TrackorderPage } from './trackorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackorderPageRoutingModule
  ],
  declarations: [TrackorderPage]

})
export class TrackorderPageModule {}
