import { Usuarios } from "./Usuarios.model";

export class Valoraciones{
    public idValoraciones: number;
    public idReceta: number;
    public valor: number;
    public usuario: Usuarios[];
}