import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SHOWCASE_SECTION } from 'src/app/shared/constant/showcases';
import { Showcase } from 'src/app/shared/models/showcase';

@Component({
  selector: 'p-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  sections = SHOWCASE_SECTION;

  constructor(private router: Router) {}

  showDetail(parentId: number, showcase: Showcase) {
    if (showcase.isGraphics) {
      this.router.navigate([`/graphics`], {
        fragment: showcase.companyName,
      });
      return;
    }
    this.router.navigateByUrl(
      `/showcase-detail/${showcase.id}?parentId=${parentId}`
    );
  }
}
