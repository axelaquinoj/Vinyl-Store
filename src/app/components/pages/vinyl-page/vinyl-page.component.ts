import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { VinylService } from 'src/app/services/vinyl.service';
import { Vinyl } from 'src/shared/models/vinyl';

@Component({
  selector: 'app-vinyl-page',
  templateUrl: './vinyl-page.component.html',
  styleUrls: ['./vinyl-page.component.css']
})
export class VinylPageComponent implements OnInit {
vinyl!: Vinyl;
  constructor(activatedRoute:ActivatedRoute, vinylService:VinylService,
    private cartService:CartService, private router:Router) { 
activatedRoute.params.subscribe(params =>{
  if (params['id']){
    vinylService.getVinylById(params['id']).subscribe(serverFood =>{
      this.vinyl = serverFood;
    });
  }
})
  }
  addToCart(){
this.cartService.addToCart(this.vinyl);
this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
  }

}
