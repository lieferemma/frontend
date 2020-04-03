import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DsgvoPageRoutingModule } from './dsgvo-routing.module';

import { DsgvoPage } from './dsgvo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DsgvoPageRoutingModule
  ],
  declarations: [DsgvoPage]
})
export class DsgvoPageModule {}
