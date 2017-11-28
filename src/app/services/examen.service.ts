import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ExamenService {

  constructor(private http:Http) { }

  getClientes(){
    this.http.get('')
          .toPromise()
          .then(response => response.json)
          .catch(this.ocurrioUnError)
  }


  private ocurrioUnError(error:any){
    console.log("Ocurrio un error", error)
    return Promise.reject(error.message || error)
  }




}
