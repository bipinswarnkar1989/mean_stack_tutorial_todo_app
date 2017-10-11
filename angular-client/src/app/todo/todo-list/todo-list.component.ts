// ./angular-client/src/app/todo/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:any[] = [];
  todo:any = {};
  fetchingData:boolean = false;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.showAddTodoBox = true;
    this.todoService.getTodos()
                    .then(td => this.todos = td.todos )
  }

  AddTodo(todo:any):void{
    if(!todo){ return; }
    this.todoService.createTodo(todo)
                    .then(td => {
                      console.log(td);
                      this.todos.push(td.todo);
                    })
  }

}
