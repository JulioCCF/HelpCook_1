import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from './Receta.model';
import { Ingredientes } from './Ingredientes.model';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

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
}
