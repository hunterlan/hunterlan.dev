import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Blog} from "../blog";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnDestroy {
  @Input({ required: true })
  currentArticle!: Blog;
  @Output()
  unselectBlog = new EventEmitter();

  ngOnDestroy(): void {
    this.unselectBlog.emit();
  }
}
