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
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { DetailledArticleComponent } from './detailled-article/detailled-article.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: StoreComponent },
  { path: 'cart', component: CartDetailledComponent },
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
    LoginComponent,
    DetailledArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
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
