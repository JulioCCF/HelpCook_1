import { Usuarios } from "./Usuarios.model";


/**
 * Clase que representa las valoraciones realizadas por los usuarios sobre las recetas
 */
export class Valoraciones{

    /**
     * Identificador único de la valoración.
     */
    public idValoraciones: number;

    /**
     * Identificador único de la receta valorada.
     */
    public idReceta: number;

    /**
     * Valoración numérica de la receta.
     */
    public valor: number;

    /**
     * Lista de usuarios que han valorado la receta.
     */
    public usuario: Usuarios[];

    /**
     * Crea una instancia de la clase Valoraciones.
     * @param idValoraciones Identificador único de la valoración.
     * @param idReceta Identificador único de la receta valorada.
     * @param valor Valoración numérica de la receta.
     * @param usuario Lista de usuarios que han valorado la receta.
     */
    constructor(idValoraciones: number, idReceta: number, valor: number, usuario: Usuarios[]) {
        this.idValoraciones = idValoraciones;
        this.idReceta = idReceta;
        this.valor = valor;
        this.usuario = usuario;
    }
}