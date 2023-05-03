import { Component, OnInit } from '@angular/core';
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
  recetasFavoritos: Receta[];
 
  

  constructor( private recetasService: recetasService, private route:ActivatedRoute) {
    
   

  }

  ngOnInit(): void {

    this.usuario = history.state.usuario;
  

    let id: number;
    this.recetasService.obtenerTodos(null, null, id, null).subscribe(recetas => {
      this.recetas = recetas;
    });
    
    let favoritosIds: number[]= this.usuario.favoritos.map(fav => fav.idRecetas);
   
    this.recetasService.obtenerFavoritos(favoritosIds).subscribe(recetasFavoritos=>{
  
      this.recetasFavoritos = recetasFavoritos;
  
    });
  }

}
