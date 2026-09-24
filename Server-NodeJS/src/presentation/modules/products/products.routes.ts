import { Router } from "express";
import { ProductsController } from "./products.controller";

/**
 * Define los endpoints del módulo de productos y los delega a su controlador.
 *
 * @remarks
 * Esta clase agrupa las rutas relacionadas con productos,
 * delegando la lógica de negocio al `ProductsController`.
 */
export class ProductsRoutes {
  /**
   * Retorna el router de Express con las rutas del módulo.
   *
   * @returns Router de Express con las rutas del módulo
   */
  static get routes(): Router {
    const router = Router();
    const controller = new ProductsController();

    /**
     * @openapi
     * /api/products/{countProducts}:
     *   get:
     *     summary: Obtener listado de productos
     *     description: Retorna una lista de productos generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Products
     *     parameters:
     *       - in: path
     *         name: countProducts
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de productos a generar
     *     responses:
     *       200:
     *         description: Lista de productos generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Product'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countProducts", controller.getAllProducts);

    return router;
  }
}