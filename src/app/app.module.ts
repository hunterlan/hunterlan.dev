import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { UkraineComponent } from './components/ukraine/ukraine.component';
import {MatListModule} from "@angular/material/list";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import { BlogsComponent } from './components/blogs/blogs.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MarkdownModule, MarkdownService} from "ngx-markdown";
import { ArticleComponent } from './components/blogs/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    UkraineComponent,
    BlogsComponent,
    ArticleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterOutlet,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    NgOptimizedImage,
    MarkdownModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
