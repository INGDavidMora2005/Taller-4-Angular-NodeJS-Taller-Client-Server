import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPage } from './customers.page';
import { provideHttpClient } from '@angular/common/http';
import { CustomersService } from '../../services/customers/customers.service';
import { CustomersTableComponent } from '../../components/customers-table/customers-table.component';
import { of, throwError } from 'rxjs';
import { CUSTOMERS_MOCK } from '../../mocks/customers.mocks';
import { By } from '@angular/platform-browser';

describe('CustomersPage', () => {
  let component: CustomersPage;
  let fixture: ComponentFixture<CustomersPage>;
  let customersService: CustomersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersPage, CustomersTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersPage);
    component = fixture.componentInstance;
    customersService = TestBed.inject(CustomersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCustomers al iniciar', () => {
    const spyGetAllCustomers = jest.spyOn(customersService, 'getAllCustomers').mockReturnValue(of(CUSTOMERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllCustomers).toHaveBeenCalled();
  });

  it('debería asignar los clientes recibidos del servicio', () => {
    jest.spyOn(customersService, 'getAllCustomers').mockReturnValue(of(CUSTOMERS_MOCK));
    fixture.detectChanges();
    expect(component.customers).toEqual(CUSTOMERS_MOCK);
  });

  it('debería pasar los clientes al componente customers-table', () => {
    jest.spyOn(customersService, 'getAllCustomers').mockReturnValue(of(CUSTOMERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(CustomersTableComponent))
      .componentInstance;
    expect(tableComponent.customers).toEqual(CUSTOMERS_MOCK);
  });

  it('debería manejar el error cuando falla getAllCustomers', () => {
    component.customers = [];
    const errorResponse = new Error('Error al cargar clientes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(customersService, 'getAllCustomers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(customersService.getAllCustomers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.customers.length).toBe(0);
  });
});