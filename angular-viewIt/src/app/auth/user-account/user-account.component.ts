import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
