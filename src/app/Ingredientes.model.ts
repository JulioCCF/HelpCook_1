import { Receta } from "./Receta.model";


/**
 * Clase que representa los ingredientes de las recetas.
 */
export class Ingredientes{

    /**
     * Identificador único del ingrediente.
     */
    public idIngrediente : number;

    /**
     * Nombre del ingrediente.
     */
    public nombre: string;

    /**
     * Tipo de ingrediente
     */
    public tipo: string;

    /**
     * Recetas en las que se utiliza este ingrediente.
     */
    public recetas: Receta[];


    /**
     * Crea una instancia de la clase Ingredientes.
     * @param idIngrediente Identificador único del ingrediente.
     * @param nombre Nombre del ingrediente.
     * @param tipo Tipo de ingrediente (opcional).
     * @param recetas Recetas en las que se utiliza este ingrediente.
     */
    constructor(idIngrediente: number, nombre: string, tipo: string, recetas: Receta[]) {
        this.idIngrediente = idIngrediente;
        this.nombre = nombre;
        this.tipo = tipo;
        this.recetas = recetas;
}
}