import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lilfac';
  cliente = '';
  departamento = '';
  ciudad = '';
  direccionEntrega = '';
  fechaReserva = '';
  fechaEntrega = '';
  id = '';
  abono = 0;
  total = 0;
  restante = 0;

  productos = [
    { nombre: '', cantidad: 1, precio: 0 }
  ];

  constructor(private http: HttpClient) {}

  agregarProducto() {
    this.productos.push({ nombre: '', cantidad: 1, precio: 0 });
    this.calcularTotales();
  }

  calcularTotales() {
    this.total = this.productos.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
    this.restante = this.total - this.abono;
  }

  enviarPedido() {
    const pedido = {
      cliente: this.cliente,
      departamento: this.departamento,
      ciudad: this.ciudad,
      direccionEntrega: this.direccionEntrega,
      fechaReserva: this.fechaReserva,
      fechaEntrega: this.fechaEntrega,
      id: this.id,
      productos: this.productos,
      abono: this.abono,
      total: this.total,
      restante: this.restante
    };

    this.http.post('http://localhost:4200/pedidos', pedido)
      .subscribe({
        next: (respuesta) => {
          console.log('Pedido enviado exitosamente', respuesta);
          alert('Pedido enviado con éxito');
        },
        error: (error) => {
          console.error('Error al enviar el pedido', error);
          alert('Hubo un error al enviar el pedido');
        }
      });
  }

}
