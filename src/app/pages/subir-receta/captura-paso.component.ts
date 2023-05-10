import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-captura-paso',
  templateUrl: './captura-paso.component.html',
  styleUrls: ['./subir-receta.component.css']
})
export class CapturaPasoComponent {

  @Input() contadorPasos: number;

  @Output() pasoAgregado = new EventEmitter<{ descripcion: string, foto: string }>();
  pasoForm = new FormGroup({
  descripcionPaso: new FormControl('')
  });
  foto: string;

  onFileSelectedPasos(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.foto = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  agregar() {
    const descripcion = this.pasoForm.value.descripcionPaso;
    this.pasoAgregado.emit({ descripcion, foto: this.foto });
    this.pasoForm.reset();
    this.foto = null;
  }
}

