import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'todo',
      component: TodoComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: ':id',
          component: TodoListComponent,
          canActivate: [AuthGuard]
        }
      ]
    }
  ])],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {
}
