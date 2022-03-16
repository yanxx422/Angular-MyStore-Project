import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList= [] as any;

  constructor() { }
  getCart(){
    return this.cartList;
  }

  addToCart(product:any,quantity:number){
    const found = this.cartList.find((element: { name: string; }) => element.name === product.name)
    if (!found) {
      product['quantity'] = quantity;
      this.cartList.push(product);

    } else {
      let productIndex = this.cartList.findIndex((item: { name: any; }) => item.name == product.name);
      this.cartList[productIndex].quantity += quantity;
    }

    return this.cartList;
  }

  deleteFromCart(product:any){
    this.cartList = this.cartList.filter((x: { name: any; }) => x.name != product.name)
    alert("Product Removed! ")
    return this.cartList;
  }
  clearCart(){
    this.cartList = []
    return this.cartList
  }
}
