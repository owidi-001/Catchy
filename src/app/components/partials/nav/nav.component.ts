import { Component, OnInit } from '@angular/core';
import { faGithubAlt,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  faGithubAlt=faGithubAlt;
  faLinkedinIn=faLinkedinIn;
  title="Catchy News"

  constructor() { }

  ngOnInit(): void {
  }

}
