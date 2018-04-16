import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetailPage } from './hotel-detail';

@NgModule({
  declarations: [
    HotelDetailPage
  ],
  imports: [
    IonicPageModule.forChild(HotelDetailPage)
  ],
  exports: [
    HotelDetailPage
  ]
})

export class HotelDetailPageModule { }
