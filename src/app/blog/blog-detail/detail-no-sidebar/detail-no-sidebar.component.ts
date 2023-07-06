import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-details';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail-no-sidebar',
  templateUrl: './detail-no-sidebar.component.html',
  styleUrls: ['./detail-no-sidebar.component.scss']
})
export class DetailNoSidebarComponent implements OnInit {
  blogData = blogDetailDB.Details[0]
  public id: string;
  public idN: number;

  constructor(private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['ID'];
      console.log(params); // Print the parameter to the console. 
      console.log(id);
  });

  }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.idN =Number(this.id);
    this.idN-=1;
    console.log(this.idN)
    
    this.blogData = blogDetailDB.Details[this.idN]
    console.log(this.blogData.img)
    


  }

}
