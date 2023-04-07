import { Receta } from "./Receta.model";

export class Pasos{
    public idPasos:number;
    public tipo: number;
    public descripcion : string;
    public foto: string;
    public recetas: Receta[];
    
    constructor(){}


}