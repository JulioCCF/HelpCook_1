import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService{
  /**
       * Constructor del servicio que inyecta el HttpClient de Angular.
       * @param http. Cliente HTTP utilizado para realizar solicitudes a una API REST.
       */
  constructor(private http: HttpClient) {}

  addNewUser(users: Usuarios[]){
      return this.http.post('http://localhost:8081/usuarios/', users).subscribe(
        response => console.log("Se han guardado los usuarios: " +response),
        error => console.log("Error " +error),
      );
  }
}
