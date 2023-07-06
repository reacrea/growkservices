import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernSassComponent } from './layouts/modern-sass/modern-sass.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
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
  {
    path: 'page',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: "Pages"
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
