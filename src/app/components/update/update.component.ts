import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExamenService } from '../../services/examen.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  providers: [ ExamenService ]
})
export class UpdateComponent implements OnInit {
  private Cliente_ID: number = 59;
  private Edad: number = 39;
  private GEB: number = 1500;
  private Estatura: number;
  private Peso: number;

  constructor(private clienteService: ExamenService) { }

  ngOnInit() {
  }

  putDatos(){
    let params = {
        "Edad": this.Edad,       
        "Estatura": this.Estatura,        
        "Peso": this.Peso,        
        "GEB": this.GEB};


    this.clienteService.putUpdate(this.Cliente_ID,JSON.stringify(params))
     .then(resp => {
           console.log('respuesta del update: ', resp)
           let respuesta = JSON.parse(resp.text())
           alert('ID DEL CLIENTE: ' + respuesta[0].Cve_Mensaje)
       })

  }

  

}
