import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Usuarios.model';
import { RegistroService } from '../registro/registro-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string;
  contrasenia: string;
  usuario:Usuarios;
  validado:  boolean;

  constructor(private router: Router, private registroService: RegistroService) {
    this.validado = false;
  }
  ngOnInit(): void {
   
  }
    
  login() {
    console.log("Email",this.email,"Contraseña",this.contrasenia);
    this.registroService.login(this.email,this.contrasenia).subscribe((usuario) => {
      this.usuario = usuario;
      this.validado = false;
      this.router.navigate(['/perfil'],{state:{usuario:usuario}}); // Redireccionar a la página de perfil
    }, (error) => {
      console.log(error);
      this.validado = true;
    });
  }

}
