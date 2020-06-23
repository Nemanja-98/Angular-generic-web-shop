import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() {}

  @Input() products: ProductComponent[] = [];  //product or productComponent double check did not work once had to debug?

  ngOnInit() {}
}