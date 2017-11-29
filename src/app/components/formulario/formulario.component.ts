import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExamenService } from '../../services/examen.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
   providers: [ ExamenService ]
})
export class FormularioComponent implements OnInit {
  
  
  private Nombre: String;
  private Apellidos: String;
  private Nombre_Usuario: String;
  private Contrasenia: String;
  private Correo_Electronico: String;
  
  constructor(private clienteService: ExamenService){}

   enviarFormulario(){
     
       let params = {
        "Nombre": this.Nombre,       
        "Apellidos": this.Apellidos,        
        "Nombre_Usuario": this.Nombre_Usuario,        
        "Correo_Electronico": this.Correo_Electronico,        
        "Contraseña": this.Contrasenia};

       this.clienteService.postInsert(JSON.stringify(params))
       .then(resp => {
          
           let respuesta = JSON.parse(resp.text())

           alert('ID DEL CLIENTE: ' + respuesta[0].Cve_Mensaje)
       })

      
     
     
   }

  ngOnInit() {
  }

}
