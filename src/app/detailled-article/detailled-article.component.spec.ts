import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDataService } from './../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { StorageService, LocalStorageService } from '../services/storage.service';
import { DetailledArticleComponent } from './detailled-article.component';

describe('DetailledArticleComponent', () => {
  let component: DetailledArticleComponent;
  let fixture: ComponentFixture<DetailledArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ DetailledArticleComponent],
      providers: [ProductsDataService, ShoppingCartService, {provide: StorageService, useClass: LocalStorageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailledArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
