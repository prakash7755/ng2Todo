import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';




const apiURL: string = 'http://localhost:3000/auth';



@Injectable()
export class UserServService {
  constructor(private http: HttpClient) {}


  userLogin(user) {
    console.log("user ", user)
    return this.http
      .post(apiURL + '/login' , user)
      .toPromise()
      .then((data: any) => {
          (data || {}).user
          console.log("data ", data)
        })
      .catch(err => {
      	console.log("err ", err)
      })
      };


   createUser(user){
   	console.log(user)
   	return this.http
   	.post(apiURL + '/register', user)
   	.toPromise()
   	.then(data => {
   		console.log(data)
   	})
   	.catch(err => {
      	console.log("err ", err)
      })
   }

  }
