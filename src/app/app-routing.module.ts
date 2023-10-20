import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {UkraineComponent} from "./components/ukraine/ukraine.component";
import {BlogsComponent} from "./components/blogs/blogs.component";

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Kostiantyn Sharykin'},
  {path: 'projects', component: ProjectsComponent, title: 'Projects'},
  {path: 'ukraine', component: UkraineComponent, title: 'Help Ukraine'},
  {path: 'blogs', component: BlogsComponent, title: 'Blogs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
