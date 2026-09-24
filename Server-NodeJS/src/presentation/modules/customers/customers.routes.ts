import { Router } from "express";
import { CustomersController } from "./customers.controller";

/**
 * Define los endpoints del módulo de clientes y los delega a su controlador.
 *
 * @remarks
 * Esta clase agrupa las rutas relacionadas con clientes,
 * delegando la lógica de negocio al `CustomersController`.
 */
export class CustomersRoutes {
  /**
   * Retorna el router de Express con las rutas del módulo.
   *
   * @returns Router de Express con las rutas del módulo
   */
  static get routes(): Router {
    const router = Router();
    const controller = new CustomersController();

    /**
     * @openapi
     * /api/customers/{countCustomers}:
     *   get:
     *     summary: Obtener listado de clientes
     *     description: Retorna una lista de clientes generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Customers
     *     parameters:
     *       - in: path
     *         name: countCustomers
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de clientes a generar
     *     responses:
     *       200:
     *         description: Lista de clientes generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Customer'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countCustomers", controller.getAllCustomers);

    return router;
  }
}