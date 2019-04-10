import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddUserPasswordPage } from '../pages/add-user-password/add-user-password';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { NewPage } from '../pages/new/new';
import { BackButtonService } from "../services/backButton.service";
import { VersionService } from "../services/VersionService";
import { AppService } from './app.service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { AppVersion } from '@ionic-native/app-version';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Printer } from '@ionic-native/printer';
import { IonicStorageModule } from '@ionic/storage';
import { ProductChangePage } from '../pages/product-change/product-change';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage, AddUserPasswordPage, NewPage, ProductChangePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      iconMode: 'ios',
      menuType: 'push',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsHideOnSubPages: 'true',
      backButtonText: '返回',
      backButtonIcon: 'ios-arrow-back',
      platforms: {
        ios: {
          menuType: 'push',
        }
      },
      pageTransition: 'ios-transition'
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage, AddUserPasswordPage, NewPage, ProductChangePage
  ],
  providers: [
    Storage,
    StatusBar,
    SplashScreen, AppService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BackButtonService, FileTransfer, FileTransferObject, AppVersion, File, FileOpener, InAppBrowser, VersionService, Printer
  ]
})

export class AppModule { }
