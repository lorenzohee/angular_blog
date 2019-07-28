import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

const blogRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogListComponent,
        children: [
          {
            path: ':id',
            component: BlogDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(blogRoutes)
  ]
})
export class BlogsModule { }
