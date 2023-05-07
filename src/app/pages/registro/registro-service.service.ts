import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/Usuarios.model';


/**
 * Servicio que proporciona acceso a la API REST utilizando el HttpClient de Angular
 * 
 * Utilizado para las consultas de usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class RegistroService{
  /**
       * Constructor del servicio que inyecta el HttpClient de Angular.
       * @param http. Cliente HTTP utilizado para realizar solicitudes a una API REST.
       */
  constructor(private http: HttpClient) {}


  /**
   * Método para la conexión con el método del backend para crear un Usuario,
   * @param users. Recibimos el objeto usuario con los datos rellenados por éste
   * @returns Devolvemos el usuario ya guardado en la BBDD
   */
  addNewUser(users: Usuarios){
      return this.http.post('http://localhost:8081/usuarios', users);
  }

 

  /**
   * Método para la conexión con el backend para obtener al usuario por su email y contrasenia
   * @param email. Recibimos la variable email
   * @param contrasenia. Recibimos la variable contrasenia 
   * @returns 
   */
  login(email: string, contrasenia: string): Observable<Usuarios>{
     
     let params = 'email='+email+'&contrasenia='+contrasenia;
     
    return this.http.get<Usuarios>('http://localhost:8081/usuarios/login?'+ params);
      
  }
    
  
}
