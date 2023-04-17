import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Usuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string;
  password: string;
  usuario:Usuarios[] = [];

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    
  }

  login() {
    
  }
  
}
