import type { StudentModel } from '../model';
import { Observable } from 'rxjs';

interface IStudentService {
  list(group: string): Observable<StudentModel[]>;
  item(uuid: string): Observable<StudentModel | null>;
  create(student: StudentModel): Observable<void>;
  edit(id: string, student: StudentModel): Observable<void>;
  del(uuid: string): Observable<void>;
}

export type { IStudentService };
