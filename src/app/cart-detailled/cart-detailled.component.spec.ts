import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HttpModule } from '@angular/http';
import { ProductsDataService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { StorageService, LocalStorageService } from '../services/storage.service';
import { CartDetailledComponent } from './cart-detailled.component';

describe('CartDetailledComponent', () => {
  let component: CartDetailledComponent;
  let fixture: ComponentFixture<CartDetailledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmationPopoverModule, HttpModule],
      declarations: [ CartDetailledComponent ],
      providers: [ProductsDataService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
