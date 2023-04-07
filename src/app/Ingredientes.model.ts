
import { Receta } from "./Receta.model";

export class Ingredientes{
    public idIngrediente : number;
    public nombre: string;
    public tipo: string;
    public recetas: Receta[];
    constructor(){

    }
}