import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodoRoutingModule} from "./todo-routing.module";

import {TodoListComponent} from "./todo-list/todo-list.component";
import {CategoriesComponent} from "./todo-categories/todo-categories.component";
import {TodoComponent} from "./todo.component";

import {CategoriesService} from "./todo-services/categories.service";
import {TodoListService} from "./todo-services/todo-list.service";
import {AngularFontAwesomeModule} from "angular-font-awesome/index";

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    TodoComponent,
    CategoriesComponent,
    TodoListComponent
  ],
  providers: [
    CategoriesService,
    TodoListService
  ]
})
export class TodoModule {
}
