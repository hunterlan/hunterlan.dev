import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kostiantyn Sharykin';

  private icons = [
    {
      iconName: 'github-mark',
      url: '../assets/icons/github-icon.svg',
    },
    {
      iconName: 'github-mark-white',
      url: '../assets/icons/github-mark-white.svg',
    }
  ];

  constructor(private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer) {
    for (const icon of this.icons) {
      this.matIconRegistry.addSvgIcon(icon.iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url));
    }
  }
}
