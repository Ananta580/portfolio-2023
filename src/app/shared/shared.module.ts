import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeChangerDirective } from './directives/theme-changer.directive';

@NgModule({
  declarations: [ThemeChangerDirective],
  imports: [CommonModule],
  exports: [ThemeChangerDirective],
})
export class SharedModule {}
