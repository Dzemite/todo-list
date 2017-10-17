import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodoRoutingModule} from "./todo-routing.module";

import {TodoListComponent} from "./todo-list/todo-list.component";
import {CategoriesComponent} from "./todo-categories/todo-categories.component";
import {TodoComponent} from "./todo.component";

import {CategoriesService} from "./todo-services/categories.service";

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    CategoriesComponent,
    TodoListComponent
  ],
  providers: [CategoriesService]
})
export class TodoModule {
}
