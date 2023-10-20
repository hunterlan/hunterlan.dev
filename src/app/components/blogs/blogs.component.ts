import { Component } from '@angular/core';
import {Blog} from "./blog";
import * as blogsFile from '../../../assets/blogs/blogs.json'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs: Blog[] = [];
  jsonBlogs = blogsFile;

  constructor() {
    this.blogs = this.jsonBlogs.blogs;
  }

  goToBlog(blogFile: string): void {
    
  }
}
