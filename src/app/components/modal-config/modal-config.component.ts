import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsernameService} from '../user/username.service'
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

  constructor(config: NgbModalConfig, private modalService: NgbModal, private us: UsernameService) {
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

  
  newMessage() {
    const input : HTMLInputElement = document.querySelector('.inputUserName')
    const username :string = input.value;
    console.log("event",input,username);
    this.us.changeUsername(username);
    this.modalService.dismissAll();
  }

}