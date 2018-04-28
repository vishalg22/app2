import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

import {UsersProvider} from '../../providers/users/users';
import {CommanProvider} from '../../providers/comman/comman';

import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //logincrd = {username:"",password:""};

  type : any;
  loading:any;
  result:any;
  err_msg:string;
  logform:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public navParams: NavParams,
  public storage: Storage, public usersService: UsersProvider, public comman: CommanProvider, public formBuilder: FormBuilder)
  {
    this.logform = formBuilder.group({
      username:new FormControl('', Validators.compose([Validators.required,Validators.maxLength(30),Validators.pattern('[a-zA-Z]*')])),
      password:new FormControl('',Validators.required)
    });

    //  console.log(this.logform);

   this.loading = this.loadingCtrl.create({

   });

   storage.ready().then(() => {
		let user1 = {name:"vishal",password:"abcd",type:"A"};
		let user2 = {name:"basant",password:"abcd",type:"B"};
       // set a key/value
       storage.set('vishal', user1);
       storage.set('basant', user2);

       // Or to get a key/value pair

     });



  }
  // create new account
  createAccount() {
    this.navCtrl.push(RegisterPage);
  }
  //cancel process
  cancel()
  {
    this.navCtrl.push(DashboardPage);
  }
  login(ldt)
  {

    console.log(ldt);

    this.loading.present();

    this.usersService.login_user(ldt.username,ldt.password).then(data => {

        this.loading.dismiss();

        //console.log(data);

        this.result = data;
        if(this.result.code != 200)
        {
            this.result = "Invalid User";
            this.comman.showToast(this.result);
        }
        else{
            this.storage.set('auth_key', this.result.auth);
            this.result = "login success";
            this.comman.showToast(this.result);
            this.navCtrl.push(DashboardPage);

        }

       });

    /*this.storage.get(ldt.username).then((val) => {

         this.type = val.type;
         console.log(this.type);
         this.storage.set("login",val.name);
       });*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
