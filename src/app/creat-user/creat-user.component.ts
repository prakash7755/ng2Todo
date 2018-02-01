import { Component, OnInit } from '@angular/core';
import { UserServService } from '../user-serv.service'

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent implements OnInit {
   public user;
  constructor(private userServ: UserServService) { 
  	this.user = {};
  }

  newUser() {
   this.userServ.createUser(this.user);
  }

  ngOnInit() {
  }


}
