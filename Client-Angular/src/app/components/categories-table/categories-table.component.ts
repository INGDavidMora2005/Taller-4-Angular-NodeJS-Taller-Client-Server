import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/categories.interface';

/**
 * Componente de tabla de categorías.
 *
 * Se utiliza para mostrar un listado de categorías en una tabla,
 * mostrando información como id, nombre y descripción.
 *
 * @remarks
 * Este componente recibe las categorías desde un componente padre
 * a través del Input `categories`.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-categories-table [categories]="categoriesList"></app-categories-table>
 * ```
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
})
export class CategoriesTableComponent {
  /**
   * Listado de categorías que se mostrarán en la tabla.
   * @type {Category[]}
   * @remarks
   * Este Input permite pasar un array de categorías desde un componente padre,
   * generalmente `CategoriesPage`. Cada categoría debe cumplir la interfaz `Category`.
   */
  @Input() categories: Category[] = [];
}
