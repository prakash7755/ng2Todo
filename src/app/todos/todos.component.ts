import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';





@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todo;
  public todos;

  constructor(private todoServ: TodosService) {
    this.todo = {};
    this.todos = [];
    this.getTodoList();
  }


  getTodoList() {
    this.todoServ.todoLists()
      .then(data => {
        this.todos = data;
      })
  }



  addTodoLists() {
    this.todoServ.creatTodo(this.todo)
      .then(data => {
        this.todos.push(data)
      })
  }


  deleteProduct(index) {
    var id = this.todos[index]._id;
    this.todoServ.deleteTodo(id)
      .then(data => {
        this.todos.splice(index, 1)
      })
  }

  ngOnInit() {}

}
