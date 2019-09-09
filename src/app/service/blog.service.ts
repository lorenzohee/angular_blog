import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  getBlogList(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.server_add}/api/tasks`)
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${environment.server_add}/api/tasks/${id}`)
  }
}
