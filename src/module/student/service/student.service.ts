import type { IStudentService } from './student.service.interfice';
import { HttpClient } from '@angular/common/http';
import type { StudentModel } from '../model';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, throwError} from 'rxjs';

@Injectable( {providedIn: "root"} )
class StudentService implements IStudentService {
  constructor(private http: HttpClient) { }

  list(group: string): Observable<StudentModel[]>  {
    return this.http.get<StudentModel[]>(`http://localhost:3000/students`).pipe(map((students) => students.filter(student => student.groupLink === group)))
  }

  item(uuid: string): Observable<StudentModel | null>  {
    return this.http.get<StudentModel[]>(`http://localhost:3000/students`).pipe(map((students) => students.find(student => student.id === uuid) ?? null), catchError(error => of(null)))
  }

  create(student: StudentModel): Observable<void>  {
    return this.http.post<void>(`http://localhost:3000/students`, student)
  }

  edit(id: string, student: StudentModel): Observable<void> {
    return this.http.patch<void>(`http://localhost:3000/students/${id}`, student)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  del(uuid: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/students/${uuid}`)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}

export { StudentService };
