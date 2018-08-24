import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  edit() {
    const url: String =  this.router.url + '/edit';
    console.log(url);
    this.router.navigate([url]);
  }

}
