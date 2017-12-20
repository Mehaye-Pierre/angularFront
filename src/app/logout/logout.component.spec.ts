import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { LogoutComponent } from './logout.component';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { StorageService, LocalStorageService } from '../services/storage.service';
import { ProductsDataService } from '../services/products.service';
import { EnsureAuthenticated } from '../services/ensure-authenticated.service';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ LogoutComponent ],
      providers: [AuthService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}, ProductsDataService, EnsureAuthenticated]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
