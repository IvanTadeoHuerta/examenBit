import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  
  
  private Nombre: String;
  private Apellidos: String;
  private Nombre_Usuario: String;
  private Contrasenia: String;
  private Correo_Electronico: String;
  
  constructor(){}

   enviarFormulario(){
     
       let params = {
        "Nombre": this.Nombre,       
        "Apellidos": this.Apellidos,        
        "Nombre_Usuario": this.Nombre_Usuario,        
        "Correo_Electronico": this.Correo_Electronico,        
        "Contraseña": this.Contrasenia};

        alert(JSON.stringify(params))
     
     
   }

  ngOnInit() {
  }

}
