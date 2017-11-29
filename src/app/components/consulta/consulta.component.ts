import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../services/examen.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  providers: [ ExamenService ]
})
export class ConsultaComponent implements OnInit {

  clientes: Array<Object>

  constructor(private clienteService: ExamenService){
      this.clienteService.getClientes()
                         .then(respuesta =>{
                           this.clientes = JSON.parse(respuesta.text())
                         })
  }

  ngOnInit() {
  }

}
