import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input ('product') product: Product;
  @Input ('show-action') showActions = true;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService ) { }

  addtoCart(){
    this.cartService.addToCart(this.product);
  
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  getQuantity(){
    /* if there is no shopping cart or no id with specific id return 0 */
    if (!this.shoppingCart || !this.shoppingCart.items[this.product.key]) return 0;

    let item = this.shoppingCart.items[this.product.key];
    return item.quantity
  }
}