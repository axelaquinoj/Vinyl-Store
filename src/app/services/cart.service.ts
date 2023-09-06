import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/shared/models/Cart';
import { Vinyl } from 'src/shared/models/vinyl';
import { CartItem } from 'src/shared/models/Cartitem';
import { inRange } from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(vinyl:Vinyl){
    let cartItem = this.cart.items.find(item => item.vinyl.id == vinyl.id);
    if (cartItem){
      return;
    }
    this.cart.items.push(new CartItem(vinyl));
    this.setCartToLocalStorage();

  }
  removeFromCart(vinylId:string){
    this.cart.items = this.cart.items.filter(item=> item.vinyl.id != vinylId);
    this.setCartToLocalStorage();

  }
  changeQuantity(vinylId: string, quantity:number){
    let cartItem = this.cart.items.find(item => item.vinyl.id == vinylId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.vinyl.price;
    this.setCartToLocalStorage();

  }
  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();

  }
  getCartObservable(): Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(){
    this.cart.totalPrice = this.cart.items.reduce((prevSum,currentItem)=> prevSum + currentItem.price,0);
    this.cart.totalCount = this.cart.items.reduce((prevSum,currentItem)=> prevSum + currentItem.quantity,0 )
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);

    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage(){
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
