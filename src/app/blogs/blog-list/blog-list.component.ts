import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogList().subscribe( res => {
      this.blogs = res
    })
  }

}
