import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [SideNavComponent, TopNavComponent],
  imports: [CommonModule],
})
export class LayoutModule {}
