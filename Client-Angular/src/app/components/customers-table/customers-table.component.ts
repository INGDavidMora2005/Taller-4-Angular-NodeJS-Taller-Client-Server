import { Component, Input } from '@angular/core';
import { Customer } from '../../interfaces/customers.interface';

/**
 * Componente de tabla de clientes.
 *
 * Se utiliza para mostrar un listado de clientes en una tabla,
 * mostrando información como id, nombre, email y teléfono.
 *
 * @remarks
 * Este componente recibe los clientes desde un componente padre
 * a través del Input `customers`.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-customers-table [customers]="customersList"></app-customers-table>
 * ```
 */
@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
})
export class CustomersTableComponent {
  /**
   * Listado de clientes que se mostrarán en la tabla.
   * @type {Customer[]}
   * @remarks
   * Este Input permite pasar un array de clientes desde un componente padre,
   * generalmente `CustomersPage`. Cada cliente debe cumplir la interfaz `Customer`.
   */
  @Input() customers: Customer[] = [];
}