import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input({ required: true })
  name!: string;

  @Input({required: true})
  filepath!: string;
}
