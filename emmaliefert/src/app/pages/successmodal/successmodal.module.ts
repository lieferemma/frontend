import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessmodalPageRoutingModule } from './successmodal-routing.module';

import { SuccessmodalPage } from './successmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessmodalPageRoutingModule
  ],
  declarations: [SuccessmodalPage]
})
export class SuccessmodalPageModule {}
