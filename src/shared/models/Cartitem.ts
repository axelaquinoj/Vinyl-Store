import { Vinyl } from "./vinyl";

export class CartItem{
    constructor(public vinyl: Vinyl){

    }
    quantity:number =1;
    price:number = this.vinyl.price;
    
}