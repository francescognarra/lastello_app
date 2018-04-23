import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {HotelService} from "../../providers/hotel-service";
import {HotelDetailPage} from "../hotel-detail/hotel-detail";
import { AgencyServiceProvider } from "../../providers/agency-service/agency-service";

@IonicPage({
  name: 'page-booking-list',
  segment: 'booking-list'
})

@Component({
    selector: 'page-booking-list',
    templateUrl: 'booking-list.html'
})
export class BookingListPage {

    cap: string = '';

    agencies: Array<any> = [];

    constructor(public navCtrl: NavController, public service: AgencyServiceProvider, public navParams: NavParams, public loadingCtrl: LoadingController) {
        this.cap = this.navParams.get('cap');
        this.getAgencies();
        console.log(this.navParams.get('cap'));

    }

    itemTapped(booking) {
        this.navCtrl.push(HotelDetailPage, booking);
    }

    getAgencies() {
      let loader = this.loadingCtrl.create({
        content: "Caricamento agenzie..."
      });
      loader.present();
        this.service.getAgenciesByCap(this.cap)
            .then(data => {
              this.agencies = this.service.result;
              loader.dismiss();
            });

    }

}
