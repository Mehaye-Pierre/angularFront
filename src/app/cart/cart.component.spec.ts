import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDataService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CartComponent } from './cart.component';
import { HttpModule } from '@angular/http';
import { StorageService, LocalStorageService } from '../services/storage.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ CartComponent ],
      providers: [ProductsDataService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
