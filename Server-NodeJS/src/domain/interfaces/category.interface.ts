/**
 * Interfaz que representa una categoría.
 *
 * Contiene la información básica necesaria para mostrar una categoría
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada categoría debe tener un `id` único, un `name` descriptivo
 * y una `description` explicativa.
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: 'Electrónica',
 *   description: 'Dispositivos electrónicos y accesorios'
 * };
 * ```
 */
export interface Category {
    /** Identificador único de la categoría */
    id: number;

    /** Nombre de la categoría */
    name: string;

    /** Descripción de la categoría */
    description: string;
}