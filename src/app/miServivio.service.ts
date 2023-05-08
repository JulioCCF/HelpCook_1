import { Injectable } from '@angular/core';

/**
 * Servicio para el envio de datos entre componentes
 */
@Injectable({
  providedIn: 'root',
})
export class MiServicio {
 
  /**
   * Variable para almacenar el valor que recibimos del inicioComponent
   */
  recetasAMostrar: string;

    /**
   * Variable para almacenar el valor que recibimos del inicioComponent
   */
  recetasXCategoria: string;
 
 /**
  * @ignore
  */
  constructor(){
  }
  
  /**
   * Método para capturar la información de la elección del usuario 
   * sobre las recetas que quiere obtener, mejor valoradas o más recientes
   * 
   * @param recetasAMostrar. Variable con la elección de la ordenación
   */
  mostrarRecetas(recetasAMostrar: string) {
    this.recetasAMostrar = recetasAMostrar;
    
  }

  /**
   * Método para capturar la información de la elección del usuario 
   * sobre las recetas que quiere obtener según su categoria
   * 
   * @param recetasXCategoria. Variable con la elección de la categoria
   */
  mostrarRecetasCategoria(recetasXCategoria: string) {
    this.recetasXCategoria = recetasXCategoria;
  
  }
 
 
}
