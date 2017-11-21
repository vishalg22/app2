import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddnoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnotice',
  templateUrl: 'addnotice.html',
})
export class AddnoticePage {
	
  title:string;	
  class_name:any;	
  division:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.title = "Add Notice";
  this.class_name = 1;
  this.division = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnoticePage');
  }

}
