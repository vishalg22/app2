import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddhomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addhomework',
  templateUrl: 'addhomework.html',
})
export class AddhomeworkPage {
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
		this.title = "Add Homework";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddhomeworkPage');
  }

}
