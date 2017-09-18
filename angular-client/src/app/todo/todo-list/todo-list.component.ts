import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:any[] = [];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
                    .then(td => this.todos = td.todos )
  }

}
