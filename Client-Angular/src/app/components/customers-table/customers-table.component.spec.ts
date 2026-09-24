import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOMERS_MOCK } from '../../mocks/customers.mocks';
import { CustomersTableComponent } from './customers-table.component';

describe('CustomersTableComponent', () => {
  let component: CustomersTableComponent;
  let fixture: ComponentFixture<CustomersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada cliente', () => {
    component.customers = CUSTOMERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.customers.length);
  });

  it('debería mostrar los datos del cliente en cada columna', () => {
    component.customers = CUSTOMERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const customer = component.customers[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(customer.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(customer.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(customer.email);
      expect(columns[3].nativeElement.textContent.trim()).toBe(customer.phone);
    });
  });
});