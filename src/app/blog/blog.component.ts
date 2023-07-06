import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service' 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public colorPicker : ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-9');
  }

}
