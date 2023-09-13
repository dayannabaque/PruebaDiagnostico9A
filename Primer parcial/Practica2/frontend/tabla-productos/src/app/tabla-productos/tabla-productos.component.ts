// src/app/tabla-productos/tabla-productos.component.ts
import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 10.99 },
    { id: 2, nombre: 'Producto 2', precio: 24.99 },
    { id: 3, nombre: 'Producto 3', precio: 14.49 }
  ];
}
