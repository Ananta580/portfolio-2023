import { Component, Input } from '@angular/core';
import { Showcase } from 'src/app/shared/models/showcase';

@Component({
  selector: 'p-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
  @Input() showcase?: Showcase;
}
