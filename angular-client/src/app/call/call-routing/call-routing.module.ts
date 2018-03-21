// ./angular-client/src/app/todo/todo-routing/todo-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component'

const todoRoutes: Routes = [
  { path:'todos', component:TodoListComponent },
  { path:'todo/:id', component:TodoDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(todoRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TodoRoutingModule { }
