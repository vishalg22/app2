import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

 data:any;
  sdata:any;
  pdata:any;

  constructor(public http: Http) {

    //console.log('Hello Users Provider');
  }

  load(cls) {
		 /*
      // console.log(cls);
		  var url = "http://preschool.weppsol.com/index.php?option=com_api&app=users&resource=users&format=raw&key=7f6aed7c1d3100c324fe175119609371";
		  // don't have the data yet
		  return new Promise(resolve => {
			// We're using Angular HTTP provider to request the data,
			// then on the response, it'll map the JSON data to a parsed JS object.
			// Next, we process the data and resolve the promise with the new data.
			this.http.get(url)
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data;
				resolve(this.data);
			  });
		  });*/
	}

  // get student data
  getStudents(sid)
  {
    let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return new Promise(resolve => {

				this.http.get("http://preschool.weppsol.com/media/json_data/users.json",{"headers":headers})
					.map(res => res.json())
					.subscribe(data => {
					// and save the data for later reference
					this.sdata = data.data.students;
					resolve(this.sdata);
					});
				});
  }

  // get teachers data
  getTeachers(cls)
  {
    let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return new Promise(resolve => {
				this.http.get("http://preschool.weppsol.com/media/json_data/users.json",{"headers":headers})
					.map(res => res.json())
					.subscribe(data => {
					// and save the data for later reference
					this.sdata = data.data.teachers;
					resolve(this.sdata);
					});
				});
  }
  // get parent data
  getParents(pid)
  {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

				this.http.get("http://preschool.weppsol.com/media/json_data/users.json",{"headers":headers})
					.map(res => res.json())
					.subscribe(data => {
					// and save the data for later reference
					this.pdata = data.data.teachers;
					resolve(this.pdata);
					});
				});
  }

   login_user(uname, pass) {

			let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
			let options = new RequestOptions({ headers: headers });
			let body = JSON.stringify({username:uname,password:pass});

      let url = "http://preschool.weppsol.com/index.php?option=com_api&app=users&format=raw&resource=login&key=7f6aed7c1d3100c324fe175119609371";
		  // don't have the data yet
		  return new Promise(resolve => {

			this.http.post(url,body, options)
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data.data;
				resolve(this.data);
			  });

		  });
	}


	users_data(wid) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });

		  if (this.data) {
			// already loaded data
			return Promise.resolve(this.data);
		  }

		  // don't have the data yet
		  return new Promise(resolve => {
			// We're using Angular HTTP provider to request the data,
			// then on the response, it'll map the JSON data to a parsed JS object.
			// Next, we process the data and resolve the promise with the new data.
			this.http.get('http://pmcelectioninfo.weppsol.com/index.php?option=com_api&format=raw&app=pei&resource=pei&key=&wid='+wid,{"headers":headers})
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data;
				resolve(this.data);
			  });
		  });
	}

	user_profile(cnd) {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      let options = new RequestOptions({ headers: headers });

      if (this.data) {
			// already loaded data
			return Promise.resolve(this.data);
		  }

		  // don't have the data yet
		  return new Promise(resolve => {
			// We're using Angular HTTP provider to request the data,
			// then on the response, it'll map the JSON data to a parsed JS object.
			// Next, we process the data and resolve the promise with the new data.
			this.http.get('http://pmcelectioninfo.weppsol.com/index.php?option=com_api&format=raw&app=pei&resource=pei&key=&id='+cnd,{"headers":headers})
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data;
				resolve(this.data);
			  });
		  });
	}
}
