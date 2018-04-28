import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  title:string;
  //calendar_obj:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.title = "Calender";
  //this.title = (navParams.get('page_obj').title)?navParams.get('page_obj').title:"calender";
  /*this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);*/

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
