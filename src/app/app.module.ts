import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { ProductsDataService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { LocalStorageService, StorageService } from './services/storage.service';
import { CartDetailledComponent } from './cart-detailled/cart-detailled.component';
import { DetailledArticleComponent } from './detailled-article/detailled-article.component';

const appRoutes: Routes = [
  { path: 'cart', component: CartDetailledComponent },
  { path: '', component: StoreComponent },
  { path: 'detail/:id', component: DetailledArticleComponent },
  { path: '**', component: StoreComponent }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CartComponent,
    StoreComponent,
    CartDetailledComponent,
    DetailledArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsDataService,
    LocalStorageService,
    { provide: StorageService, useClass: LocalStorageService },
    {
      deps: [StorageService, ProductsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
