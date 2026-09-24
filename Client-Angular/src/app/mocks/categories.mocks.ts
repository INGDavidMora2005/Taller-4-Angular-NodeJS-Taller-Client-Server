import { Category } from "../interfaces/categories.interface";

/**
 * Datos de ejemplo de categorías usados en las pruebas unitarias.
 * Contiene un array de categorías con id, name y description.
 */
export const CATEGORIES_MOCK: Category[] = [
    {
        id: 1,
        name: 'Electrónica',
        description: 'Dispositivos electrónicos y accesorios',
    },
    {
        id: 2,
        name: 'Deportes',
        description: 'Artículos y equipamiento deportivo',
    }
];