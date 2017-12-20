import { ClientDataService } from './services/clientData.service';
import { NgModule, PipeTransform } from '@angular/core';
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
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ButtonComponent } from './button/button.component';
import { StatusComponent } from './status/status.component';
import { AuthService } from './services/auth.service';
import { DetailledArticleComponent } from './detailled-article/detailled-article.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { BillingComponent } from './billing/billing.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { SortProducts } from './pipes/sort-products.pipe';


const appRoutes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent, canActivate: [LoginRedirect] },
  { path: 'status', component: StatusComponent, canActivate: [EnsureAuthenticated] },
  { path: 'cart', component: CartDetailledComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'order-confirmed', component: OrderConfirmedComponent },
  { path: 'detail/:id', component: DetailledArticleComponent },
  { path: 'add-address', component: AddAddressComponent },
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
    LogoutComponent,
    RegisterComponent,
    ButtonComponent,
    StatusComponent,
    DetailledArticleComponent,
    DeliveryComponent,
    OrderConfirmedComponent,
    AddAddressComponent,
    BillingComponent,
    SearchResultComponent,
    AdminComponent,
    SortProducts
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'confirm'
    })
  ],
  providers: [
    AuthService,
    EnsureAuthenticated,
    LoginRedirect,
    ProductsDataService,
    ClientDataService,
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
