import { Usuarios } from "./Usuarios.model";

/**
 * Clase que representa los favoritos de los usuarios.
 */
export class Favoritos{

    /**
     * Identificador único del favorito.
     */
    public idFavorito: number;

    /**
     * Identificador único de la receta favorita.
     */
    public idReceta: number;

    /**
     * Descripción del favorito 
     */
    public descripcion: string;


    /**
     * Usuarios que han agregado el favorito.
     */
    public usuario: Usuarios[];


     /**
     * Crea una instancia de la clase Favoritos.
     * @param idFavorito Identificador único del favorito.
     * @param idReceta Identificador único de la receta favorita.
     * @param descripcion Descripción del favorito (opcional).
     * @param usuario Usuarios que han agregado el favorito.
     */
    constructor(idFavorito: number, idReceta: number, descripcion: string, usuario: Usuarios[]) {
        this.idFavorito = idFavorito;
        this.idReceta = idReceta;
        this.descripcion = descripcion;
        this.usuario = usuario;
}
}