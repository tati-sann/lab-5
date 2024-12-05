import type { IGroupService } from './group.service.interfice';
import { HttpClient } from '@angular/common/http';
import type { GroupModel } from '../model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
class GroupService implements IGroupService {
  constructor(private http: HttpClient) { }

  list(): Observable<GroupModel[]>  {
    return this.http.get<GroupModel[]>(`http://localhost:3000/groups`)
  }
}

export { GroupService };
