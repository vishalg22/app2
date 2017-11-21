import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html',
})
export class HomeworkPage {
  
  title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.title = "homework";
  //this.title = navParams.get('page_obj').title;
  console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworkPage');
  }

}
