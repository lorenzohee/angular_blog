import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { BlogsComponent } from './blogs.component';

const blogRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogsComponent,
        children: [
          {
            path: ':id',
            component: BlogDetailComponent
          },
          {
            path: '',
            component: BlogListComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent, BlogsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(blogRoutes)
  ]
})
export class BlogsModule { }
