import { Component } from '@angular/core';
import {LoadingController, ViewController, NavController, NavParams } from 'ionic-angular';
import {UsersProvider} from '../../providers/users/users';

/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html'
})
export class StudentsPage {

  students : any;
  isModal:boolean = false;
  title:string = "Students";
  image_thumb:string;
  loading:any;
  

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams,public usersService: UsersProvider
  ,public viewCtrl: ViewController ) {

  this.image_thumb = "http://pmcelectioninfo.weppsol.com/images/stories/thumbs/ward_1.png";

  this.loading = this.loadingCtrl.create({

   });
  this.loading.present();


	/*if(navParams.get('page_obj').title)
	{
		this.title = navParams.get('page_obj').title;
		console.log(this.title);
     }*/

   //console.log('class -', navParams.get('class'));
   if(navParams.get('class'))
   {
		this.isModal = true;
		this.title = "Class "+ navParams.get('class') + " Students";
   }

   // using load method
   /*this.students = this.usersService.load(navParams.get('class')).then(data =>{

		this.students = data;
		this.loading.dismiss();

	});*/
  let sid = 0;
  // get student data from json facilities
  this.usersService.getStudents(sid).then(sdata=>
  {
      this.students = sdata;

      console.log(sdata);
      this.loading.dismiss();
  });
  }

  dismiss() {

	let data = {'data':'vishal'};
    this.viewCtrl.dismiss(data);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }

}
