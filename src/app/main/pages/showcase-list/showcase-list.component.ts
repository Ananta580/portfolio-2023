import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SHOWCASE_SECTION } from 'src/app/shared/constant/showcases';
import { Showcase, ShowcaseSection } from 'src/app/shared/models/showcase';

@Component({
  selector: 'p-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss'],
})
export class ShowcaseListComponent {
  section?: ShowcaseSection;

  constructor(
    private _route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) this.section = SHOWCASE_SECTION.find((x) => x.id == Number(id));
  }

  goBack() {
    this.location.back();
  }

  showDetail(showcase: Showcase) {
    this.router.navigateByUrl(
      `/showcase-detail/${showcase.id}?parentId=${this.section?.id}`
    );
  }
}
