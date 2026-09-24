import { faker } from '@faker-js/faker';
import { Customer } from '../../../domain/interfaces/customer.interface';

/**
 * Servicio encargado de la generación y gestión de clientes.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar clientes
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class CustomersService {

  /**
   * Obtiene un listado de clientes generados dinámicamente.
   *
   * @param countCustomers Cantidad de clientes a generar
   * @returns Promesa que resuelve un arreglo de clientes
   *
   * @example
   * ```ts
   * const customers = await customersService.getAllCustomers(10);
   * ```
   */
  public async getAllCustomers(countCustomers: number): Promise<Customer[]> {
    const customers: Promise<Customer>[] = [];

    for (let i = 1; i <= countCustomers; i++) {
      customers.push(this.generateCustomer(i));
    }

    return Promise.all(customers);
  }

  /**
   * Genera un cliente ficticio.
   *
   * @param id Identificador único del cliente
   * @returns Promesa que resuelve un cliente generado
   */
  private generateCustomer(id: number): Promise<Customer> {
    return Promise.resolve({
      id,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
  }
}