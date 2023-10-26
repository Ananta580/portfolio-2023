import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ButtonModule } from 'src/UI/button/button.module';

@NgModule({
  declarations: [SideNavComponent, TopNavComponent],
  imports: [CommonModule, ButtonModule],
  exports: [SideNavComponent, TopNavComponent],
})
export class LayoutModule {}
