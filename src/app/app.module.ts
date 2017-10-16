import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TodoComponent } from "./todo-list/todo-list.component";
import { TodosService } from "./db-services/todos.service";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoriesService } from "./db-services/index";
import { StartPage } from "./start-page/start-page.component";

import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoriesComponent,
    StartPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CategoriesService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
