import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform, ToastController } from 'ionic-angular';

import 'rxjs/add/operator/map';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

/*
  Generated class for the CamerahelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CamerahelperProvider {
lastImage:string;
  constructor(public http: Http, public camera:Camera, public toastCtrl: ToastController, public platform: Platform,
    public transfer: Transfer, public file: File, public filepath: FilePath ) {
    console.log('Hello CamerahelperProvider Provider');
  }


createFileName() {
var d = new Date(),
n = d.getTime(),
newFileName =  n + ".jpg";
return newFileName;
}

// Copy the image to a local folder
copyFileToLocalDir(namePath, currentName, newFileName) {

//uncomment at build time
/*
this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
  this.lastImage = newFileName;
}, error => {
  this.presentToast('Error while storing file.');
});
*/
}

presentToast(text) {
let toast = this.toastCtrl.create({
  message: text,
  duration: 3000,
  position: 'top'
});
toast.present();
}

// Always get the accurate path to your apps folder
public pathForImage(img) {
if (img === null) {
  return '';
} else {
//  return cordova.file.dataDirectory + img;
}
}

}
