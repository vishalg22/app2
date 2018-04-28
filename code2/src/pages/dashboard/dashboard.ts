import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//import {HomeworkPage} from '../homework/homework';
import {HomeworklistPage} from '../homeworklist/homeworklist';
import {FacilitiesPage} from '../facilities/facilities';
import {TeachersPage} from '../teachers/teachers';
import {MediaPage} from '../media/media';
import {SchedulePage} from '../schedule/schedule';
import {StudentsPage} from '../students/students';

import {CommanProvider} from '../../providers/comman/comman';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  //image_thumb:string;
 data: any;

 homework : any;
 media : any;
 schedule : any;
 teachers : any;
 facilities : any;
 events : any;
 students : any;
 loading:any;

 constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public nav:Nav, public common:CommanProvider) {

  //this.image_thumb = "http://pmcelectioninfo.weppsol.com/images/stories/thumbs/ward_1.png";
  this.homework = {title:"Homework",component:HomeworklistPage};
  this.media = {title:"Media",component:MediaPage};
  this.schedule = {title:"Schedule",component:SchedulePage};
  this.teachers = {title:"Teachers",component:TeachersPage};
  this.facilities = {title:"Facilities",component:FacilitiesPage};
  this.students = {title:"Students",component:StudentsPage};

  this.loading = this.loadingCtrl.create({

   });
  this.loading.present();

  //common.getDashboard().then(data=>this.ddata = data);
  this.common.getDashboard().then(dash=>{

    if(Object.keys(dash).length > 0)
  	{
      this.data = dash;
      //this.loading.dismiss();
      this.homework.image = this.data.homework[0].image;
      this.media.image = this.data.media[0].image;
      this.schedule.image = this.data.schedule[0].image;
      this.teachers.image = this.data.teachers[0].image;
      this.facilities.image = this.data.facilities[0].image;
      this.students.image = this.data.students[0].image;
      //this.events.image = this.data.events[0].image;

      this.loading.dismiss();
      console.log(this.homework);

      }
      else
      {
  		this.data = [];
    }

  });

 // console.log(this.data);

  }

  openPage(page)
  {
  this.navCtrl.push(page.component,{page_obj:page});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
