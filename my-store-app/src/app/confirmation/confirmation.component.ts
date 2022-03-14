import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userInfo:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userInfo = this.userService.userInfo
  }


}
