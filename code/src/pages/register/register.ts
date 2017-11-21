import { Component } from '@angular/core';

import { IonicPage, ModalController,NavController, NavParams,AlertController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { StudentsPage } from '../students/students';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  standardOpen: boolean;
  standardResult;
  event:{};
  title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alerCtrl: AlertController, public users: UsersProvider) {
   this.title = "Register";
   /*this.event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  };*/



  }

  openModal(data) {

    let modal = this.modalCtrl.create(StudentsPage, {class:data});
    modal.present();

    modal.onDidDismiss(data => {
		console.log('MODAL DATA', data); // returns "undefined"
	});

  }

  //for class popup
  getClass() {
    /*let alert = this.alerCtrl.create();
    alert.setTitle("Select your pupil's class");

    alert.addInput({
      type: 'radio',
      label: 'KG A',
      value: '1A',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'KG B',
      value: '1B'
    });

    alert.addInput({
      type: 'radio',
      label: 'KG C',
      value: '1c'
    });

    alert.addInput({
      type: 'radio',
      label: 'Play group A',
      value: '2A'
    });

    alert.addInput({
      type: 'radio',
      label: 'Play group B',
      value: '2C'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        console.log(alert);
        this.standardOpen = false;
        this.standardResult = data;

        this.openModal(data);
      }
    });

    alert.present().then(() => {
      this.standardOpen = true;
    });
    */
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
