import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Ingredientes } from 'src/app/Ingredientes.model';
import { MiServicio } from 'src/app/miServivio.service';
import { Receta } from 'src/app/Receta.model';

@Component({
  selector: 'app-mostrar-recetas',
  templateUrl: './mostrar-recetas.component.html',
  styleUrls: ['./mostrar-recetas.component.css'],
})
export class MostrarRecetasComponent implements OnInit {

  recetasXCategoria :string;
  recetasAMostrar: string;
  categoria: boolean;
  
 
  recetas:Receta[] = [];

  constructor(private miServicio: MiServicio,
    private dataService:DataService) {   

        this.recetasAMostrar = this.miServicio.recetasAMostrar;
        this.recetasXCategoria = this.miServicio.recetasXCategoria;
      
  }

  ngOnInit(): void {
    if(this.recetasXCategoria!=null){
      this.categoria=false;
   this.dataService.obtenerTodos(this.recetasXCategoria,null,null,null).subscribe(recetas=>
    {this.recetas = recetas;});
   }else{
    this.categoria=true;
    this.dataService.obtenerTodos(null,null,null,this.recetasAMostrar).subscribe(recetas=>
      {this.recetas = recetas;});
   }
    }
  }
 
