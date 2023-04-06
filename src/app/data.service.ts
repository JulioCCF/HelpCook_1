import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Receta } from "./receta.model";

@Injectable()
export class DataService{

   

    constructor(private http: HttpClient){}

    obtenerTodos():Observable<Receta[]>{
        return this.http.get<Receta[]>('/api/recetas');
       
    }
}