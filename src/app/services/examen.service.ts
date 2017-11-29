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
    const req = this.http.post('http://192.168.100.2:8091/NutriNET/Cliente', params)
      .subscribe(
        res => {
          console.log(res);
          alert('agrego correctamente')
        },
        err => {
          console.log("Ocurrio un error");
        }
      );
  }


  private ocurrioUnError(error:any){
    alert('Error al consultar datos!')
    console.log("Ocurrio un error", error)
    return Promise.reject(error.message || error)
  }




}
