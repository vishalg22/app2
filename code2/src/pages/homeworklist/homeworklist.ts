import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomeworkPage} from '../homework/homework';
import {HomeworkProvider} from '../../providers/homework/homework';

/**
 * Generated class for the HomeworklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeworklist',
  templateUrl: 'homeworklist.html',
})
export class HomeworklistPage {
  title:string;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeWork: HomeworkProvider)
  {
	this.title = "Homework List";
  this.items = [];

  this.homeWork.load().then(hwork=>{

    // this.items = hwork;
    console.log(this.items);

  });

  }

  getHomework()
  {
	this.navCtrl.push(HomeworkPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworklistPage');
  }

}
