import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { IonicPage, ModalController,NavController, NavParams,AlertController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { CommanProvider } from '../../providers/comman/comman';

import { StudentsPage } from '../students/students';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[UsersProvider]
})

export class RegisterPage {

  standardOpen: boolean;
  standardResult: any;
  student_id;
  students:any;
  student_data:any;
  event:{};
  title:string;

  stitle:string;
  simage:string;
  sdob:string;
  sclass:string;
  sdiv:string;

  show_stud:boolean;

  reg : {};


  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alerCtrl: AlertController,
     public usersService: UsersProvider,public commanService: CommanProvider,  private formBuilder: FormBuilder) {
   this.title = "Register";

   //init form object
   /*this.reg = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      stid: ['', Validators.required]

    });*/

    this.reg = this.formBuilder.group({
       fname: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])),
       lname: new FormControl('', Validators.required),
       address: new FormControl('', Validators.required),
       mobile: new FormControl('', Validators.required),
       email: new FormControl('', ([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
       dob: new FormControl('', Validators.required),
       stid: new FormControl('', Validators.required)

     });

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
  // save register details
  register(rdata)
  {
      console.log(rdata);

  }

  // for get student
  getStudent() {

    // get student data from json facilities
    this.usersService.getStudents(0).then(sdata=>{
      let stud = sdata;

      let alert = this.alerCtrl.create();
      alert.setTitle("Select your child");

        for(let i=0;i< Object.keys(stud).length;i++)
        {
          //console.log(stud[i].title);
          alert.addInput({
            type: 'radio',
            label: stud[i].title,
            value: stud[i].id,
            checked: false
          });

        }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'Ok',
        handler: sid => {
          console.log('Radio data:', sid);

          //console.log(alert);
          this.standardOpen = false;
          this.student_id = sid;
          this.usersService.getStudent(sid).then(ssdata=>{

          console.log(ssdata);

          let st_data = ssdata['data'];

          this.stitle = st_data.title;
          this.simage = st_data.image;
          this.sclass = st_data.class;
          this.sdiv = st_data.division;
          this.sdob = st_data.dob;

console.log(this.sdob);

            this.show_stud = true;
          });
          //this.openModal(data);
        }
      });

      alert.present().then(() => {
        this.standardOpen = true;
      });

    });

    }
  //for class popup
  getClass() {
    let alert = this.alerCtrl.create();
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

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
