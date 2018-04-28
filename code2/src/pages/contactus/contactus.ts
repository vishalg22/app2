import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommanProvider} from '../../providers/comman/comman';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactusPage {

  title:string;
  introtext:string;
  cdata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public comman:CommanProvider) {

  this.title = "About Us";

  this.comman.load().then(data =>{

		this.cdata = data['data'].results[0];
		console.log(this.cdata.title);
		//this.loading.dismiss();
		this.title = this.cdata.title;
		this.introtext = this.cdata.introtext;

	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

}
