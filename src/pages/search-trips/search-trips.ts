import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
// import {Storage} from '@ionic/storage';

import {SearchLocationPage} from "../search-location/search-location";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

declare var google: any;

@IonicPage({
  name: 'page-search-trips',
  segment: 'search-trips'
})

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTripsPage {

  // Map
  public map: any;
  public geocode_result: any;

  cap: string = '';
  // search condition
  // public search = {
  //   name: "Rio de Janeiro, Brazil",
  //   date: new Date().toISOString()
  // }

  constructor(public nav: NavController, public geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {

  // console.log("ionViewDidLoad");
  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
    // console.log("ionViewDidLoad");

  //   this.nativeGeocoder.reverseGeocode(40.7402641, 14.7812655)
  // .then((result: NativeGeocoderReverseResult) => {
  //   console.log(result[0].postalCode);
  //   this.geocode_result = result[0];
  //   // alert(JSON.stringify(result));
  //   this.cap = this.geocode_result.postalCode;
  // })
  // .catch((error: any) => console.log(error));

  }

  initializeMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);

      new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      this.nativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude)
    .then((result: NativeGeocoderReverseResult) => {
      console.log(result[0].postalCode);
      this.geocode_result = result[0];
      // alert(JSON.stringify(result));
      this.cap = this.geocode_result.postalCode;
    })
    .catch((error: any) => console.log(error));

    }, (err) => {
      console.log(err);
    });
    // console.log("initializeMap START");
    // let latLng = new google.maps.LatLng(40.7402641, 14.7812655);
    //
    // let mapOptions = {
    //   center: latLng,
    //   zoom: 16,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP,
    //   mapTypeControl: false,
    //   zoomControl: false,
    //   streetViewControl: false
    // }
    //
    // this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
    // new google.maps.Marker({
    //   map: this.map,
    //   animation: google.maps.Animation.DROP,
    //   position: this.map.getCenter()
    // });
    //
    // // refresh map
    // setTimeout(() => {
    //   google.maps.event.trigger(this.map, 'resize');
    // }, 300);
    // console.log("initializeMap END");
  }

  // ionViewWillEnter() {
  //   // this.search.pickup = "Rio de Janeiro, Brazil";
  //   // this.search.dropOff = "Same as pickup";
  //   this.storage.get('pickup').then((val) => {
  //     // console.log(val)
  //     if (val === null) {
  //       this.search.name = "Rio de Janeiro, Brazil"
  //     } else {
  //       this.search.name = val;
  //     }
  //     // this.search.pickup = val;
  //     // console.log(this.search.pickup)
  //   }).catch((err) => {
  //     console.log(err)
  //   });
  // }

  // go to result page
  doSearch() {
  // console.log(this.cap);
    this.nav.push('page-booking-list', {
      cap: this.cap
    });
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }
}
