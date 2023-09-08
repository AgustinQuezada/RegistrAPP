import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {
  constructor(public navCtrl: NavController, private alertController: AlertController) {}
  irPaginaPrincipal() {
    this.navCtrl.navigateRoot('/login');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Listo!',
      subHeader: 'Mensaje enviado',
      message: 'Hemos enviado un mensaje a tu correo para recuperar tu contraseña.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
