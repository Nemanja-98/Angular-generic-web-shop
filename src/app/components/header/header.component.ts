import { Component, OnInit, Input} from '@angular/core';
import Product from '../../../assets/Product'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  cart :Product[]= [] ;
  ngOnInit(): void {
  }

}