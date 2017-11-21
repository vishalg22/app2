import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NoticesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticesProvider {

  data:any;

  constructor(public http: Http) {
    console.log('Hello Notices Provider');
  }

  load(){

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
		  /*if (this.data) {
			// already loaded data
			return Promise.resolve(this.data);
		  }*/

		  /*var url = "http://preschool.weppsol.com/index.php?option=com_api&app=articles&resource=article&format=raw&category_id=8";
		  // don't have the data yet
		  return new Promise(resolve => {

			this.http.get(url)
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data;
				resolve(this.data);
			  });
		  });*/


			return new Promise( resolve => {
			this.http.get("../assets/data/notices.json",{"headers":headers})
			/*this.http.get("https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot")*/
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data;
				//console.log(this.data);
				resolve(this.data);
			  });
			  });

	}

}
