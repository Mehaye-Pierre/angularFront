import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ButtonComponent } from './button/button.component';
import { ProductsDataService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { StorageService, LocalStorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [AppComponent, CartComponent, ButtonComponent],
      providers: [ProductsDataService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}, AuthService, EnsureAuthenticated]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
