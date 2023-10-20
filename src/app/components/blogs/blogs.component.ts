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
  currentBlog?: Blog;

  constructor() {
    this.blogs = this.jsonBlogs.blogs;
  }

  goToArticle(article: Blog): void {
    this.currentBlog = article;
  }

  unselectBlog() {
    this.currentBlog = undefined;
  }
}
