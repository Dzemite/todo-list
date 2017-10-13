import { Routes } from "@angular/router";
import { TodoComponent } from "./todo-list/todo-list.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full"
  },
  { path: "todo", component: TodoComponent }
];
