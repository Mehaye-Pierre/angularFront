import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortProducts } from '../pipes/sort-products.pipe';
import { FilterProducts } from '../pipes/filter-products.pipe';
import { ProductsDataService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { StorageService, LocalStorageService } from '../services/storage.service';
import { SearchResultComponent } from './search-result.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, NgxPaginationModule],
      declarations: [ SearchResultComponent, SortProducts, FilterProducts ],
      providers: [SortProducts, ProductsDataService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}, FilterProducts]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
