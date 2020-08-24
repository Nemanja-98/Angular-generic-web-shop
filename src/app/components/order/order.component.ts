import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../assets/Product'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }
  @Input() contents : Product[];
  ngOnInit(): void {
  }

}
