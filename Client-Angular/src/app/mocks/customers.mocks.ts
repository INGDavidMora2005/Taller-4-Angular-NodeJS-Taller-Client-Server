import { Customer } from "../interfaces/customers.interface";

/**
 * Datos de ejemplo de clientes usados en las pruebas unitarias.
 * Contiene un array de clientes con id, name, email y phone.
 */
export const CUSTOMERS_MOCK: Customer[] = [
    {
        id: 1,
        name: 'Carlos Ramírez',
        email: 'carlos@example.com',
        phone: '+57 300 123 4567',
    },
    {
        id: 2,
        name: 'Ana María López',
        email: 'ana.lopez@example.com',
        phone: '+57 310 987 6543',
    },
    {
        id: 3,
        name: 'Pedro González',
        email: 'pedro.gonzalez@example.com',
        phone: '+57 320 555 1234',
    }
];