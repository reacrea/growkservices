import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus-us',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutTestimonial = [
    { 
      img:"assets/images/event/testimonial/L3-1.png"
    },
    {
      img:"assets/images/event/testimonial/L3-1.png"
    }
  ]
  
  aboutTestimonialCarouselOptions= {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: ['<img src="assets/images/music/gallery/gallery-icon/left.png">', '<img src="assets/images/music/gallery/gallery-icon/right.png">'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }


}
