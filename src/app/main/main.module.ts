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
import { ShowcaseListComponent } from './pages/showcase-list/showcase-list.component';
import { ShowcaseDetailComponent } from './pages/showcase-detail/showcase-detail.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ShowCardModule } from 'src/UI/show-card/show-card.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    GraphicsComponent,
    SkillComponent,
    ExperienceComponent,
    ShowcaseListComponent,
    ShowcaseDetailComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ShowCardModule,
    LayoutModule,
  ],
})
export class MainModule {}
