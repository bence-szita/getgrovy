import { Product } from './products';
import {ShoppingCartItem} from './shopping-cart-item'

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [productId: string]: ShoppingCartItem}){
    
    for (let productId in itemsMap){
      let item = itemsMap[productId];
    this.items.push(new ShoppingCartItem(item.product, item.quantity));
  }
    
  }

  get totalPrice(){
      let sum = 0;
      for (let productId in this.items){
        sum += this.items[productId].totalPrice;
    }
    return sum
  }


  get totalItemCount(){
    let count = 0;
    for (let productId in this.itemsMap){
          count += this.itemsMap[productId].quantity;
    }
    return count;
  }

  getQuantity( product: Product){
    /* if there is no shopping cart or no id with specific id return 0 */
    let item = this.itemsMap[product.key];
    console.log("uu", product)
    return item ? item.quantity : 0;
  }
}