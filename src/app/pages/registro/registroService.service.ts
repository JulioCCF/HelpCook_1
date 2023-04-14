import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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
     * @param {FormGroup} User el valor para el filtro de mostrar recetas por categoría.
     * @returns {Usuario}  Devolvemos un array de las recetas obtenidas según lo requerido.
     */

    addNewUser(User: FormGroup){
        return this.http.post<FormGroup>('http://localhost:8081/recetas?', User.value);
    }

}
