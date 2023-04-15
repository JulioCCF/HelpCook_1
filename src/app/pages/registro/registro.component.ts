import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from './registro-service.service';
import { Usuarios } from 'src/app/Usuarios.model';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{

  users: Usuarios[];
  nombre: string;
  apellido: string;
  nick: string;
  email: string;
  contrasenia: string;
  contraseniaRep: string;
  foto: string;


  constructor(private registSvc: RegistroService) { }

  ngOnInit(): void {
    
  }

  addUserService(){
    let usuario = new Usuarios(this.nick, this.contrasenia, this.nombre, this.apellido, this.email, this.foto);

    this.users.push(usuario);

    console.log(this.email);

    this.registSvc.addNewUser(this.users);
  }

}
