import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-business',
  templateUrl: './modern-sass-business.component.html',
  styleUrls: ['./modern-sass-business.component.scss']
})
export class ModernSassBusinessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  business = [
    {
      title:'Extended Teams',
      description:'designed for clients that need their own development team, to be able of managing not only the tasks but the culture and methodology; the team is allocated 100% to our clients\' projects.'
    },
    {
      title:'Time and Materials',
      description:'This is the solution for the clients that have specific tasks for specific skills, the talent will be allocated based on the requirements and time needed to fulfill the objectives for each milestone on the project.'
    },
    {
      title:'Build Operate Transer ( BOT )',
      description:'We help you to Build your team, attract the talent, perform human resources activities and any other opration tasks, After building your team, we operate the business. We provide our experience to implement agile methodologies to design, plan, document and execute software development processes to take your product from an idea to a reality;Once your team is ready and mature, we provide all the assistance to transfer the staff and the organization to you.'
    }
  ]
}
