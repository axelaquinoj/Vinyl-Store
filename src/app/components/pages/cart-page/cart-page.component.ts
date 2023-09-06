import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/shared/models/Cart';
import { CartItem } from 'src/shared/models/Cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService) { 
    cartService.getCartObservable().subscribe(cart =>{
      this.cart = cart;
    })
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.vinyl.id);
  }
  changeQuantity(cartItem:CartItem, quanityString:string){
    const quantity = parseInt(quanityString);
    this.cartService.changeQuantity(cartItem.vinyl.id,quantity);
  }

  ngOnInit(): void {
  }

}
