import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
//import { AlertController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    username: "",
    password: ""
  }

  constructor(private router: Router) {}

    /*async carga() {
      const animation = this.animationController.create()
        .addElement(document.querySelector('.alert-wrapper')!)
        .duration(1000)
        .fromTo('opacity', '0', '1');
  
      const alert = await this.alertController.create({
        header: 'Iniciando sesion',
        message: 'Apreta Listo! para continuar',
        buttons: ['Listo!'],
        animated: true,
        cssClass: 'my-alert',
      });
  
      await alert.present();
      animation.play();
    }
*/
    
async IrHomePage() {
  localStorage.setItem('MyGuard', 'true');
  let navegationExtras: NavigationExtras = {
    state: {
      user: this.user,
    },
  };

  this.router.navigate(['/home'], navegationExtras);
}

  ngOnInit() {
  }
}


