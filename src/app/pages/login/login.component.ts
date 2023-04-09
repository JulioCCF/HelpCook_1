import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string;
  password: string;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    
  }

  // Recibirá los datos del formulario mediante NgForm
  login(form: NgForm) {
    // Rescatamos los campos que vienen del formulario
    this.email = form.value.email;
    this.password = form.value.password;
  }
  
}
