import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import {Client} from '@app/models/client.model';
import {ClientServiceService} from '@app/services';

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
  nombre = '';
  apellido = '';
  cedula = 0;
  telefono = 0;
  correo = '';
  direccion = '';
  ciudad = '';

  constructor(private clientService: ClientServiceService) {}

  agregarCliente() {
    const cliente: Client = {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion,
      ciudad: this.ciudad,

    }

    this.clientService.createClient(cliente).subscribe({
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
