import { Component, OnInit } from '@angular/core';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  faInstagram = faInstagram;
  faGitHub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
