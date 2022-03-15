import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product_quantity:number = 1;
  product = {
    id:0,
    name:'',
    price:0,
    url:'',
    description:''
  }


  constructor(private cartService: CartService)  { }

  ngOnInit(): void {
    this.product = history.state;
    this.product_quantity = 1;

  }

  selected(event:any){
    this.product_quantity = parseInt(event.target.value);
  }

  addToCart(product:Product,product_quantity:number):void{
    this.product = product;
    this.cartService.addToCart(this.product,this.product_quantity)
    alert("Added to cart! ")
  }
  delete(product:Product){
    this.cartService.deleteFromCart(product);
  }



}
