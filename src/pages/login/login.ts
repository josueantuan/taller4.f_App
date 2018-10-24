import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl : MenuController) {
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    console.log(this.username,this.password);
    this.navCtrl.push(HomePage);
  
  }
}
