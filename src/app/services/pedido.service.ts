import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pedido} from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'https://lilfac.api.co/data';
  private http = inject(HttpClient)

  createPedido(dataModel: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiUrl}`, dataModel);
  }
  getPedido(): Observable<Pedido [] > {
    return this.http.get<Pedido []> (this.apiUrl);
  }

  updatePedido(dataModel: Pedido): Observable<Pedido> {
    return this.http.put<Pedido> (`${this.apiUrl}`, dataModel);
  }

  deletePedido( id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
