import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../interfaces/customers.interface';

/**
 * Servicio encargado de la gestión de clientes.
 *
 * Proporciona métodos para obtener información de clientes
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private customersService: CustomersService) {}
 *
 * this.customersService.getAllCustomers(10).subscribe(customers => {
 *   console.log(customers);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de clientes desde el backend.
   *
   * @param countCustomers Número de clientes a obtener.
   * @returns Observable que emite un array de clientes.
   *
   * @example
   * ```ts
   * this.customersService.getAllCustomers(5).subscribe(customers => {
   *   console.log(customers);
   * });
   * ```
   */
  getAllCustomers(countCustomers: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`api/customers/${countCustomers}`);
  }
}