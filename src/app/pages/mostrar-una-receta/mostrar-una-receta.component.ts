import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

	// Variable para almacenar la foto de la receta
	nomeFoto;

	// Variable para almacenar la lista de ingredientes
	ingredientes = [];

	// Variable para almacenar la lista de pasos
	pasos = [];

	// Variable para almacenar lo tiempo de preparacion
	tiempoPreparacion = 0;

	// Variable para almacenar lo tiempo total
	tiempoTotal;

	// Variable para almacenar lo peso de las raciones
	raciones = 0;

	// Variable para almacenar la categoria de la receta
	categoria;

	// Variable para almacenar lo tipo de cocina
	tipoCocina = 'Desconocida';

	// Variable para almacenar lo total de calorias em cada racion
	kcal = 0;

	// Variable para almacenar lo número de comensales para los que está diseñada la receta
	comensales;

	// Variable para almacenar lo valoración media de la receta
	valoracionMedia;

	// Variable para almacenar lo nombre de lo autor
	autor = 'Desconocido';

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
			this.ingredientes = receta.ingredientesResponse;

      this.receta = receta;

			this.tiempoTotal = receta.tiempo;
			this.categoria = receta.categoria;
			this.comensales = receta.comensales;
			this.valoracionMedia = receta.valoracionMedia;
			this.nomeFoto = receta.foto;

			// this.tiempoPreparacion = receta.tiempoPreparacion;
			// this.raciones = receta.raciones;
			// this.tipoCocina = receta.tipoCocina;
			// this.autor = receta.autor;
			
			// Varredura do objeto de passos para recuperar apenas a descrição e então armazenar no Array
			receta.pasosResponse.forEach((paso) => {
				this.pasos.push(paso.descripcion);
			});
		});
      
  }
}
