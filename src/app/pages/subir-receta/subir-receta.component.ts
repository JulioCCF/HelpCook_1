import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receta } from 'src/app/Receta.model';
import { recetasService } from '../mostrar-recetas/recetasService.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Ingredientes } from 'src/app/Ingredientes.model';
import { Pasos } from 'src/app/Pasos.model';

@Component({
  selector: 'app-subir-receta',
  templateUrl: './subir-receta.component.html',
  styleUrls: ['./subir-receta.component.css']
})
export class SubirRecetaComponent {


  
  /**
   * Variable para almacenar el Usuario que sube la receta
   */
  idUsuario: number;
  
  /**
   * Variable para almacenar la descripcion de la receta
   */
  descripcion: string ;

  /**
   * Variable para alamacenar el tiempo de preparación de la receta
   */
  tiempo : number;

  /**
   * Variable para almacenar la foto de la receta
   */
  foto: string;

   /**
   * Variable para almacenar el titulo de la receta
   */
  titulo: string;

   /**
   * Variable para almacenar la categoría de la receta
   */
  categoria: string;

  /**
   * Variable para capturar la fecha en que se está subiendo la receta
   */
  fechaAlta: Date;

  /**
   * Variable para saber la valoración media de la receta, como está recien subida siempre valdrá 0
   */
  valoracionMedia: number = 0;

   /**
   * Variable para almacenar para cuantos comensales es la receta
   */
  comensales: number;

   /**
   * Variable para almacenar un paso de la receta
   */
  paso: Pasos;

  /**
   * Array para almacenar todos los pasos
   */
  pasos: Pasos[];

  /**
   * Variable para incrementar el número del paso
   */
  numPasos: number = 2;


  /**
   * Variable para almacenar la foto del paso una vez pasada a base 64
   */
  fotoPaso: string;

  
  /**
   * Array para recuperar todos los ingredientes de la base de datos
   */
  ingredientesMostrar: Ingredientes[];


/**
 * Variable para recuperar y poder mostrar los ingredientes por tipo
 */
  ingredientesXTipo: Ingredientes[];


  /**
   * Variable para mostrar si se ha guardado la receta
   */
  mensaje: string;


  /**
   * Array para mostrar los tipos de ingredientes que existen
   */
  tiposUnicos: string[] = [];

  /**
   * Variable para almacenar la selección del tipo de ingrediente
   */
  tipoSeleccionado: string;

  ingrediente: Ingredientes;

  ingredientes: Ingredientes[];

 

 
/**
 * Constructor de la clase donde donde Injectamos los servicios necesarios
 * @param route Routing para poder recibir el id del Usuario que va a subir la receta
 * @param recetasService Servicio necesario para la optención de los datos de las recetas y los ingredientes
 */
  constructor(private route: ActivatedRoute, private recetasService: recetasService) {}
  

/**
 * Método que se carga cuando inicia la página
 * 
 * Recuperamos el id del usuario de la ruta y se lo asignamos a nuestra variable idUsuario
 * 
 * Obtenemos todos los ingredientes de la base de datos mandando la consulta a nuestro servicio,
 * recorremos el array de ingredientes para optener los tipos de éstos y  guardamos los tipos no repetidos en nuestra variable tipos únicos.
 */
  ngOnInit(): void {

   
    this.route.paramMap.subscribe((params) => {
      this.idUsuario = +params.get('idUsuario');
    });

    this.recetasService.obtenerTodosIngredientes(null).subscribe(ingredientesMostrar=>
      {this.ingredientesMostrar = ingredientesMostrar;
       
      const tipos = this.ingredientesMostrar.map(ingrediente => ingrediente.tipo);
      this.tiposUnicos = tipos.filter((tipo, index) => tipos.indexOf(tipo) === index); 
       
      });      
      
  }
  

/**
 * Método para pasar la foto de la receta a Base 64 
 * y poder guardarlas como string 
 */
  onFileSelected(event:any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
      this.foto = reader.result as string;
    };
  }
}

/**
 * Método para pasar la foto de los pasos a Base 64 
 * y poder guardarlas como string 
 */
onFileSelectedPasos(event:any) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
    this.fotoPaso = reader.result as string;
  };
}
}

/**
 * Método para capturar la categoría de la receta
 */
capturarCategorias(event: any) {
  this.categoria = event.target.alt;
}


/**
 * Método para recuperar los ingredientes por el tipo que elija el Usuario
 * recuperamos la seleccion y la mandamos al servicio pasandole el tipo de los ingredientes que queremos recuperar,
 * obteniendo un array de ingredientes del tipo seleccionado
 * @param event Recibimos la selección del usuario
 */
  tipo(event:any){

    const tipoSeleccionado = event.target.value;
    this.tipoSeleccionado = tipoSeleccionado;
    this.recetasService.obtenerTodosIngredientes(tipoSeleccionado).subscribe(ingredientesXTipo=>
    {this.ingredientesXTipo = ingredientesXTipo;  
    });          
}

/**
 * Método para mostar o no el input de cantidad del ingrediente seleccionado
 * @param ingXtipo 
 */
ingSelect(ingXtipo){

  ingXtipo.seleccionado = !ingXtipo.seleccionado;

}

cantidadInputChange(idIngrediente: number, cantidad: string) {
  console.log("idIngrediente: ", idIngrediente);
  console.log("cantidad: ", cantidad);
  
}

/**
 * Método para mostrar un nuevo div para agregar un nuevo paso y
 * 
 * añadir el paso al array de pasos
 */
agregarPaso() {

  // crea un nuevo elemento div
  const nuevoDiv = document.createElement('div');

  nuevoDiv.innerHTML = `
    <div class="row paso" >
      <div class="col">
        <label class="form-label custom-label fw-bold mt-3" for="InputDescripPaso">Paso ${this.numPasos}</label>
        <textarea name="text" id="InputDescripPaso" cols="50" rows="3"></textarea>
      </div>
      <div class="col">
        <label class="form-label fw-bold text-center mt-3" for="InputFotoPaso">Adjunta la imagen</label>
        <input class="form-control mt-4 fs-5" type="file" name="formFile" id="InputFotoPaso" required (change)="onFileSelectedPasos($event)">
      </div>
    </div>
  `;

  // agrega el nuevo div al contenedor de pasos
  const pasosContainer = document.querySelector('#pasos-container');
  pasosContainer.appendChild(nuevoDiv);

  // incrementa el número de pasos
  this.numPasos++; 

   // obtiene todos los divs de paso y los recorre
   const pasosDivs = document.querySelectorAll('.paso');
   this.pasos = []; // reinicia el array de pasos
   pasosDivs.forEach(div => {
     // crea un objeto paso con la descripción y la imagen del div
     
     const paso = {
      idPasos: null,
      idRecetas: null,
      tipo: null,
      descripcion: div.querySelector('textarea').value,
      foto: this.fotoPaso
     };
     this.pasos.push(paso); // agrega el objeto paso al array de pasos
     this.fotoPaso = null;
     console.log(this.pasos);
   });
  
}




/**
 * Método para mandar al servicio los datos rellenados por el usuario y poder guardar la receta 
 */
subirReceta(){
    
  let receta = new Receta(null,this.idUsuario, this.descripcion, this.tiempo, this.foto, this.titulo, this.categoria,
    this.fechaAlta,this.valoracionMedia,this.comensales,this.ingredientes, this.pasos);
    console.log(this.foto);

    this.recetasService.subirReceta(receta).subscribe(
      response => this.mensaje = "Enhorabuena! se ha añadido la receta, gracias.",
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          this.mensaje = 'Error de red:'+ error.error.message;
        } else {
          this.mensaje = `Error en el servidor: ${error.status}: ${error.error}`;
        }
      }
    );
  };

}
