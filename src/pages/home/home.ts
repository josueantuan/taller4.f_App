import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { GeolocalitationProvider } from "../../providers/geolocalitation/geolocalitation";
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numero:number=0;
  imagen: string;
  constructor(public navCtrl: NavController, private menuCtrl : MenuController,private geoloca:GeolocalitationProvider,
    private camera: Camera) {
    
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    
  }
  ionViewDidLoad(){
    this.geoloca.geolocal();
   }
  cerrar(){
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }
  camara(){
    return this.numero =1;
  }
  abrirCamara(){
    
    if(this.numero==1){
      
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       this.imagen = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
       console.log("No camara")
      });
      this.numero=0;

    }
  }
   
}
