//Angular
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
//Ionic native
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Sandox',
      url: 'sandbox',
      icon: 'folder'
    },
    {
      title: 'Fruit list',
      url: 'fruit-list',
      icon: 'folder'
    },
  ];

  /***
   * Constructor component
   * 
   * @param platform
   * @param splashScreen
   * @param statusBar
   */

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  async initializeApp() {
      await this.platform.ready();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
  }

  /**
   * 
   * Component initialization state
   */
  ngOnInit() {
    const path = window.location.pathname.split('page/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
