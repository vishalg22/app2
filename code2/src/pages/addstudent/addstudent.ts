import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { AddnoticePage } from '../addnotice/addnotice';
import { ContactusPage } from '../contactus/contactus';
import { CommanProvider } from '../../providers/comman/comman';
import { CamerahelperProvider } from '../../providers/camerahelper/camerahelper';

/**
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html'
})
export class AddstudentPage {

  title:string;

  student={
    sname:"",
    myDob:{},
    class_name:"",
    division:"",
    bgrp:"",
    gender_val:"",
    guardian:"",
    paddress:"",
    saddress:"",
    guardian_mother: {mname:"",maddress:"",mcell:"",memail:""},
    guardian_father:{fname:"",faddress:"",fcell:"",femail:""},
    guardian_other: {oname:"",oaddress:"",ocell:"",oemail:"",orelation:""}
  };

 // student={};


  //myDate:any;
  //class_name:any;
  //division:any;
  //bgrp:any;
  guardian:string;
  gender:any;
  //gender_val:string;
  genderOpts:{title:string, subtitle:string}
  // bgrp_arr : Array<{id: any,bgrp: string}>;
  classess:any;
  classOpts:{title:string, subtitle:string}

  divisions:any;
  divOpts:{title:string, subtitle:string}

  bgrp_arr : any;
  bgrpOpts:{title:string, subtitle:string}

  lastImage:string;
  loading:any;

 tab1Root = AddnoticePage;
 tab2Root = ContactusPage;
 tab3Root = AddnoticePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public commanService:CommanProvider,
  public camerahelper:CamerahelperProvider,  public camera:Camera, public transfer: Transfer, public file: File, public filepath: FilePath,
  public actionsheetcntrl: ActionSheetController, public platform: Platform,
  public loadingCtrl : LoadingController, private formBuilder: FormBuilder) {

  this.title = "New student Profile";
  this.guardian = 'mother';
  this.lastImage = "../assets/image/dashboard/children.png";

  /*this.student = this.formBuilder.group({
    sname:new FormControl('', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])),
    myDob:new FormControl({}, Validators.required),
    class_name:new FormControl('', Validators.required),
    division:new FormControl('', Validators.required),
    bgrp:new FormControl('', Validators.required),
    gender_val:new FormControl('', Validators.required),
    paddress:new FormControl('', Validators.required),
    saddress:new FormControl('', Validators.required),
    });

  this.student={
    guardian:"",
    guardian_mother: {mname:"",maddress:"",mcell:"",memail:""},
    guardian_father: {fname:"",faddress:"",fcell:"",femail:""},
    guardian_other: {oname:"",oaddress:"",ocell:"",oemail:"",orelation:""},

  };*/

  this.commanService.getBloodGroupData().then(bgrdt=>{
    this.bgrp_arr = bgrdt;
    this.bgrpOpts = {title:"Bloodgroup", subtitle:"select blood group"};
  // console.log(this.bgrp_arr);
  });

  this.commanService.getGenderData().then(gndt=>{
    this.gender = gndt;
    this.genderOpts = {title:"Gender", subtitle:"select blood group"};
  });

  this.commanService.getClassData().then(clsdt=>{
    this.classess = clsdt;
    this.classOpts = {title:"Classes", subtitle:"select class group"};
    //console.log(this.classess);
  });

  this.commanService.getDivisionData().then(divdt=>{
    this.divisions = divdt;
    this.divOpts = {title:"Division", subtitle:"select division group"};
    //console.log(this.divisions);
  });
  console.log(this.student);

  }

  addStudent(formdata)
  {
console.log(formdata);

  }

  // load camera actionsheet
 presentCameraAction(){

   let actionSheet = this.actionsheetcntrl.create({
     title:"Select Image from ",
     buttons:[
       {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
     ]

   });
   actionSheet.present();
  }

  // take picture
  takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };

  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
  if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
    this.filepath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.camerahelper.copyFileToLocalDir(correctPath, currentName, this.camerahelper.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.camerahelper.copyFileToLocalDir(correctPath, currentName, this.camerahelper.createFileName());
    }
  }, (err) => {
    this.camerahelper.presentToast('Error while selecting image.');

  });
}

// upload Picture need to validate
uploadImage() {
  // Destination URL
  var url = "http://yoururl/upload.php";

  // File for Upload
  var targetPath = this.camerahelper.pathForImage(this.lastImage);

  // File name only
  var filename = this.lastImage;

  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };

  const fileTransfer: TransferObject = this.transfer.create();

  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();

  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll()
    this.camerahelper.presentToast('Image succesful uploaded.');
  }, err => {
    this.loading.dismissAll()
    this.camerahelper.presentToast('Error while uploading file.');
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstudentPage');
  }

}
