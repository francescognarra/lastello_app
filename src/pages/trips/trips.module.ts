import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripsPage } from './trips';

@NgModule({
  declarations: [
    TripsPage
  ],
  imports: [
    IonicPageModule.forChild(TripsPage)
  ],
  exports: [
    TripsPage
  ]
})

export class TripsPageModule { }
