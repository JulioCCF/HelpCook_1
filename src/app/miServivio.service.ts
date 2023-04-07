import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class MiServicio {
 
  recetasAMostrar: string;
  recetasXCategoria: string;
 
 
  constructor(){
  }
  
  mostrarRecetas(recetasAMostrar: string) {
    this.recetasAMostrar = recetasAMostrar;
    
  }
  mostrarRecetasCategoria(recetasXCategoria: string) {
    this.recetasXCategoria = recetasXCategoria;
  
  }
 
 
}
