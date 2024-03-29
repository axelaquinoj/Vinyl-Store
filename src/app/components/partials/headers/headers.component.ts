import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/shared/models/users';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
cartQuantity:number = 0;
user!:User;
  constructor(cartService:CartService, private userService:UserService) { 
    cartService.getCartObservable().subscribe(newCart => {
      this.cartQuantity = newCart.totalCount;
    })
    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }

  ngOnInit(): void {
  }
logout(){
  this.userService.logout();
}
get isAuth(){
  return this.user.token
}
}
