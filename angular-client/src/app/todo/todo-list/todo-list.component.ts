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
  todoToEdit:any = {};
  todoToDelete:any = {};
  fetchingData:boolean = false;
  apiMessage:string;

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

  showEditTodo(todo:any):void{
    this.todoToEdit = todo;
    this.apiMessage = "";
  }

  EditTodo(todo:any):void{
    if(!todo){ return; }
    todo.id = this.todoToEdit._id;
    this.todoService.updateTodo(todo)
                    .then(td => {
                      const updatedTodos = this.todos.map(t => {
                        if(td.todo._id !== t._id){
                          return t;
                        }
                        return { ...t, ...td.todo };
                      })
                      this.apiMessage = td.message;
                      this.todos = updatedTodos;
                    })
  }

 showDeleteTodo(todo:any):void{
   this.todoToDelete = todo;
   this.apiMessage = "";
 }

 DeleteTodo(todo:any):void{
   if(!todo){ return; }
   this.todoService.deleteTodo(todo)
                   .then(td => {
                     const filteredTodos = this.todos.filter(t => t._id !== td.todo._id);
                     this.apiMessage = td.message;
                     this.todos = filteredTodos;
                   })
 }

}
