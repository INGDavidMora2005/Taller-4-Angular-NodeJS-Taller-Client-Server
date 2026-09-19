import { faker } from '@faker-js/faker';
import { Category } from '../../../domain/interfaces/category.interface';

/**
 * Servicio encargado de la generación y gestión de categorías.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar categorías
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class CategoriesService {

  /**
   * Obtiene un listado de categorías generadas dinámicamente.
   *
   * @param countCategories Cantidad de categorías a generar
   * @returns Promesa que resuelve un arreglo de categorías
   *
   * @example
   * ```ts
   * const categories = await categoriesService.getAllCategories(10);
   * ```
   */
  public async getAllCategories(countCategories: number): Promise<Category[]> {
    const categories: Promise<Category>[] = [];

    for (let i = 1; i <= countCategories; i++) {
      categories.push(this.generateCategory(i));
    }

    return Promise.all(categories);
  }

  /**
   * Genera una categoría ficticia.
   *
   * @param id Identificador único de la categoría
   * @returns Promesa que resuelve una categoría generada
   */
  private generateCategory(id: number): Promise<Category> {
    return Promise.resolve({
      id,
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    });
  }
}