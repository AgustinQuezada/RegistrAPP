import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  
  validacion: FormGroup;

  user = {
    username: "",
    password: ""
  }
  loginForm: any;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.validacion = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  IrHomePage() {
    // Almacena el objeto user en el localStorage
    localStorage.setItem('userData', JSON.stringify(this.user));

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