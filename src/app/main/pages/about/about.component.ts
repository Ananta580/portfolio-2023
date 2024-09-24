import { ABOUT_PAGE } from './../../../shared/constant/about-page';
import { Component } from '@angular/core';

@Component({
  selector: 'p-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  about_section = ABOUT_PAGE;
}
