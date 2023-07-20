import { Injectable } from '@angular/core';
import { BaseService } from './base.services';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }
  public getUsers() {
    return this.base.getReq('/comments');
  }
}
