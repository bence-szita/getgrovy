import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { CustomFormsModule } from 'ng2-validation';

import { AdminOrdersComponent } from '././admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from '././admin/components/admin-products/admin-products.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from './shared/components/product-quantity/product-quantity.component';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';

import { SharedModule } from './shared/shared.module'
import { AdminModule } from './admin/admin.module'
import { ShoppingModule } from './shopping/shopping.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
   
    ]),
    NgbModule
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
