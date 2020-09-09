import { Component, OnInit } from '@angular/core';


import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {  faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faGmail = faMailBulk;
  
  constructor() { }
  ngOnInit(): void {
  }

}
