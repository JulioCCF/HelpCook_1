import { Usuarios } from "./Usuarios.model";

export class Favoritos{
    public idFavorito: number;
    public idReceta: number;
    public descripcion: string;
    public usuario: Usuarios[];
}