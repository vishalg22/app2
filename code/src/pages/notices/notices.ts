import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AddnoticePage} from '../addnotice/addnotice';
import {NoticePage} from '../notice/notice';
import {NoticesProvider} from '../../providers/notices/notices';


/**
 * Generated class for the NoticesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notices',
  templateUrl: 'notices.html',
  providers: [NoticesProvider]

})
export class NoticesPage {

  title:string;
  items:any;
  notices:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public noticesService: NoticesProvider)
  {
	this.title = "Notice";
	this.loadNotices();
  }

  addNotice()
  {
	this.navCtrl.push(AddnoticePage);
  }

  //get notices data
  loadNotices(){
   //console.log("vis");

  this.noticesService.load()
  .then(data => {

	//Typescript to calculate object length
	//Object.keys(ndata).length

	if(Object.keys(data).length > 0)
	{

    this.items = data;
    this.notices = this.items.data;

    //this.loading.dismiss();

    console.log(this.items.data);

    }
    else
    {
		this.items = [];
    }

	});

	}

  showNotice(nid)
  {
	console.log(nid);
	this.navCtrl.push(NoticePage,{notice_id:nid});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticesPage');
  }

}
