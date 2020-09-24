import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
//import { Observable} from 'rxjs/Observable';
import { Store, select} from '@ngrx/store';

import * as actions from './user.actions';
import * as fromUser from './user.reducer'
import { Observable } from 'rxjs';
import { UsernameService } from './username.service';
import axios from 'axios';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() signedOut : boolean;
  @Output() newUsernameEvent = new EventEmitter<string>();
  username : string = '';
  users : Observable<any>;
  constructor(private store:Store<fromUser.State>, private us:UsernameService) { }

  ngOnInit(): void {
    this.users = this.store.select(fromUser.selectAll);
    console.log("users",this.users);
    this.us.currentUsername.subscribe(username => { 
      //this.createUser(username,'123');
      this.username = username})
  }

  createUser(username:string,password:string){
    const user : fromUser.User = {
      id: new Date().getUTCMilliseconds().toString(),
      username: username,
      password: password,
      address: "",
      phone: ""
    }
    
    console.log("createUser",username);
    this.newUsernameEvent.emit(username);
    this.store.dispatch( new actions.Create(user));
  }

  updateUser(id,username){
    console.log("updateUser");
    const selector =id+username;
    const input :any = document.getElementById(selector);
    console.log("passowrd input",input.value,typeof(input));
    this.newUsernameEvent.emit(username);
    this.store.dispatch( new actions.Update( id,{username:username,password:input.value}));
  }

  async deleteUser(id,username){
    this.store.dispatch(new actions.Delete(id));
    await axios.delete(`http://localhost:4000/users/${username}`);
  }
}
