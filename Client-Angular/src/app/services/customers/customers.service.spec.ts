import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Customer } from '../../interfaces/customers.interface';
import { CUSTOMERS_MOCK } from '../../mocks/customers.mocks';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CustomersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllCustomers', () => {

    it('debería realizar una petición GET y retornar una lista de clientes', () => {
      const countCustomers = 5;
      const mockCustomers: Customer[] = CUSTOMERS_MOCK;

      service.getAllCustomers(countCustomers).subscribe((customers) => {
        expect(customers).toEqual(mockCustomers);
        expect(customers.length).toBe(mockCustomers.length);
      });

      const req = httpMock.expectOne(`api/customers/${countCustomers}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockCustomers);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countCustomers = 3;

      service.getAllCustomers(countCustomers).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/customers/${countCustomers}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});