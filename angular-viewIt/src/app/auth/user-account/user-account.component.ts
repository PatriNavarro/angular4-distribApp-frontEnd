import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../public/services/user.service';
import {NgForm} from '@angular/forms';
import {OrderDetail} from '../../models/orderDetail';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
user: User;
orderList: Array<OrderDetail>;
total: number;
  constructor(public router: Router,
              public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.total = 0;
    this.getOrderList();
  }

  getOrderList() {
    this.userService.getCurrentOrder().subscribe(
      (data: OrderDetail[]) => {
          this.orderList = data;
          // Calculate total value
          this.orderList.forEach((od) => this.addPrice(od));
          // this.router.navigate(['/billboard']);
        },
      error => {
        console.error(error);
      },
      () => {
        console.log('Finished loading the order list!');
      }
    );
  }

  saveChanges(form: NgForm) {
    this.router.navigate(['/home']);
  }

  private addPrice(od: OrderDetail) {
    this.total += od.orderDetailPrice;
  }

  purchase() {
    this.userService.purchaseCurrentOrder();
    this.router.navigate(['/billboard']);
  }
}
