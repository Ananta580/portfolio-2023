import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeChangerDirective } from './directives/theme-changer.directive';
import { DateDifferencePipe } from './pipes/date-difference.pipe';

@NgModule({
  declarations: [ThemeChangerDirective, DateDifferencePipe],
  imports: [CommonModule],
  exports: [ThemeChangerDirective, DateDifferencePipe],
})
export class SharedModule {}
