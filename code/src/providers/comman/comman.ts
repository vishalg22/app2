import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';

//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the CommanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommanProvider {

	data:any;
	dash : any;
	dashboard_obs : any;

  constructor(public http: Http, private toastCtrl: ToastController) {
    //console.log('Hello CommanProvider Provider');
  }

	showToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  load(){
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
		let options = new RequestOptions({ headers: headers });

		  /*if (this.data) {
			// already loaded data
			return Promise.resolve(this.data);
		  }*/
		  var url = "http://preschool.weppsol.com/index.php?option=com_api&app=articles&resource=article&format=raw&category_id=8";
		  // don't have the data yet
		  return new Promise(resolve => {

			this.http.get(url,{"headers":headers})
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data;
				resolve(this.data);
			  });
		  });
	}

	//get dashboard data
  getDashboard(){
		// console.log("in get dash call");
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

		return new Promise(resolve => {

				this.http.get("https://www.weppsol.com/json/dashboard.json",{"headers":headers})
					.map(res => res.json())
					.subscribe(data => {
					// and save the data for later reference
					this.dash = data.data;
					resolve(this.dash);
					});
				});

	/*return new Promise(resolve => {
		         this.http.get('../assets/data/dashboard.json').map(response => {
		             this.data = response.json();

								 console.log(this.data);
		             resolve(this.data);
		         });
		     });*/


		}




 	/*
	getDashboard():Observable<any>{



		return this.http.get("../assets/data/dashboard.json")
		.map(res => res.json());
	}
	*/

}
