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
      feature1:"Growk Services is a Software Development company located in Guadalajara, Mexico",
      feature2:"we built a talented team of experts to develop your software",
      feature3:"Location, knowledge and experience",
      feature4:"",
      btn:"More..."
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Our Mission",
      feature1:"Talent oriented company",
      feature2:"proactive, Creative and Technically skilled team",
      feature3:"complete lifecycle of software development",
      feature4:"Agile methodologies",
      btn:"More..."
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Our Vision",
      feature1:"We are the most talented team to develop software using the latest technologies",
      feature2:"We are a reference to great software solutions",
      feature3:"",
      feature4:"",
      btn:"More..."
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Your perfect \n partner",
      feature1:"Located in the Mexican Silicon Valley ",
      feature2:"Start, Expand or improve your development team",
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
