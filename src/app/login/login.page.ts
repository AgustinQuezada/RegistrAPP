import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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
  loginForm: any;

  constructor(private router: Router) {}

  async IrHomePage() {
    localStorage.setItem('MiGuard', 'true');

    let navegationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }

    this.router.navigate(['/home'], navegationExtras);
  } 

  login() {
    if (this.loginForm.form.valid) {
      // Manejar la lógica de inicio de sesión
    }
  }
  ngOnInit() {
  }
}

