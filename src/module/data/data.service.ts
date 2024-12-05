import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {StudentModel} from '../student/model';


@Injectable({ providedIn: 'root' })
export class DataService {
  private studentSubject = new BehaviorSubject<StudentModel | null>(null);
  student$ = this.studentSubject.asObservable();

  setStudent(student: StudentModel) {
    this.studentSubject.next(student);
  }
}
