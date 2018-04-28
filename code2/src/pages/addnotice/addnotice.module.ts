import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnoticePage } from './addnotice';

@NgModule({
  declarations: [
    AddnoticePage,
  ],
  imports: [
    IonicPageModule.forChild(AddnoticePage),
  ],
})
export class AddnoticePageModule {}
