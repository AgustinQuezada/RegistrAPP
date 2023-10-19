import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private router: Router, private formBuilder: FormBuilder) {
    // Mueve la creación del formulario aquí
    this.validacion = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  IrHomePage() {
    let navegationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.router.navigate(['/home'], navegationExtras);
  } 

  ngOnInit() {
  }
}
