import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredientes } from 'src/app/Ingredientes.model';
import { Pasos } from 'src/app/Pasos.model';
import { Receta } from 'src/app/Receta.model';
import { recetasService } from 'src/app/pages/mostrar-recetas/recetasService.service';
/**
 * Componente para la página de mostrar una receta
 * 
 * Se mostrará la receta que haya seleccionado el usuario
 */
@Component({
  selector: 'app-mostrar-una-receta',
  templateUrl: './mostrar-una-receta.component.html',
  styleUrls: ['./mostrar-una-receta.component.css'],
})
export class MostrarUnaRecetaComponent implements OnInit {

/**
 * Variable para alamacenar la receta que recuperamos de la base de datos
 */
  receta: Receta;


  /**
   * Variable para almacenar el id de la receta seleccionada en las demás páginas
   */
  idRecetas: number;


  ingredientes: Ingredientes[];

  pasos: Pasos[];


  /**
   * Injectamos los servicios necesarios para el funcionamiento de la página
   * 
   * @param route Para poder acceder al párametro de la URL
   * @param recetasService Servicio para conectar con el backEnd
   */
  constructor(
    private route: ActivatedRoute,
    private recetasService: recetasService
  ) {}


  /**
   * Método que se carga cuando inicia la página
   * 
   * Recogemos el id de la receta que se quiere mostrar mediante el route
   * 
   * Llamamos al servicio de Recetas para la petición al back y almacenamos en nuestra variable receta la receta obtenida del servicio
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idRecetas = +params.get('idRecetas');
    });

    this.recetasService.obtener(this.idRecetas).subscribe((receta) => { 
      this.receta = receta;
      
      this.ingredientes= this.receta.ingredientesResponse;
      this.pasos= this.receta.pasosResponse;
     
      });

     
      
      
  }
}
