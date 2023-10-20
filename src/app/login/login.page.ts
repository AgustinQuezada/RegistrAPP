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

  constructor(private router: Router) {}

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


