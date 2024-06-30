import { Showcase } from './../../../shared/models/showcase';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SHOWCASE_SECTION } from 'src/app/shared/constant/showcases';

@Component({
  selector: 'p-showcase-detail',
  templateUrl: './showcase-detail.component.html',
  styleUrls: ['./showcase-detail.component.scss'],
})
export class ShowcaseDetailComponent {
  showcase?: Showcase;

  constructor(private _route: ActivatedRoute, private location: Location) {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.showcase = SHOWCASE_SECTION[0].showCases[0];
    }
  }

  goBack() {
    this.location.back();
  }
}
