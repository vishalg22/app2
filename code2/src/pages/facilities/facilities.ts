import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html',
})
export class FacilitiesPage {

  title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.title = navParams.get('page_obj').title;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilitiesPage');
  }

}
