import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {BarService} from '../services/bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  // slides = [
  //   {img: 'http://placehold.it/350x150/000000'},
  //   {img: 'http://placehold.it/350x150/111111'},
  //   {img: 'http://placehold.it/350x150/333333'},
  //   {img: 'http://placehold.it/350x150/666666'}
  // ];

  slides: Array<{img: string, name: string, unitPrice: number}> = [];

  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};
  products: Array<Product>;

  constructor(private barService: BarService) { }

  ngOnInit() {
    this.getBar();
  }

  getBar() {
    this.barService.getBar().subscribe(
      (data: Product[]) => {
        // for every product received in the array
        this.products = data;
        data.forEach((product) => {this.addSlide(product); });
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Finished loading bar products!');
      }

    );
  }

  addSlide(product: Product) {
    this.slides.push({img: 'http://placehold.it/350x150/777777', name: product.name, unitPrice: product.unitPrice});
    // this.slides.push({img: '"C:\\Users\\Patri Navarro\\Pictures\\viewit-images\\cocacola.png"',
    // name: product.name, price: product.price});
    console.log('name: ' + product.name + ' price: ' + product.unitPrice);

  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }

}
