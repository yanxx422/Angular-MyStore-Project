import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CartService} from '../services/cart.service'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  product_quantity:number;
  @Output() deleteThis = new EventEmitter();

  constructor(private cartService: CartService) {
    this.product = {
      id:0,
      name:'',
      price:0,
      url:'',
      description:''
    }
    this.product_quantity = 1;

  }

  ngOnInit(): void {

  }
  selected(event:any){
    this.product_quantity = parseInt(event.target.value);
  }
  addToCart(product:Product,product_quantity:number):void{
    this.product = product;
    this.cartService.addToCart(this.product,this.product_quantity)
    alert("Added to cart! ")
  }
  delete(product:any){
    this.deleteThis.emit(product);
  }

}
