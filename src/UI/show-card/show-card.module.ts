import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card.component';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [ShowCardComponent],
  exports: [ShowCardComponent],
  imports: [CommonModule, SharedModule],
})
export class ShowCardModule {}
