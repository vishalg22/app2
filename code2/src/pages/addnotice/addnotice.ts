import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommanProvider } from '../../providers/comman/comman';
import { PipeTransform, Pipe } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


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
  //objectKeys = Object.keys;
  title:string;
  sclass:any;
  class_name=1;
  division:any;
  division_id=1;
  gender:any;
  ckys:any;
  dkys:any;

  notice:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public commanService: CommanProvider,
  private formBuilder: FormBuilder) {

  this.title = "Add Notice";
  this.sclass = 1;
  this.division = 1;

  this.notice = this.formBuilder.group({


  });


/*  this.commanService.getClassData().then(opts=>{
    this.gender = opts;
    //console.log(this.gender);
  });*/

 this.commanService.getClassData().then(clsdt=>{

   this.ckys = Object.keys(clsdt);
   this.sclass = clsdt;
  // console.log(this.sclass[0]);
 });

 this.commanService.getDivisionData().then(divdt=>{
   this.dkys = Object.keys(divdt);
   this.division = divdt;
 });
  }

  createNotice(ndata){
    console.log(ndata);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnoticePage');
  }

}
