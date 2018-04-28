import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworklistPage } from './homeworklist';

@NgModule({
  declarations: [
    HomeworklistPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworklistPage),
  ],
})
export class HomeworklistPageModule {}
