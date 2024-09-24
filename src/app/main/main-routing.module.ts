import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CommunityComponent } from './pages/community/community.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'skill',
        component: SkillComponent,
      },
      {
        path: 'experience',
        component: ExperienceComponent,
      },
      {
        path: 'graphics',
        component: GraphicsComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'community',
        component: CommunityComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
