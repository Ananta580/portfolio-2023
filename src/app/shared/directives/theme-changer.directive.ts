import { Directive, ElementRef, HostListener } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Directive({
  selector: '[ThemeChanger]',
})
export class ThemeChangerDirective {
  constructor(private themeService: ThemeService) {}

  @HostListener('click') onClick() {
    this.themeService.toogleTheme();
  }
}
