import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil-service.service';
import { Usuarios } from 'src/app/Usuarios.model';
import { recetasService } from '../mostrar-recetas/recetasService.service';
import { Receta } from 'src/app/Receta.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  usuario: Usuarios;
  recetas: Receta[];

  constructor( private recetasService: recetasService, private route:ActivatedRoute) {
    
    let id: number;
    this.recetasService.obtenerTodos(null, null, id, null).subscribe(recetas => {
      this.recetas = recetas;
    })

  }

  ngOnInit(): void {
    this.usuario = history.state.usuario;
  }

  obtenerRecetas() {
    let id: number;
    this.recetasService.obtenerTodos(null, null, this.usuario.idUsuario, null).subscribe(recetas => {
      this.recetas = recetas;
    })
  }


}
