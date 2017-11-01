import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodoComponent} from './todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      redirectTo: '/todo',
      pathMatch: 'full'
    },
    {
      path: 'todo',
      component: TodoComponent,
      children: [
        {
          path: ':id',
          component: TodoListComponent
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
