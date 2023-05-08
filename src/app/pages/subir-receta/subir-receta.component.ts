import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recetasService } from '../mostrar-recetas/recetasService.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Ingredientes } from 'src/app/Ingredientes.model';
import { Pasos } from 'src/app/Pasos.model';
import { RecetasRequest } from 'src/app/RecetasRequest.model';


/**
 * Componente para crear una receta
 * 
 * Se creará una receta con los datos introducidos por el usuario
 */
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

  /**
   * Array que contendrá los ingredientes contendrá la receta
   */
  ingredientes: Ingredientes[];


  ocultarIngredientes = false;


  activeButtonIndex: number = null;
 
  subidaCorrectamente: boolean;

  categoriaSeleccionada:  any = null;
 
/**
 * Constructor de la clase donde donde Injectamos los servicios necesarios
 * @param route Routing para poder recibir el id del Usuario que va a subir la receta
 * @param recetasService Servicio necesario para la optención de los datos de las recetas y los ingredientes
 */
  constructor(private route: ActivatedRoute, private recetasService: recetasService) {

    this.ingredientes = [];
  
    
  }
  

/**
 * Método que se carga cuando inicia la página
 * 
 * Recuperamos el id del usuario de la ruta y se lo asignamos a nuestra variable idUsuario
 * 
 * Obtenemos todos los ingredientes de la base de datos mandando la consulta a nuestro servicio,
 * recorremos el array de ingredientes para optener los tipos de éstos y  guardamos los tipos no repetidos en nuestra variable tipos únicos.
 * 
 * Creamos una variable Date para almacenar la fecha actual cuando ingresa en la página, recogemos el año, mes y dia de esa variable,
 * y se la asignamos a la variable que vamos a mandar a la receta en el formato que necesitamos
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
      

      const fechaActual = new Date();
      const anyo = fechaActual.getFullYear().toString();
      let mes = (fechaActual.getMonth() + 1).toString();
      if (mes.length === 1) {
        mes = '0' + mes;
      }
      let dia = fechaActual.getDate().toString();
      if (dia.length === 1) {
        dia = '0' + dia;
      }
      this.fechaAlta = new Date(`${anyo}-${mes}-${dia}`);

     
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
 * Método para capturar la categoría de la receta y cambiar el color de la categoria seleccionada
 */
capturarCategorias(event: any) {
  const botonSeleccionado = event.currentTarget;
  const botones = document.querySelectorAll('.btn-iconosbarra');
  
  // Si hay un botón seleccionado, lo deseleccionamos
  if (this.categoriaSeleccionada) {
    this.categoriaSeleccionada.classList.remove('btn-iconosbarra-seleccionado');
  }

  this.categoria = botonSeleccionado.querySelector('img').alt;
  botonSeleccionado.classList.add('btn-iconosbarra-seleccionado');
  this.categoriaSeleccionada = botonSeleccionado;

  console.log(this.categoria);
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
 * Método para mostar o no el input de cantidad del ingrediente seleccionado,
 * si el ingrediente se selecciona lo añade al array de ingredientes para asociarlo a la receta,
 * si lo deselecciona lo borra del array
 * @param ingXtipo 
 */
ingSelect(ingXtipo){

  ingXtipo.seleccionado = !ingXtipo.seleccionado;

  if (ingXtipo.seleccionado) {
    this.ingredientes.push(ingXtipo);
  } else {
    const index = this.ingredientes.findIndex(i => i.idIngrediente === ingXtipo.idIngrediente);
    this.ingredientes.splice(index, 1);
  }

}
/**
 * Método para asignar la cantidad al ingrediente seleccionado
 * @param cantidad. Recibe la cantidad ingresada por el usuario
 * @param ingXTipo. Recibe el ingrediente para asociarle la cantidad
 */
setCantidad(cantidad: any, ingXTipo:Ingredientes) {
  const ingredienteseleccionado = this.ingredientes.find(i => i.idIngrediente === ingXTipo.idIngrediente);
  if(typeof cantidad === 'string'){
    ingXTipo.cantidad = cantidad;
  }
  console.log(this.ingredientes);
}

/**
 * Método para ocultar los div de ingredientes cuando se ha terminado de elegirlos
 */
ocultar(){
  this.ocultarIngredientes = true;
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
        <textarea name="text" id="InputDescripPaso" cols="50" rows="3" placeholder="Descripción del paso" ></textarea>
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
     this.fotoPaso = null;  //reiniciamos la variable foto
   });
  
}




/**
 * Método para mandar al servicio los datos rellenados por el usuario y poder guardar la receta 
 */
subirReceta(){
    

    let receta = new RecetasRequest(null,this.idUsuario, this.descripcion, this.tiempo, this.foto, this.titulo, this.categoria,
    this.fechaAlta,this.valoracionMedia,this.comensales,this.ingredientes, this.pasos);
    

    this.recetasService.subirReceta(receta).subscribe(
      
      response => this.subidaCorrectamente = true,
      
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          this.subidaCorrectamente = false;
        } else {
          this.subidaCorrectamente = false;
        }
      }
    );
  };

}
