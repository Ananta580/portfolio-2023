import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ExperienceComponent } from './pages/experience/experience.component';

@NgModule({
  declarations: [HomeComponent, MainComponent, AboutComponent, ContactComponent, GraphicsComponent, SkillComponent, ExperienceComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, LayoutModule],
})
export class MainModule {}
