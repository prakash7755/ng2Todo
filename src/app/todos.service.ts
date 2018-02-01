import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


const apiURL: string = 'http://localhost:3000/api';


@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {}

  creatTodo(todo) {
    return this.http
      .post(apiURL + '/todo', todo)
      .toPromise()
      .then((data: any) => {
        return data
      })
      .catch(err => {
        console.error(err)
      })
  }


  todoLists() {
    return this.http
      .get(apiURL + '/todo')
      .toPromise()
      .then(data => {
        return data
      })
      .catch(res => {
        console.error(res);

      })

  }

  deleteTodo(id) {
    return this.http
      .delete(apiURL + '/todo/' + id)
      .toPromise()
      .then(data => {
        return data
      })
      .catch(err => {
        console.error(err)
      })

  }

}
