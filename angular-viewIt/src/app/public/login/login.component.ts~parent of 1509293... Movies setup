import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User(1, 'Doctor Who', 'doctorwho@gmail.com', '22/08/1995', '1234567890');

  constructor(public router: Router) {}

  ngOnInit() {
  }


  onSubmit(event: Event) {
    event.preventDefault();
    const authorized = true;
    this.router.navigate(['/home']);
  }

}
