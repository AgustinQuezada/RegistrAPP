import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';

  constructor(private navCtrl: NavController) { }
  Ingresar() {
    this.navCtrl.navigateForward('/home', {
      queryParams: {
        value: this.usuario,
      },
    });
  }

  ngOnInit() {
  }

}
