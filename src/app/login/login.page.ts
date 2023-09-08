import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController) { }
  Ingresar() {
    this.navCtrl.navigateForward('/home', {
      queryParams: {
        value: this.usuario,
      },
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesion, por favor espera...',
      duration: 1000,
    });

    loading.present();
  }

  ngOnInit() {
  }

}
