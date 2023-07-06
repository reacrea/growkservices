import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-header-services',
  templateUrl: './modern-sass-header-services.component.html',
  styleUrls: ['./modern-sass-header-services.component.scss']
})
export class ModernSassHeaderServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onRedirect(e) {
    e.preventDefault();
    let el = document.getElementById('feaure');
    el.scrollIntoView({behavior: 'smooth'});
  }
}
