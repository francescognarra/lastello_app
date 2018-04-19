import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {SearchLocationPage} from "../search-location/search-location";

@IonicPage({
  name: 'page-search-trips',
  segment: 'search-trips'
})

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTripsPage {

  cap: string = '';
  // search condition
  // public search = {
  //   name: "Rio de Janeiro, Brazil",
  //   date: new Date().toISOString()
  // }

  constructor(private storage: Storage, public nav: NavController) {
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
