import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredientes } from '../../Ingredientes.model';
import { Receta } from 'src/app/receta.model';


/**
 * Servicio que proporciona acceso a la API REST utilizando el HttpClient de Angular
 * 
 * Utilizado para las consultas de recetas.
 */
@Injectable()
export class recetasService {
  /**
   * Constructor del servicio que inyecta el HttpClient de Angular.
   * @param http. Cliente HTTP utilizado para realizar solicitudes a una API REST.
   */
  constructor(private http: HttpClient) {}

  /**
   * Método para la conexión con el método del backend para obtener Recetas
   * 
   * Según el párametro que recibamos modificamos la consulta que se hace al back asignando su correspondiente declaración 
   * 
   * @param {string} recetasAMostrar. Recibimos el valor para el filtro de mostrar recetas por categoría.
   * @param {number} idIngredientes. Recibimos el array con los Id de los ingredientes de la receta para el filtro por ingredientes. 
   * @param {number} idUsuario. Recibimos el id del Usuario para el filtro de las recetas subidas por el usuario.
   * @param {string} ordenacion. Recibimos el valor del párametro para el filtro de recetas según su ordenación.
   * @returns {Receta}  Devolvemos un array de las recetas obtenidas según lo requerido.
   */
  obtenerTodos(
    recetasAMostrar: string,
    idIngredientes: Ingredientes[],
    idUsuario: number, 
    ordenacion: string
  ): Observable<Receta[]> {
    let param = '';
 
    if (recetasAMostrar != null) {
      param += 'categoria=' + recetasAMostrar;
    }
    if (idIngredientes != null && param != '') {
      param += '&idIngredientes=' + idIngredientes;
    } else if (idIngredientes != null && param == '') {
      param += 'idIngredientes=' + idIngredientes;
    }

    if (idUsuario != null && param != '') {
      param += '&idUsuario=' + idUsuario;
    } else if(idUsuario != null && param == '') {
      param += 'idUsuario=' + idUsuario;
    }
    if (ordenacion != null && param != '') {
      param += '&ordenacion=' + ordenacion;
    } else if(ordenacion != null && param == '') {
      param += 'ordenacion=' + ordenacion;
    }
    
    return this.http.get<Receta[]>('http://localhost:8081/recetas?' + param);
  }


  /**
   * Método para la conexión con el método del backend para obtener Receta por su id,
   * 
   * Realizamos la petición http al método obtener del back pasandole el id de la receta
   * 
   * @param id. Recibimos el id de la receta que queremos mostrar.
   * @returns Devolvemos el objeto receta que recibimos del backend
   */
  obtener(id:number){
    
    return this.http.get<Receta>('http://localhost:8081/recetas/' + id);

  }

}
