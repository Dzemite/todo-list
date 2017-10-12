import { Router } from "@angular/router";
import { TodoComponent } from "./todo-list/todo-list.component";

export const routes: Router = [
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full"
  },
  { path: "todo", component: TodoComponent }
];
