import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { StorageService, LocalStorageService } from '../services/storage.service';
import { ProductsDataService } from '../services/products.service';
import { OrderConfirmedComponent } from './order-confirmed.component';

describe('OrderConfirmedComponent', () => {
  let component: OrderConfirmedComponent;
  let fixture: ComponentFixture<OrderConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ OrderConfirmedComponent ],
      providers: [AuthService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}, ProductsDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
