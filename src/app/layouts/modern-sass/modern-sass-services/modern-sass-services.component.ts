import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-services',
  templateUrl: './modern-sass-services.component.html',
  styleUrls: ['./modern-sass-services.component.scss']
})
export class ModernSassServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    {
      img:'assets/images/saas2/our-feature/2.png',
      title:'Web Development',
      description:'Front and Back-end development with JavaScript technologies, creating custom APIs running in Node as well as UI and client-based applications.',
      stack:'JavaScript, HTML5, CSS3, NodeJS, Express, Angular, ReactJs, MSSQL, MySQL, AWS, GraphQL, VueJs, PHP, C# .Net, Express'
    },
    {
      img:'assets/images/saas2/our-feature/5.png',
      title:'Mobile Development',
      description:'Develop the interfaces and the application for iOS and Android systems using different technologies',
      stack:'NativeScript, React Native, Ionic, Xamarin'
    },
    {
      img:'assets/images/saas2/our-feature/3.png',
      title:'UI/UX Design',
      description:'Wireframes & graphic design, UX analysis and requirements, branding design.',
      stack:'Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma, Mir'
    },
    {
      img:'assets/images/saas2/our-feature/4.png',
      title:'Data Science',
      description:'Data analysis, database design, support and maintenance, profiling & troubleshooting',
      stack:'MS SQL Server, Oracle, MySQL, MongoDB, PostgreSQL, MariaDB, DynamoDB,  Azure Data, Dynamo, Redshift'
    },
    {
      img:'assets/images/saas2/our-feature/1.png',
      title:'DevOps',
      description:'implementation of Continuous Integration and Continuous Development (CI/CD) process with Azure DevOps, AWS and Google Cloud Platform',
      stack:'Azure DevOps, Amazon Web Services, Google Cloud Platform, PowerShell, Networking, Pipelines'
    },
    {
      img:'assets/images/saas2/our-feature/6.png',
      title:'Quality Assurance',
      description:'Test Engineers with web-based, desktop and mobile testing experience, working on different testing phases: Initiation, requirement analysis, test-case design and execution, and defect management.',
      stack:'Selenium, Postman, Protractor, C# .Net, MySQL, MSSQL'
    }
  ]
}
