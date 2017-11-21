import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StudentsPage } from '../pages/students/students';
import { ContactusPage } from '../pages/contactus/contactus';
import {AddnoticePage} from '../pages/addnotice/addnotice';
import {AddstudentPage} from '../pages/addstudent/addstudent';
//import {AddteacherPage} from '../pages/addteacher/addteacher';
import {NoticesPage} from '../pages/notices/notices';
import {SchedulePage} from '../pages/schedule/schedule';

import {HomeworklistPage} from '../pages/homeworklist/homeworklist';




//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';

//import {Users} from '../../providers/users';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StudentsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Students', component: StudentsPage },
      { title: 'Add Student', component: AddstudentPage },
      { title: 'Add Notice', component: AddnoticePage },
      { title: 'Notices', component: NoticesPage },
      { title: 'Homework', component: HomeworklistPage },
      { title: 'Calender', component: SchedulePage },
      { title: 'Contact Us', component: ContactusPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
