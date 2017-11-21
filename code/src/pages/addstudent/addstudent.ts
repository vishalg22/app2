import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AddnoticePage} from '../addnotice/addnotice';
import {ContactusPage} from '../contactus/contactus';


/**
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html'
})
export class AddstudentPage {

  title:string;
  myDate:any;
  class_name:any;
  division:any;
  bgrp:any;
  guardian:string;
  bgrp_arr : Array<{id: any,bgrp: string}>;

 tab1Root = AddnoticePage;
 tab2Root = ContactusPage;
 tab3Root = AddnoticePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.title = "New student Profile";
  this.guardian = 'mother';
  this.myDate = new Date();
  this.class_name = 1;
  this.division = 0;
  this.bgrp = 0;
  this.bgrp_arr=[{id:1,bgrp:'A+'},{id:2,bgrp:'A-'},{id:3,bgrp:'B+'},{id:4,bgrp:'B-'},{id:5,bgrp:'AB+'},{id:6,bgrp:'AB-'},{id:7,bgrp:'O+'},{id:8,bgrp:'O-'}];
  console.log(this.bgrp_arr);
  //console.log(this.myDate);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstudentPage');
  }

}
