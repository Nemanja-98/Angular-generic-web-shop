import { Component, OnInit } from '@angular/core';
//import { Observable} from 'rxjs/Observable';
import { Store} from '@ngrx/store';

import * as actions from './user.actions';
import * as fromUser from './user.reducer'
import { Observable } from 'rxjs';
import { UsernameService } from './username.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string;
  users : Observable<any>
  constructor(private store:Store<fromUser.State>, private us:UsernameService) { }

  ngOnInit(): void {
    this.users = this.store.select(fromUser.selectAll);

    this.us.currentUsername.subscribe(username => {
      this.createUser(username,'123');
      this.username = username})
  }

  createUser(username:string,password:string){
    const user : fromUser.User = {
      id: '',
      username: username,
      password: password
    }

    this.store.dispatch( new actions.Create(user));
  }

  updateUser(id,username,password){
    this.store.dispatch( new actions.Update( id,{username:username,password:password}));
  }

  deleteUser(id){
    this.store.dispatch(new actions.Delete(id));
  }
}