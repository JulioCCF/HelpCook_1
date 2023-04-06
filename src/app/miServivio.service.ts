import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class MiServicio {
 
  recetasAMostrar: string;
  categoria:boolean;
 
  constructor(){
  }
  
  mostrarRecetas(recetasAMostrar: string, categoria:boolean) {
    this.recetasAMostrar = recetasAMostrar;
    this.categoria= categoria;
  }
 
 
}
