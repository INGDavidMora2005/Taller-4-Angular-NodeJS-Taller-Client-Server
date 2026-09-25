import { Order } from "../interfaces/orders.interface";

/**
 * Datos de ejemplo de pedidos usados en las pruebas unitarias.
 */
export const ORDERS_MOCK: Order[] = [
    { id: 1, product: 'Auriculares inalámbricos', quantity: 2, total: 129.99, status: 'Pendiente' },
    { id: 2, product: 'Teclado mecánico', quantity: 1, total: 89.50, status: 'Enviado' },
];
