import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharmacloudPageRoutingModule } from './sharmacloud-routing.module';

import { SharmacloudPage } from './sharmacloud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharmacloudPageRoutingModule
  ],
  declarations: [SharmacloudPage]
})
export class SharmacloudPageModule {}
