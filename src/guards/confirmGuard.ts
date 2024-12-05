import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {Observable, of} from 'rxjs';
import {StudentComponent} from '../app/student/student.component';

@Injectable({ providedIn: 'root' })
export class ConfirmGuard implements CanDeactivate<unknown> {
  canDeactivate(component: StudentComponent): Observable<boolean> {
    if (component.isFormSubmitted) {
      return of(true); // Разрешить переход без подтверждения
    } else {
      return new Observable(observer => {
        observer.next(confirm("Вы уверены, что хотите уйти? Данные не будут сохранены"));
      });
    }
  }
}
