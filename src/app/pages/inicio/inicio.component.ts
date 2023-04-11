import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MiServicio } from 'src/app/miServivio.service';

/**
 * Componente para la página de Inicio
 */
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

/**
 * Variable para alamacenar el filtro de
 * mejor valoradas o más recientes para su posterior ordenación.
 */
  recetasAMostrar: string;

/**
 * Variable para almacenar el filtro de recetas por categoria.
 */
  recetasXCategoria:string;
 
/**
 * Injectamos el servicio para pasar y recibir datos a otro componente
 * @param miServicio. Servicio para conectar componentes
 */
  constructor(private miServicio: MiServicio ){
    
  }

  /**
   * Método para capturar el tipo de recetas a ordenar.
   * 
   * Asignamos a nuestra variable el texto que recibimos del elemento,
   * mandamos al método de nuestro servicio para conectar componentes la variable que acabamos de capturar.
   * @param evento. Recibimos el click sobre la categoria de la receta
   */
  capturarTexto(evento :MouseEvent) {
    this.recetasAMostrar = (evento.target as HTMLElement).textContent;
    this.miServicio.mostrarRecetas(this.recetasAMostrar);
    
    
  }

  /**
   * Método para capturar la categoria de lass recetas a mostar.
   * 
   * Asignamos a nuestra variable el texto del atributo alt del elemento,
   * mandamos al método de nuestro servicio para conectar componentes la variable que acabamos de capturar.
   * @param event. Recibimos el click sobre el elemento a mostrar
   */
  capturarTextoCategorias(event: any) {
    this.recetasXCategoria = event.target.alt;
    this.miServicio.mostrarRecetasCategoria(this.recetasXCategoria);
  }

}
