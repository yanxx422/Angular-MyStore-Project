import { Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList = <any[]>([]);
  userInfo:any;


  constructor(private cartService:CartService, private userService:UserService ) {
    this.userInfo = {
      fullName: '',
      address : '',
      creditCard : '',
      totalPrice : '',
      orderDetails : []
    }
  }
  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.userInfo.totalPrice = this.cartList.reduce(function(acc,curr) {
      return acc + curr.price * curr.quantity
    },0);
  }

  send(userInfo:any){
    this.userInfo.orderDetails = this.cartList;
    this.userService.userInfo = this.userInfo;
    this.cartList = [];
    this.cartService.clearCart();
  }

  fullNameChanged(value:string){
    console.log(value)
    this.userInfo.fullName = value;
  }

  addressChanged(value:string){
    this.userInfo.address = value;
  }

  creditCardChanged(value:string){
    this.userInfo.creditCard = value;
  }
}
