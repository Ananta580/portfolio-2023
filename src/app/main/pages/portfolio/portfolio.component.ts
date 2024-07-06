import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SHOWCASE_SECTION } from 'src/app/shared/constant/showcases';

@Component({
  selector: 'p-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  sections = SHOWCASE_SECTION;

  constructor(private router: Router) {}

  showDetail(parentId: number, id: number) {
    this.router.navigateByUrl(`/showcase-detail/${id}?parentId=${parentId}`);
  }
}
