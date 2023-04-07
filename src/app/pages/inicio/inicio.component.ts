import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MiServicio } from 'src/app/miServivio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  recetasAMostrar: string;
  recetasXCategoria:string;
 

  constructor(private miServicio: MiServicio ){
    
  }
  capturarTexto(evento :MouseEvent) {
    this.recetasAMostrar = (evento.target as HTMLElement).textContent;
    console.log(this.recetasAMostrar);
   
    this.miServicio.mostrarRecetas(this.recetasAMostrar);
    
    
  }
  capturarTextoCategorias(event: any) {
    this.recetasXCategoria = event.target.alt;
    this.miServicio.mostrarRecetasCategoria(this.recetasXCategoria);
  }

}
