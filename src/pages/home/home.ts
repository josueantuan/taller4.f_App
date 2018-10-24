import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private menuCtrl : MenuController) {
    
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }
  cerrar(){
    this.navCtrl.popToRoot();
  }
}
