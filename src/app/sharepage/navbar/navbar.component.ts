import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/Receta.model';
import { Router } from '@angular/router';
import { Ingredientes } from 'src/app/Ingredientes.model';
import { NavbarService } from 'src/app/sharepage/navbar/navbar-service.service';
import { Usuarios } from 'src/app/Usuarios.model';

/**
 * Componente que representa la barra de navegación de la aplicación.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  /**
   * Variable para almacenar las categorias de los ingredientes
   */
  categoria: boolean;

  /**
  * Array de Recetas para almacenar las recetas que llegan del Backend
  */
  recetas:Receta[] = [];

  /**
  * Array de Ingredientes para almacenar los ingredientes que llegan del Backend
  */
  ingredientes:Ingredientes[] = [];

  /**
   * Almacena el tipo de ingrediente actual para que este el menu ordenado
   */
  tipoActual: string = '';

  /**
 * Objeto usuario para recibirlo en la página si proviene de haberse registrado
 */
  usuario: Usuarios[] = [];


  numIngredientesMostrar:number = 9;




   /**
    * Injectamos los servicios necesarios para el funcionamiento de la página
    * @param NavbarService Servicio del componente para la obtención de los ingredientes
    * @param router Para el envio del Usuario a otras páginas
    */
    constructor(private NavbarService: NavbarService, private router: Router) {

    }

    /**
   * Metodo que se carga al iniciar la página
   * 
   * LLamamos al metodo obtener ingredientes para obtener los ingredientes que 
   * estaran en el menu del navbar y que el usuario pueda filtrar recetas en base a los ingredientes que elija
   * 
   */
    ngOnInit(): void {
        this.NavbarService.obtenerIngredientes(null).subscribe(ingredientes=>
          {this.ingredientes = ingredientes;});
          
    }



    /**
     * Función para verificar si el tipo actual ha cambiado
     * @param tipo 
     * @returns 
     */
    tipoCambiado(tipo: string): boolean {
      return tipo !== this.tipoActual;
    }

    /**
     * Método para establecer el tipo actual
     * @param tipo 
     */
    setTipoActual(tipo: string) {
      this.tipoActual = tipo;
    }


    mostrarMas(tipo: string) {
      
    }

    /**
     * Metodo para pasar el array de idIngrediente
     */
    obtenerRecetasIngredientes(){
      const nuevosIngredientes: Ingredientes[] = [];

      for (let i = 0; i < this.ingredientes.length; i++) {
        if (this.ingredientes[i].seleccionado) {
          const idIngrediente = this.ingredientes[i].idIngredientes;
          console.log(this.ingredientes[i]);
          const nuevoIngrediente = new Ingredientes(idIngrediente, '', '', '', [], false);
          nuevosIngredientes.push(nuevoIngrediente);
        }
      }
      
      this.router.navigate(['/mostrarRecetasIngredientes'], { state: { usuario:this.usuario, idIngredientes: nuevosIngredientes } });
    }

}
