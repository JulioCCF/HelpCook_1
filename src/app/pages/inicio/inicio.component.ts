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
  categoria:boolean;

  constructor(private miServicio: MiServicio ){
    
  }
  capturarTexto(evento :MouseEvent) {
    this.recetasAMostrar = (evento.target as HTMLElement).textContent;
    this.categoria = false;
    this.miServicio.mostrarRecetas(this.recetasAMostrar,this.categoria);
    
    
  }
  capturarTextoCategorias(event: any) {
    this.recetasXCategoria = event.target.alt;
    this.categoria = true;
    this.miServicio.mostrarRecetas(this.recetasXCategoria,this.categoria);
  }

}
