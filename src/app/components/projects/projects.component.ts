import { Component } from '@angular/core';
import * as projectFile from '../../../assets/main/projects.json'
import {Project} from "./project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  jsonProjects = projectFile;

  constructor() {
    this.projects = this.jsonProjects.projects;
  }
}
