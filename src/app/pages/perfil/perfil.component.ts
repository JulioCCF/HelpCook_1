import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Usuarios.model';
import { recetasService } from '../mostrar-recetas/recetasService.service';
import { Receta } from 'src/app/Receta.model';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from '../registro/registro-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  usuario: Usuarios;
  recetas: Receta[];
  recetasFavoritos: Receta[];
  email: string;
  contrasenia: string;
  validado:  boolean;

 

  numRecetasMostradas: number = 4;
 
  

  constructor(private recetasService: recetasService, private route: ActivatedRoute, private registroService: RegistroService,
    private router: Router) {
    
  

  }

  ngOnInit(): void {

    this.usuario = history.state.usuario;
    

    this.recetasService.obtenerTodos(null, null, this.usuario.idUsuarios, null).subscribe(recetas => {
      this.recetas = recetas;
    });
    
    let favoritosIds: number[]= this.usuario.favoritos.map(fav => fav.idRecetas);
   
    this.recetasService.obtenerFavoritos(favoritosIds).subscribe(recetasFavoritos=>{
  
      this.recetasFavoritos = recetasFavoritos;
  
    });
   
  }

  mostrarMasRecetas() {
    this.numRecetasMostradas += 4;
    
  }

  volverInicio(){
    this.router.navigate([''],{state:{usuario:this.usuario}});
  }
  
  mandarUsuario(){
    this.registroService.setCurrentUser(this.usuario);
    this.router.navigate(['/editarPerfil'],{state:{usuario:this.usuario}});
  }


  mandarUsuarioReceta(recetaId: number){
    console.log(recetaId)
    this.router.navigate(['/mostraUnaReceta'],{state:{usuario:this.usuario,recetaId:recetaId }});
  }
}
