import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { GreetingComponent } from './greeting/greeting.component';
import {StudentComponent} from './student/student.component';
import {ConfirmGuard} from '../guards/confirmGuard';

enum RoutePaths {
  HOME = "",
  GROUP = 'group/:id',
  GROUP_NONE = 'group',
  STUDENT = 'student',
  STUDENT_EDIT = 'student/:id',
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
    path: RoutePaths.STUDENT,
    component: StudentComponent,
    canDeactivate: [ConfirmGuard]
  },
  {
    path: RoutePaths.STUDENT_EDIT,
    component: StudentComponent,
    canDeactivate: [ConfirmGuard]
  },
  {
    path: RoutePaths.GREETING,
    component: GreetingComponent,
  },
];
