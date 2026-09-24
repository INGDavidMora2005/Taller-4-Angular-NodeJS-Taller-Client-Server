import { Product } from "../interfaces/products.interface";

/**
 * Datos de ejemplo de productos usados en las pruebas unitarias.
 * Contiene un array de productos con id, name, category y price.
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];