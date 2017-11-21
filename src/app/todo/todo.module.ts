import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

import {TodoListComponent} from './todo-list/todo-list.component';
import {CategoriesComponent} from './todo-categories/todo-categories.component';
import {TodoComponent} from './todo.component';

import {CategoriesService} from './todo-services/categories.service';
import {TodoListService} from './todo-services/todo-list.service';
import {HttpClient} from '@angular/common/http';
import {TemplateDeleteDialogComponent} from '../dialogs/template-delete-dialog/template-delete-dialog.component';
import {TemplateEditTodoDialogComponent} from '../dialogs/template-edit-todo-dialog/template-edit-todo-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    TodoComponent,
    CategoriesComponent,
    TodoListComponent
  ],
  providers: [
    CategoriesService,
    TodoListService,
    HttpClient
  ],
  entryComponents: [
    TemplateDeleteDialogComponent,
    TemplateEditTodoDialogComponent
  ]
})
export class TodoModule {
}
