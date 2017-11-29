import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ExamenService {

  constructor(private http:Http) { }

  getClientes(){
    return this.http.get('http://187.188.122.85:8091/NutriNET/Cliente')
          .toPromise()
          .then(response => response)
          .catch(this.ocurrioUnError)
  }


  postInsert(params){
    return this.http.post('http://187.188.122.85:8091/NutriNET/Cliente', params)
      .toPromise()
      .then(res => res)
      .catch(this.ocurrioUnError)
  }


  private ocurrioUnError(error:any){
    alert('Error al consultar datos!')
    console.log("Ocurrio un error", error)
    return Promise.reject(error.message || error)
  }




}
