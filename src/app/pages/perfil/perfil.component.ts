import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil-service.service';
import { Usuarios } from 'src/app/Usuarios.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  nombre: string;
  apellido: string;
  nick: string;
  email: string;
  contrasenia: string;
  contraseniaRep: string;
  foto: string;
  recetaGuardada: string;
  recetaSubida: string;

  constructor(private perfilServicio: PerfilService) {
    
  }

  ngOnInit(): void {
    
  }

  obtenerUsuario() {
    let usuario = new Usuarios(this.nick, this.contrasenia, this.nombre, this.apellido, this.email, this.foto);
    let id: number;

    this.perfilServicio.getUser(id).subscribe(response => {
      
    })
  }
}
