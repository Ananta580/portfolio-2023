import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() rounded: 'full' | 'medium' | 'none' = 'full';
  @Input() title = '';
}
