/**
 * Interfaz que representa un cliente.
 *
 * Contiene la información básica necesaria para mostrar un cliente
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada cliente debe tener un `id` único, un `name` descriptivo,
 * un `email` válido y un `phone` de contacto.
 *
 * @example
 * ```ts
 * const cliente: Customer = {
 *   id: 1,
 *   name: 'Juan Pérez',
 *   email: 'juan.perez@email.com',
 *   phone: '+1 234 567 890'
 * };
 * ```
 */
export interface Customer {
    /** Identificador único del cliente */
    id: number;

    /** Nombre del cliente */
    name: string;

    /** Correo electrónico del cliente */
    email: string;

    /** Número de teléfono del cliente */
    phone: string;
}