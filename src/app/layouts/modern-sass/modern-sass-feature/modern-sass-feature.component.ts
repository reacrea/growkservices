import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-feature',
  templateUrl: './modern-sass-feature.component.html',
  styleUrls: ['./modern-sass-feature.component.scss']
})
export class ModernSassFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

features = [
  {
    img:'assets/images/saas2/advance-feature/1.png',
    title: 'NEARSHORE PLUS',
    description: 'We are within your timezone and only a couple of hours away in a direct flight to one of the best cities in Mexico.'
  },
  {
    img:'assets/images/saas2/advance-feature/4.png',
    title: 'FULLY AGILE',
    description: 'With Certified Scrum Masters and Developers in our team, we adjust and align our process with yours.'
  },
  {
    img:'assets/images/saas2/advance-feature/3.png',
    title: 'BUSINESS STRATEGY',
    description: 'Wether you work with extended teams or on-demand time and materials, we are ready to collaborating with you.'
  }/*,
  {
    img:'assets/images/saas2/advance-feature/2.png',
    title: 'Data Science',
    description: 'Data analysis, database design, support and maintenance, profiling & troubleshooting',
    stack:'Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma, Miro'
  },
  {
    img:'assets/images/saas2/advance-feature/2.png',
    title: 'DevOps',
    description: 'Implementation of Continuous Integration and Continuous Development (CI/CD)  process with Azure Devops, AWS and Google Cloud Platform',
    stack:' Azure DevOps, Amazon Web Services, Google Cloud Platform, PowerShell, Networking, Pipelines'
  },
  {
    img:'assets/images/saas2/advance-feature/2.png',
    title: 'Quality Assurance',
    description: 'Test Engineers with web-based, desktop and mobile testing experience, working on different testing phases: Initiation, requirement analysis, test-case design and execution, and defect management.',
    stack:'Selenium, Postman, Protractor, C# .Net, MySQL, MSSQL'
  }*/
]
}
