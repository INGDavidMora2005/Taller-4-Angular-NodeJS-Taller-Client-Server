import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../../domain/interfaces/order.interface';

const STATUSES: OrderStatus[] = ['Pendiente', 'Enviado', 'Entregado', 'Cancelado'];

/**
 * Servicio encargado de la generación y gestión de pedidos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar pedidos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class OrdersService {

  /**
   * Obtiene un listado de pedidos generados dinámicamente.
   *
   * @param countOrders Cantidad de pedidos a generar
   * @returns Promesa que resuelve un arreglo de pedidos
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(10);
   * ```
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera un pedido ficticio.
   *
   * @param id Identificador único del pedido
   * @returns Promesa que resuelve un pedido generado
   */
  private generateOrder(id: number): Promise<Order> {
    return Promise.resolve({
      id,
      product: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 10 }),
      total: Number(faker.commerce.price({ min: 10, max: 1000 })),
      status: faker.helpers.arrayElement(STATUSES),
    });
  }
}
