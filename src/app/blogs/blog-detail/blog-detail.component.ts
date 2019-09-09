import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blog: Blog;
  
  constructor(
    private http: BlogService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getBlogById(id);
  }

  getBlogById(id) {
    this.http.getBlogById(id).subscribe( res => {
      this.blog = res;
    })
  }
}
