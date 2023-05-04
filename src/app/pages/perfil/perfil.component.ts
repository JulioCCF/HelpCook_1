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
 
  

  constructor(private recetasService: recetasService, private route: ActivatedRoute, private registroService: RegistroService,
    private router: Router) {
    
   

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

  login() {
    console.log("Email",this.email,"Contraseña",this.contrasenia);
    this.registroService.login(this.email,this.contrasenia).subscribe((usuario) => {
      this.usuario = usuario;
      this.validado = false;
      this.router.navigate(['/perfil'],{state:{usuario:usuario}}); // Redireccionar a la página de perfil
    }, (error) => {
      console.log(error);
      this.validado = true;
    });
  }

}
