import { Component, OnInit } from '@angular/core';
import { UserServService } from '../user-serv.service'


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  public user;

  constructor(private userServ: UserServService) { 
  	this.user = {};
  }


   loginUser(){
   	this.userServ.userLogin(this.user)
   	// .then(data => {
    //             })
    //             .catch(error => {
    //                 swal(
    //                     'Oops...',
    //                     error.data.message,
    //                     'error'
    //                 );
    //             })
   }

  ngOnInit() {
  }

}
