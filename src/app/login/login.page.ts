import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
//import { NavController } from '@ionic/angular';
//import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    username: "",
    password: ""
  }

  constructor(private router: Router) { }

  IrHomePage() {
    let navegationExtras: NavigationExtras = {
      state: {
        user: this.usuario
      }
    }
    this.router.navigate(['/home'], navegationExtras)
  }


  ngOnInit() {
  }

}
