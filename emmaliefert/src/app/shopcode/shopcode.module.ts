import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopcodePageRoutingModule } from './shopcode-routing.module';

import { ShopcodePage } from './shopcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopcodePageRoutingModule
  ],
  declarations: [ShopcodePage]
})
export class ShopcodePageModule {}
