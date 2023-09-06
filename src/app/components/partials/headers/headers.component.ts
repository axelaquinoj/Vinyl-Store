import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
cartQuantity:number = 0;
  constructor(cartService:CartService) { 
    cartService.getCartObservable().subscribe(newCart => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {
  }

}
