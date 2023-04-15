import { Component, OnInit } from '@angular/core';
import { RegistroService } from './registro-service.service';
import { Usuarios } from 'src/app/Usuarios.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{

  usuarios: Usuarios[] = [];
  nombre: string;
  apellido: string;
  nick: string;
  email: string;
  contrasenia: string;
  contraseniaRep: string;
  foto: string;

  /**
   * Injectamos los servicios para pasar y recibir datos a otro componente y para la conexión con el Backend
   * @param registroService Servicio para conectar con el Backend
   */
  constructor(private registSvc: RegistroService) { }

  ngOnInit(): void {
    
  }

  addUserService(){
    let usuario = new Usuarios(this.nick, this.contrasenia, this.nombre, this.apellido, this.email, this.foto);

    console.log(usuario);

    this.usuarios.push(usuario);

    this.registSvc.addNewUser(this.usuarios);
  }

}
