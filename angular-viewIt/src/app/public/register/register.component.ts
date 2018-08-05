import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:  any = {};

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }

}
