import { Ingredientes } from "./Ingredientes.model";
import { Pasos } from "./Pasos.model";


export class Receta{

    public idReceta:number; 
    public idUsuario:number; 
    public descripcion:string;
    public tiempo:number; 
    public foto:string; 
    public titulo:string; 
    public categoria:string;
    public fechaAlta:Date;
    public valoracionMedia:number;
    public comensales:number;
    public ingredientes: Ingredientes[];
    public pasos: Pasos[];  
    constructor() {}
}



