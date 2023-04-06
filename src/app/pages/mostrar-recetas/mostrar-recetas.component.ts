import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MiServicio } from 'src/app/miServivio.service';
import { Receta } from 'src/app/receta.model';

@Component({
  selector: 'app-mostrar-recetas',
  templateUrl: './mostrar-recetas.component.html',
  styleUrls: ['./mostrar-recetas.component.css'],
})
export class MostrarRecetasComponent implements OnInit {
  recetasAMostrar: string;
  categoria:boolean;

  recetas:Receta[];

  constructor(private miServicio: MiServicio,
    private dataService:DataService) {     
        this.recetasAMostrar = this.miServicio.recetasAMostrar;
        this.categoria= this.miServicio.categoria;   
  }

  ngOnInit(): void {
   this.dataService.obtenerTodos().subscribe(recetas=>this.recetas = recetas);
    }
  }
 
