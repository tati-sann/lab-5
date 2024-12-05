import { GroupModel } from '../model';
import { Observable } from 'rxjs';

interface IGroupService {
  list(): Observable<GroupModel[]>;
}

export type { IGroupService };
