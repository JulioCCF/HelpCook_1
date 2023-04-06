import { Timestamp } from "rxjs";



export class Receta{
constructor(public idReceta:number, public idUsuario:number, public descripcion:string,
    public tiempo:number, public foto:string, public titulo:string, public categoria:string,
    public fechaAlta:Date,public valoracionMedia:number,public comensales:number){}
}