import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernSassComponent } from './modern-sass/modern-sass.component';
import { ModernSassServiceComponent } from './modern-sass-services/modern-sass-services.component';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  {
    path: 'agency',
    component: AgencyComponent,
    data: {
      title: "Agency | Unice Landing Page",
      content: "Agency Angular 8 landing page with Angular Universal | SSR | SEO friendly"
    }
  },
  {
    path: 'modern-sass',
    component: ModernSassComponent,
    data: {
      title: "Modern SASS| Unice Landing Page"
    }
  },
  {
    path: 'services',
    component: ModernSassServiceComponent,
    data: {
      title: "Growk Services | Our Services"
    }
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
