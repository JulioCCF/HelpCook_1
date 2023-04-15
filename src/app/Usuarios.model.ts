import { Receta } from "./receta.model";

/**
 * Clase que representa a los usuarios del sistema.
 */
export class Usuarios{

    /**
     * Identificador único del usuario.
     */
    public idUsuario: number;

    /**
     * Nickname del usuario.
     */
    public nick : string;

    /**
     * Contraseña del usuario.
     */
    public contrasenia: string;

    /**
     * Nombre del usuario.
     */
    public nombre : string;

    /**
     * Apellido del usuario.
     */
    public apellido: string;

    /**
     * Dirección de correo electrónico del usuario.
     */
    public email: string;

    /**
     * URL de la foto de perfil del usuario.
     */
    public foto: string;

    /**
     * Lista de recetas creadas por el usuario o añadidas como faritos.
     */
    public receta: Receta[];
 


     /**
     * Crea una instancia de la clase Usuarios.
     * @param idUsuario Identificador único del usuario.
     * @param nick Nickname del usuario.
     * @param contrasenia Contraseña del usuario.
     * @param nombre Nombre del usuario.
     * @param apellido Apellido del usuario.
     * @param email Dirección de correo electrónico del usuario.
     * @param foto URL de la foto de perfil del usuario.
     * @param receta Lista de recetas creadas por el usuario.
     */
     constructor(nick: string, contrasenia: string, nombre: string, apellido: string, email: string, foto: string, receta?: Receta[], idUsuario?: number) {
        this.idUsuario = idUsuario;
        this.nick = nick;
        this.contrasenia = contrasenia;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.foto = foto;
        this.receta = receta;
    }
}