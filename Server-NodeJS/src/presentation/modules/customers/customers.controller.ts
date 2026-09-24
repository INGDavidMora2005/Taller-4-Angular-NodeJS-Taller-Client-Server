import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CustomersService } from "./customers.service";

/**
 * Controlador de clientes.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con clientes,
 * delegando la lógica de negocio al `CustomersService`.
 */
export class CustomersController {

  /**
   * Servicio de clientes.
   */
  private readonly customersService = new CustomersService();

  /**
   * Maneja la petición HTTP para obtener un listado de clientes.
   *
   * @remarks
   * El número de clientes a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /customers/10
   * ```
   */
  getAllCustomers = (req: Request, res: Response): void => {
    const { countCustomers } = req.params;

    setTimeout(() => {
      this.customersService
      .getAllCustomers(Number(countCustomers))
      .then((customers) => res.status(201).json(customers))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}