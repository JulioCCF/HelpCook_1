import { Component, OnInit } from '@angular/core';
import { RegistroService } from './registro-service.service';
import { Usuarios } from 'src/app/Usuarios.model';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Componente para la página de registro
 * 
 * Se mostrara el usuario que se ha creado con los valores introducidos en el form
 */
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{
  
  /**
   * Variable para almacenar el nombre real de la persona que se registra
   */
  nombre: string;

  /**
   * Variable para almacenar los apellidos de la persona que se registra
   */
  apellido: string;

  /**
   * Variable para almacenar el nick/username que tendrá en su cuenta de usuario
   */
  nick: string;

  /**
   * Variable para almacenar el email con el que se registra la persona y que estara asignado a su cuenta de usuario
   */
  email: string;

  /**
   * Variable para almacenar la contraseña para acceder a su cuenta de usuario
   */
  contrasenia: string;

  /**
   * Variable para almacenar la contraseña repetida para comprobar que la contraseña que ha introducido es la deseada
   */
  contraseniaRep: string;

  /**
   * Variable para almacenar la foto de perfil del usuario que esta creando
   */
  foto: string;


  mensaje: string;
  


  /**
   * Injectamos los servicios para la conexión con el Backend
   * @param registroService Servicio para conectar con el Backend
   */
  constructor(private registSvc: RegistroService) { }

  ngOnInit(): void {
    
  }

  onFileSelected(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
      this.foto = reader.result as string;
    };
  }
}



  /**
   * Método que se carga cuando el usuario pulsa el botón "Registrarme"
   * 
   * Recogemos los valores que el usuario introduce en el formulario de registro y los asignamos al objeto usuario
   * 
   * Llamamos al servicio de Registro para la conexión con el back y mostramos por la consola
   * "Se ha guardado el usuario: " si el usuario se ha guardado correctamente o 
   * "Error de red o error en el servidor" si el usuario no se ha guardado correctamente dependiendo de donde proceda el error
   */

  addUserService(){
    
    let usuario = new Usuarios(this.nick, this.contrasenia, this.nombre, this.apellido, this.email, this.foto);
      console.log(this.foto);
  
      this.registSvc.addNewUser(usuario).subscribe(
        response => this.mensaje = "Enhorabuena! ya está registrado, bienvenido: " + usuario.nombre,
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            this.mensaje = 'Error de red:'+ error.error.message;
          } else {
            this.mensaje = `Error en el servidor: ${error.status}: ${error.error}`;
          }
        }
      );
    };
}
