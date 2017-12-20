import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductsDataService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { StorageService, LocalStorageService } from '../services/storage.service';
import { StoreComponent } from './store.component';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpModule],
      declarations: [ StoreComponent ],
      providers: [ProductsDataService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
