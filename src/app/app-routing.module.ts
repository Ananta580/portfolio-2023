import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseListComponent } from './main/pages/showcase-list/showcase-list.component';
import { ShowcaseDetailComponent } from './main/pages/showcase-detail/showcase-detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'showcase/:id',
    component: ShowcaseListComponent,
  },
  {
    path: 'showcase-detail/:id',
    component: ShowcaseDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
