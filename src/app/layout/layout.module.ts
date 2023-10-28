import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ButtonModule } from 'src/UI/button/button.module';
import { AudioPlayerModule } from 'src/UI/audio-player/audio-player.module';

@NgModule({
  declarations: [SideNavComponent, TopNavComponent],
  imports: [CommonModule, ButtonModule, AudioPlayerModule],
  exports: [SideNavComponent, TopNavComponent],
})
export class LayoutModule {}
