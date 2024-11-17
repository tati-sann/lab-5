import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { GreetingComponent } from './greeting/greeting.component';

enum RoutePaths {
  HOME = "",
  GROUP = 'group/:id',
  GROUP_NONE = 'group',
  GREETING = '**',
}

export const routes: Routes = [
  {
    path: RoutePaths.HOME,
    component: HomeComponent,
  },
  {
    path: RoutePaths.GROUP,
    component: GroupComponent,
  },
  {
    path: RoutePaths.GROUP_NONE,
    component: GroupComponent,
  },
  {
    path: RoutePaths.GREETING,
    component: GreetingComponent,
  },
];
