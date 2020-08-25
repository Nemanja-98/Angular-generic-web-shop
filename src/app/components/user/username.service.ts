import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsernameService {

  private messageSource = new BehaviorSubject('');
  currentUsername = this.messageSource.asObservable();

  constructor() { }

  changeUsername(username: string) {
    this.messageSource.next(username)
  }

}
