import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

// image and file providers
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StudentsPage } from '../pages/students/students';

import {HomeworkPage} from '../pages/homework/homework';
import {FacilitiesPage} from '../pages/facilities/facilities';
import {TeachersPage} from '../pages/teachers/teachers';
import {MediaPage} from '../pages/media/media';
import {SchedulePage} from '../pages/schedule/schedule';
import {ContactusPage} from '../pages/contactus/contactus';
import {NoticesPage} from '../pages/notices/notices';
import {AddnoticePage} from '../pages/addnotice/addnotice';
import {AddstudentPage} from '../pages/addstudent/addstudent';
import {AddteacherPage} from '../pages/addteacher/addteacher';
import {NoticePage} from '../pages/notice/notice';
import {HomeworklistPage} from '../pages/homeworklist/homeworklist';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClassesProvider } from '../providers/classes/classes';
import { CommanProvider } from '../providers/comman/comman';
import { ContactusProvider } from '../providers/contactus/contactus';
import { HelpdeskProvider } from '../providers/helpdesk/helpdesk';
import { HomeworkProvider } from '../providers/homework/homework';
import { MediaProvider } from '../providers/media/media';
import { NoticesProvider } from '../providers/notices/notices';
import { UsersProvider } from '../providers/users/users';
import { CamerahelperProvider } from '../providers/camerahelper/camerahelper';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    StudentsPage,
    HomeworkPage,
    FacilitiesPage,
    TeachersPage,
    SchedulePage,
    MediaPage,
    AddnoticePage,
    AddstudentPage,
    ContactusPage,
    AddteacherPage,
    NoticesPage,
    NoticesPage,
    NoticePage,
    HomeworklistPage,
    HomeworkPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    StudentsPage,
    HomeworkPage,
    FacilitiesPage,
    TeachersPage,
    SchedulePage,
    MediaPage,
    AddnoticePage,
    AddstudentPage,
    ContactusPage,
    AddteacherPage,
    NoticesPage,
    NoticePage,
    HomeworklistPage,
    HomeworkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClassesProvider,
    CommanProvider,
    ContactusProvider,
    HelpdeskProvider,
    HomeworkProvider,
    MediaProvider,
    NoticesProvider,
    UsersProvider,
    File,
    FilePath,
    Camera,
    Transfer,
    CamerahelperProvider

  ]
})
export class AppModule {}
