import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-pricing',
  templateUrl: './modern-sass-pricing.component.html',
  styleUrls: ['./modern-sass-pricing.component.scss']
})
export class ModernSassPricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pricing = [
    { 
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"About Us",
      feature1:"Growk Services is a Software Development company located in the so called Mexican Silicon Valley, Guadalajara city.",
      feature2:"we build an agile talented team of experts to find the best way to grow",
      feature3:"Location, knowledge and esperience",
      feature4:"",
      btn:"More..."
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Our Mission",
      feature1:"Talent orientated company",
      feature2:"proactive, Creative and Technically skilled team",
      feature3:"complete lifecycle service of software development",
      feature4:"Agile philosophy",
      btn:"More..."
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Our Vision",
      feature1:"Create the most talented team to use and build the lates technologies",
      feature2:"Become the reference of great software solutions",
      feature3:"",
      feature4:"",
      btn:"More..."
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Why Growk is you perfect partner",
      feature1:"Located in the Mexican Silicon Valley ",
      feature2:"Start, Expand or improve your team resucing risks",
      feature3:"highest software development quality",
      feature4:"Agile methodology",
      btn:"More..."
    }
  ]
  
  pricingcarouselOptions= {
    items: 3,
    nav: false,
    dots:true,
    autoplay: false,
    center: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 3
        }
    }
  }
}
