import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Usuarios.model';
import { RegistroService } from '../registro/registro-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private registSvc: RegistroService, private router: Router) {
    
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
      this.usuario.foto = reader.result as string;
    };
  }
  }
  
  updateUserService(){
    
    let usuario = new Usuarios(this.usuario.nick, this.usuario.contrasenia, this.usuario.nombre, this.usuario.apellido, this.usuario.email, this.usuario.foto);
     
    console.log(usuario);
  
      this.registSvc.updateUser(usuario,this.usuario.idUsuarios).subscribe(
        response => this.mensaje = "Datos actualizados correctamente, " + usuario.nombre,
       
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            this.mensaje = 'Error de red:'+ error.error.message;
          } else {
            this.mensaje = `Error en el servidor: ${error.status}: ${error.error}`;
          }
        }
    );
    alert("Usuario modificado correctamente, " + usuario.nombre);
    this.router.navigate(['/perfil']);
    };

}
