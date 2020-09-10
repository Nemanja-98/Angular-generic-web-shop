import { Component, Input, OnInit } from '@angular/core';
//import { ProductComponent } from '../product/product.component';
import { Product } from '../../../assets/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() {}

  @Input() products: Product[] = []; 
  currentPage: number = 1;
  ngOnInit() {}
}