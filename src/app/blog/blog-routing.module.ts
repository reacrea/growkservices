import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnNoSidebarComponent } from './blog-grid/column-no-sidebar/column-no-sidebar.component';
//import { ColumnLeftSidebarComponent } from './blog-grid/column-left-sidebar/column-left-sidebar.component';
//import { ColumnRightSidebarComponent } from './blog-grid/column-right-sidebar/column-right-sidebar.component';
import { ClassicNoSidebarComponent } from './blog-grid/classic-no-sidebar/classic-no-sidebar.component';
//import { ClassicRightSidebarComponent } from './blog-grid/classic-right-sidebar/classic-right-sidebar.component';
//import { ClassicLeftSidebarComponent } from './blog-grid/classic-left-sidebar/classic-left-sidebar.component';

import { DetailComponent } from './blog-detail/detail/detail.component';
//import { DetailGalleryComponent } from './blog-detail/detail-gallery/detail-gallery.component';
//import { DetailVideoComponent } from './blog-detail/detail-video/detail-video.component';
import { DetailNoSidebarComponent } from './blog-detail/detail-no-sidebar/detail-no-sidebar.component';
//import { DetailLeftSidebarComponent } from './blog-detail/detail-left-sidebar/detail-left-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blog-grid/column-no-sidebar',
        component: ColumnNoSidebarComponent,
        data: {
          title: "These are our blogs",
          breadcrumb: "Come on an take a closer look of what our expers have to say"
        }
      },
      {
        path: 'blog-grid/classic-no-sidebar',
        component: ClassicNoSidebarComponent,
        data: {
          title: "BLOG WITH FULL WIDTH No-SIDEBAR",
          breadcrumb: "Blog Grid View / Full Width No Sidebar"
        }
      },
      {
        path: 'blog-detail/detail',
        component: DetailComponent,
        data: {
          title: "BLOG WITH Right -SIDEBAR",
          breadcrumb: "Blog Details / Right Sidebar"
        }
      },
      {
        path: 'blog-detail/detail-no-sidebar/:id',
        component: DetailNoSidebarComponent,
        data: {
          title: "BLOG",
          breadcrumb: " "
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
