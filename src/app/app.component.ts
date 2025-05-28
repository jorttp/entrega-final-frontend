import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lilfac';
  nombre = '';
  apellido = '';
  cedula = 0;
  telefono = 0;
  correo = '';
  direccion = '';
  ciudad = '';

  constructor(private http: HttpClient) {}

  agregarCliente() {
    const cliente = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion,
      ciudad: this.ciudad,
    };

    this.http.post('http://localhost:8080/clientes', cliente)
      .subscribe({
        next: (respuesta) => {
          console.log('Cliente agregado exitosamente', respuesta);
          alert('Cliente agregado con éxito');
        },
        error: (error) => {
          console.error('Error al agregar el cliente', error);
          alert('Hubo un error al agregar el cliente');
        }
      });
  }

}
