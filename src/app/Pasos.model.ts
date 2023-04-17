import { Receta } from "./Recetacambio.model";



/**
 * Clase que representa los pasos de las recetas.
 */
export class Pasos{

    /**
     * Identificador único del paso.
     */
    public idPasos:number;

    /**
     * Identificador de la receta
     */
    public idRecetas:number;

    /**
     * Tipo de paso
     */
    public tipo: number;

    /**
     * Descripción del paso.
     */
    public descripcion : string;

    /**
     * Foto del paso
     */
    public foto: string;

    /**
     * Recetas a las que pertenece este paso.
     */
    public recetas: Receta[];
    
    /**
     * Crea una instancia de la clase Pasos.
     * @param idPasos Identificador único del paso.
     * @param tipo Tipo de paso.
     * @param descripcion Descripción del paso.
     * @param foto Foto del paso.
     * @param recetas Recetas a las que pertenece este paso.
     */
    constructor(idPasos: number, tipo: number, descripcion: string, foto: string, recetas: Receta[]) {
        this.idPasos = idPasos;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.foto = foto;

}
}