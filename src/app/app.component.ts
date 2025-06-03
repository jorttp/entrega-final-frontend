import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import {CategoriaProducto} from '@app/models/categoriaProducto.model';
import {CategoriaProductoServiceService} from '@app/services';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lilfac';
  id = '00000000-0000-0000-0000-000000000000';
  producto = '';
  categoria = '';

  constructor(private categoriaProductoService: CategoriaProductoServiceService) {}

  agregarCategoriaProducto() {
    if (!this.producto || !this.categoria) {
      alert('Por favor completa todos los campos');
      return;
    }

    const categoriaProducto: CategoriaProducto = {
      prodcuto: {nombre: this.producto},
      categoria: {nombre: this.categoria},
    };

    this.categoriaProductoService.createCategoriaProducto(categoriaProducto).subscribe({
      next: (respuesta) => {
        console.log('Categoria asignada exitosamente', respuesta);
        alert('Categoria asignada con éxito');
      },
      error: (error) => {
        console.error('Error al asignar la categoria', error);
        alert('Hubo un error al asignar la categoria');
      }
    });
  }

}
