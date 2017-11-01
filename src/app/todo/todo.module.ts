import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome/index';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {TodoListComponent} from './todo-list/todo-list.component';
import {CategoriesComponent} from './todo-categories/todo-categories.component';
import {TodoComponent} from './todo.component';

import {CategoriesService} from './todo-services/categories.service';
import {TodoListService} from './todo-services/todo-list.service';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
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
