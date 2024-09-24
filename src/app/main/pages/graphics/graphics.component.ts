import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GRAPHICS_COLLECTION } from 'src/app/shared/constant/graphics';

@Component({
  selector: 'p-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit {
  graphicsCollection = GRAPHICS_COLLECTION;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this._route.snapshot.fragment;
    setTimeout(() => {
      if (id) {
        this.scrollToElement(id);
      }
    }, 100);
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -50;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  }
}
