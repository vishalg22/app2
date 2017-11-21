import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsersProvider} from '../../providers/users/users';
/**
 * Generated class for the TeachersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachers',
  templateUrl: 'teachers.html',
})
export class TeachersPage {

  title:string;
  teachers:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersProvider) {

  this.title = navParams.get('page_obj').title;

  this.usersService.getTeachers(navParams.get('class')).then(data =>{
	console.log(data);
		this.teachers = data;
//		this.loading.dismiss();

	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachersPage');
  }

}
