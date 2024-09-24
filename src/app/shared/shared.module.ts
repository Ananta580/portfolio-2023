import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDifferencePipe } from './pipes/date-difference.pipe';

@NgModule({
  declarations: [DateDifferencePipe],
  imports: [CommonModule],
  exports: [DateDifferencePipe],
})
export class SharedModule {}
