import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Usuarios.model';
import { RegistroService } from '../registro/registro-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit{
  
  usuario: Usuarios;
  nombre: string;
  apellido: string;
  nick: string;
  email: string;
  contrasenia: string;
  contraseniaRep: string;
  foto: string;
  mensaje: string;

  constructor(private registSvc: RegistroService) {
    
    this.usuario = this.registSvc.getCurrentUser();
    console.log(this.usuario);
  }


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
  
  updateUserService(){
    
    let usuario = new Usuarios(this.nick, this.contrasenia, this.nombre, this.apellido, this.email, this.foto);
      console.log(this.foto);
  
      this.registSvc.updateUser(usuario).subscribe(
        response => this.mensaje = "Datos actualizados correctamente, " + usuario.nombre,
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
