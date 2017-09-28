// ./angular-client/src/app/app.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private todoService:TodoService) { }

 // class method for toggling  AddTodoBox in todo-list.component.html
  showAddTodoBox(e):void{
    e.preventDefault();
    this.todoService.showAddTodoBox = !this.todoService.showAddTodoBox;
  }

}
