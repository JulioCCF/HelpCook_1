import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from './registro-service.service';
import { Usuarios } from 'src/app/Usuarios.model';
import { HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{

 
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

    console.log(this.email);

    this.registSvc.addNewUser(usuario).subscribe(
      response => console.log("Se ha guardado el usuario: " + response),
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.error('Error de red:', error.error.message);
        } else {
          console.error(`Error en el servidor: ${error.status}: ${error.error}`);
        }
      
      }
    );
  }

}
