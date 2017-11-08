import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

import {TodoListComponent} from './todo-list/todo-list.component';
import {CategoriesComponent} from './todo-categories/todo-categories.component';
import {TodoComponent} from './todo.component';
import {DialogOverviewExampleDialogComponent} from './dialogs/dialog-overview-example-dialog';

import {CategoriesService} from './todo-services/categories.service';
import {TodoListService} from './todo-services/todo-list.service';

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
    TodoListComponent,
    DialogOverviewExampleDialogComponent
  ],
  providers: [
    CategoriesService,
    TodoListService
  ],
  entryComponents: [DialogOverviewExampleDialogComponent]
})
export class TodoModule {
}
