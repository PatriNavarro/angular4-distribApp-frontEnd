import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user = new User(1, 'Doctor Who', 'doctorwho@gmail.com', '22/08/1995', '1234567890');
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
