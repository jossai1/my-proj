import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component'

export const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true //show dashboard as landing page /default start page
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
