import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Receta } from "./Receta.model";

@Injectable()
export class DataService{

   

    constructor(private http: HttpClient){}

    obtenerTodos(recetasAMostrar:string):Observable<Receta[]>{
        return this.http.get<Receta[]>('http://localhost:8081/recetas');
       
    }
}