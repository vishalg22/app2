import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoticesProvider} from '../../providers/notices/notices';
/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
  providers: [NoticesProvider]

})
export class NoticePage {
  
  notice_id : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public noticesService: NoticesProvider) {
		
		this.notice_id = this.navParams.get('notice_id');
		this.loadNotice();
  }
  
  loadNotice()
  {
 	console.log(this.notice_id);

	 this.noticesService.load()
  .then(data => {
  
  
  
  });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }

}
