import { Routes } from "@angular/router";
import { TodoComponent } from "./todo-list/todo-list.component";
import {StartPage} from "./start-page/start-page.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full"
  },
  { path: "todo", component: StartPage },
  { path: "todo/:id", component:  TodoComponent }
];
