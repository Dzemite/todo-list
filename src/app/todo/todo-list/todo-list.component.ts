import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {TodoListService} from "../todo-services/todo-list.service";
import {Todo} from "./todo";

@Component({
  moduleId: module.id,
  selector: "todo-list",
  templateUrl: "todo-list.component.html",
  styleUrls: ["todo-list.component.css"]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  errorMessage: string;
  categoryId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: TodoListService) {  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.categoryId = params["id"];
      this.updateTodos();
    });
  }

  addNewTodo(newTodo: string) {
    var todo: Todo = new Todo(null, newTodo, false, this.categoryId);
    this.service.addTodo(todo)
      .subscribe(
        () => this.updateTodos(),
        error => this.errorMessage = error
      );
  }

  editTodo(todo: Todo) {
    let newTodo = prompt('Put new todo.', todo.name);

    if (newTodo) {
      todo.name = newTodo;
      this.service.editTodo(todo)
        .subscribe(
          () => this.updateTodos(),
          error => this.errorMessage = error
        )
    }
  }

  deleteTodo(todo: Todo) {
    confirm("Вы точно хотите удалить задачу " + todo.name + "?") ?
      this.service.deleteTodo(todo._id)
        .subscribe(
          () => this.updateTodos(),
          error => this.errorMessage = error
        )
      : null;
  }

  private updateTodos() {
    this.service.getTodos(this.categoryId)
      .subscribe(
        todos => this.todos = todos,
        error => this.errorMessage = error
      );
  }
}
