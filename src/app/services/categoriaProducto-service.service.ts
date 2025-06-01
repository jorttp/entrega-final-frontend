import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriaProducto} from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProductoServiceService {
  private apiUrl = 'http://localhost:8080/api/v1/categoriasProductos';
  private http = inject(HttpClient);

  createCategoriaProducto(categoriaProducto: CategoriaProducto): Observable<CategoriaProducto> {
    return this.http.post<CategoriaProducto>(this.apiUrl, categoriaProducto);
  }

  constructor() { }
}
