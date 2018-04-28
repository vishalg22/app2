import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddteacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addteacher',
  templateUrl: 'addteacher.html',
})
export class AddteacherPage {

  title:string;
  emp_no:number;
  myDate:any;
  class_name:any;	
  division:any;
  bgrp:any;
  guardian:string;
  taddress:string;
  bgrp_arr : Array<{id: any,bgrp: string}>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.emp_no = 4;
  this.title = "Add Teacher Profile";
  this.guardian = 'mother';
  this.myDate = new Date();
  this.class_name = 1;
  this.division = 0;
  this.bgrp = 0;
  this.bgrp_arr=[{id:1,bgrp:'A+'},{id:2,bgrp:'A-'},{id:3,bgrp:'B+'},{id:4,bgrp:'B-'},{id:5,bgrp:'AB+'},{id:6,bgrp:'AB-'},{id:7,bgrp:'O+'},{id:8,bgrp:'O-'}];
  console.log(this.bgrp_arr);
  //console.log(this.myDate);
  
  }
  
  //same address processing
  sameAddress(val)
  {
	console.log(val);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddteacherPage');
  }

}
