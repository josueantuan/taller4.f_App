import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { HomePage } from '../home/home';
import {User} from "../../model/model.user";
import { BaseProvider } from "../../providers/base/base";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  username:string;
  password:string;
  user: User=new User();
  errorMessage:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl : MenuController,
    private authService :BaseProvider) {
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /*login(){
    console.log(this.username,this.password);
    this.navCtrl.push(HomePage);
  
  }*/
  login(){
    this.authService.logIn(this.user)
      .subscribe(data=>{
        this.navCtrl.push(HomePage);
        
        },err=>{
        this.errorMessage="Nombre de usuario o constreña incorrectos";
        }
      )
      
  }
}
