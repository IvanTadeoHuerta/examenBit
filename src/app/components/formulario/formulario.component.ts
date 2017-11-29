import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      Nombre: new FormControl(),
      Apellidos: new FormControl(),
      Nombre_Usuario: new FormControl(),
      Contraseña: new FormControl(),
      Correo_Electronic: new FormControl()
      
    });
   }

   enviarFormulario(){
     console.log(this.formulario)
   }

  ngOnInit() {
  }

}
