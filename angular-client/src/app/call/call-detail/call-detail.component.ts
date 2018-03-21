// ./angular-client/src/app/todo/todo-detail/todo-detail.component.ts
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo:any[]=[];

  constructor(
    private todoService:TodoService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit():void {
    this.route.paramMap
        .switchMap((params:ParamMap) => this.todoService.getTodo(params.get('id')))
        .subscribe(td => this.todo =  td.todo[0])
  }

  goBack():void {
    this.location.back();
  }



}
