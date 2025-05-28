export interface Client {
  id: string;
  nombre: string;
  apellido: string;
  cedula: number;
  telefono: number;
  correo: string;
  direccion: string;
  ciudad: {
    id: string;
    nombre: string;
    departamento: string;
  };
}
