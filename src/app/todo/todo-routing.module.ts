import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TodoComponent} from "./todo.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: "todo", component: TodoComponent},
    {path: "todo/:id", component: TodoListComponent}
  ])],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {}
