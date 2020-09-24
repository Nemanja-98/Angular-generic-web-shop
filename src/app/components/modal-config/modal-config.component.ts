import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsernameService} from '../user/username.service'
import { Store} from '@ngrx/store';

import * as actions from '../user/user.actions';
import * as fromUser from '../user/user.reducer';
import axios from 'axios'
@Component({
  selector: 'ngbd-modal-config',
  templateUrl: './modal-config.component.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class NgbdModalConfig {
  @Input() text :string;
  username: string;
  password: string;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private us: UsernameService,private store:Store<fromUser.State>,) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(){
    this.us.currentUsername.subscribe( username => this.username = username)
  }

  
  newMessage(username="") {
    // const input : HTMLInputElement = document.querySelector('.inputUserName')
    // const username :string = input.value;
    // console.log("event",input,username);
    this.us.changeUsername(username);
    //this.modalService.dismissAll();
  }

  async register(){
    let input : HTMLInputElement = document.querySelector('.inputUserName')
    const username :string = input.value;
    
    input =  document.querySelector('.inputPassowrd')
    const password :string = input.value;

    input =  document.querySelector('.inputEmail')
    const email :string = input.value;

    input =  document.querySelector('.inputAdress')
    const adress :string = input.value;

    input =  document.querySelector('.inputPhone')
    const phone :string = input.value;

    const payload = {
      "username": username,
      "password": password,
      "address":  adress,
      "phone":   phone
    }

    const user1 : fromUser.User = {
      id: new Date().getUTCMilliseconds().toString(),
      username: username,
      password: password,
      address: adress,
      phone: phone
    }
    console.log("dispecujem");
    this.store.dispatch( new actions.Create(user1));

    const res = await axios.post('http://localhost:4000/register', payload);
    if(res.data.message){
      alert(res.data.message);
    }
    
  }
  async logIn(){
    let input : HTMLInputElement = document.querySelector('.inputUserName')
    const username :string = input.value;

    input =  document.querySelector('.inputPassowrd')
    const password :string = input.value;

    const payload = {
      username: username,
      password: password
    }
    const res = await axios.post('http://localhost:4000/login', payload);
    console.log(res);
    if( !res.data.username ){
      alert("user doesnt exist")
    }else{
      //this.us.changeUsername(res.data.username);
      this.newMessage(res.data.username);
      this.modalService.dismissAll();
    }
    
  }

}