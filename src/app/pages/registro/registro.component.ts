import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent{
  
  User = new FormGroup({
    nombre : new FormControl('', Validators.required), 
    apellidos : new FormControl('', Validators.required),
    nick : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    contrasenia : new FormControl('', Validators.required),
    foto : new FormControl('', Validators.required)
  })

  constructor(private fb: FormBuilder) { }

  saveUser(form: any){
    console.log(this.User.value)
  }

}
