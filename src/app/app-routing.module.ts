import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernSassComponent } from './layouts/modern-sass/modern-sass.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contactus/contactus.component';
//import { ShopComponent } from './shop/shop.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: ModernSassComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    data: {
      breadcrumb: "Blog"
    }
  },
  // {
  //   path: 'page',
  //   component: PagesComponent,
  //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  //   data: {
  //     breadcrumb: "Pages"
  //   }
  // }
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      title: "About Us",
      breadcrumb: "This is what Growk services is and what we do"
    }
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    data: {
      title: "Contact Us",
      breadcrumb: " "
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
