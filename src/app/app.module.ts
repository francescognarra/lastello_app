import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {HotelService} from "../providers/hotel-service";
import {PlaceService} from "../providers/place-service";
import {ActivityService} from "../providers/activity-service";
import {CarService} from "../providers/car-service";
import {TripService} from "../providers/trip-service";

import {ionBookingApp} from "./app.component";
import { AgencyServiceProvider } from '../providers/agency-service/agency-service';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';


@NgModule({
  declarations: [
    ionBookingApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(
      ionBookingApp,
      {
        preloadModules: true,
        scrollPadding: false,
        scrollAssist: true,
        autoFocusAssist: false
      }
    ),
    IonicStorageModule.forRoot({
      name: '__ionBookingDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ionBookingApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    HotelService,
    PlaceService,
    ActivityService,
    CarService,
    TripService,
    CarService,
    TripService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AgencyServiceProvider,
    Geolocation,
    NativeGeocoder
  ]
})

export class AppModule {
}
