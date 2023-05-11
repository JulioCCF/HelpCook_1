import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favoritos } from 'src/app/Favoritos.model';
import { Ingredientes } from 'src/app/Ingredientes.model';
import { Pasos } from 'src/app/Pasos.model';
import { Receta } from 'src/app/Receta.model';
import { Usuarios } from 'src/app/Usuarios.model';
import { Valoraciones } from 'src/app/Valoraciones.model';
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

  /**
   * Array para almacenar los ingredientes de la receta y poder mostrarlos
   */
  ingredientes: Ingredientes[];

  /**
   * Array para almacenar los pasos de la receta y poder mostrarlos
   */
  pasos: Pasos[];

  /**
   * Variable para almacenar el dato de la valoración que haga el usuario de la receta
   */
  nuevaValoracion: number;

  /**
   * Variable para saber si se ha añadido el favorito
   */
  favoritoAnyadido: boolean;

   /**
   * Variable para saber si se ha añadido la valoración
   */
  valoracionAnyadida: boolean;

  /**
   * Variable para almacenar al usuario si está registrado
   */
  usuario: Usuarios;

  /**
   * Variable para lamacenar la descripcion para el favorito
   */
  descripcionFavorito: string;

  /**
   * Variable para mostar si se ha añadido la valoracion
   */
  mensajeValoracion: string;

  /**
   * Injectamos los servicios necesarios para el funcionamiento de la página
   *
   * @param route Para poder acceder al párametro de la URL
   * @param recetasService Servicio para conectar con el backEnd
   */
  constructor(private router: Router, private recetasService: recetasService) {
    this.usuario = null;
  }

  /**
   * Método que se carga cuando inicia la página
   *
   * Recogemos el id de la receta que se quiere mostrar mediante el route
   *
   * Llamamos al servicio de Recetas para la petición al back y almacenamos en nuestra variable receta la receta obtenida del servicio
   */
  ngOnInit(): void {
    const navigationState = history.state;
    this.usuario = navigationState.usuario;
    this.idRecetas = navigationState.recetaId;
    console.log(this.usuario);
    console.log(this.idRecetas);

    this.recetasService.obtener(this.idRecetas).subscribe((receta) => {
      this.receta = receta;
      this.ingredientes = this.receta.ingredientesResponse;
      this.pasos = this.receta.pasosResponse.sort((a, b) => a.tipo - b.tipo);
      console.log(this.pasos);
    });
  }

  valorarReceta(event) {
    this.nuevaValoracion = event;
    let valoracion = new Valoraciones(
      null,
      this.idRecetas,
      this.nuevaValoracion,
    );

    this.recetasService.anyadirValoracion(valoracion).subscribe(
      (response) => {
        this.valoracionAnyadida = true;
        this.mensajeValoracion = "Gracias! Ya has valorado la receta"
      },   
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          this.valoracionAnyadida = false;
        } else {
          this.valoracionAnyadida = false;
        }
      }
    );
  }

  volverInicio() {
    this.router.navigate([''], { state: { usuario: this.usuario } });
  }

  guardarReceta() {
    let favorito = new Favoritos(
      null,
      this.idRecetas,
      this.descripcionFavorito,
      this.usuario.idUsuarios
    );

    console.log(favorito);

    this.recetasService.agregarFavorito(favorito).subscribe(
      (response) => {
        this.favoritoAnyadido = true;
        this.descripcionFavorito = "Has guardado la receta";
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          this.favoritoAnyadido = false;
        } else {
          this.favoritoAnyadido = false;
        }
      }
    );
  }
}
