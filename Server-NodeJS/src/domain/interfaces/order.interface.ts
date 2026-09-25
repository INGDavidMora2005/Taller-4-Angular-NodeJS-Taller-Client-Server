/**
 * Estados posibles de un pedido.
 */
export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';

/**
 * Interfaz que representa un pedido.
 *
 * Contiene la información básica necesaria para mostrar un pedido
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada pedido debe tener un `id` único, el `product` solicitado,
 * la `quantity` pedida, el `total` a pagar y su `status` actual.
 *
 * @example
 * ```ts
 * const pedido: Order = {
 *   id: 1,
 *   product: 'Auriculares inalámbricos',
 *   quantity: 2,
 *   total: 129.99,
 *   status: 'Pendiente'
 * };
 * ```
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;

  /** Nombre del producto solicitado */
  product: string;

  /** Cantidad de unidades pedidas */
  quantity: number;

  /** Total a pagar por el pedido */
  total: number;

  /** Estado actual del pedido */
  status: OrderStatus;
}
